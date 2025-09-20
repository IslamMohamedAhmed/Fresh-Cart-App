import { cartModel } from "../../../Database/Models/cart.model.js";
import { productModel } from "../../../Database/Models/product.model.js";
import { catchError } from "../../Middlewares/catchError.js";
import { appError } from "../../Utils/appError.js";


const addToCart = catchError(async (req, res, next) => {
    let tokenUser = req.headers['user-info'];
    let cartExist = await cartModel.findOne({ user: tokenUser.id });
    let product = await productModel.findById(req.body.product);
    if (!cartExist) {
        if (req.body.quantity > product.quantity) {
            next(new appError('invalid quatity!!', 401));
        }
        else {
            let cart = new cartModel({
                user: tokenUser.id,
                cartItems: [req.body]
            });
            await cart.save();
            res.json({ message: 'success', cart });
        }
    }
    else {
        let result = await cartModel.findOne({ user: tokenUser.id });
        let productExist = result.cartItems.find(item => item.product.equals(product._id));
        if (productExist) {
            if (productExist.quantity + req.body.quantity > product.quantity) {
                return next(new appError('invalid quantity!!', 401));
            }
            else {
                productExist.quantity += req.body.quantity;
            }
        }
        else {
            if (req.body.quantity > product.quantity) {
                next(new appError('invalid quatity!!', 401));
            }
            else {
                result.cartItems.push(req.body);
            }
        }
        await result.save();
        res.json({ message: 'success', result });
    }
});



export {
    addToCart
}