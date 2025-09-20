import joi from "joi";

const validateAddToCart = joi.object({
    product: joi.string().hex().length(24).required(), // since ObjectId is 24-char hex string
    quantity: joi.number().min(1).required(),
    price: joi.number().min(0).required()
}).unknown(true);


export {
    validateAddToCart
}


