import slugify from "slugify";
import { categoryModel } from "../../../Database/Models/category.model.js";
import { catchError } from "../../Middlewares/catchError.js";
import { appError } from "../../utils/appError.js";

const addCategory = catchError(async (req, res, next) => {
    req.body.slug = slugify(req.body.name);
    req.body.image = req.file.filename;
    let category = new categoryModel(req.body);
    await category.save();
    res.json({ message: 'success', category });
});

const getSingleCategory = catchError(async (req, res, next) => {
    let category = await categoryModel.findById(req.params.id);
    category && res.json({ message: 'success', category });
    !category && next(new appError('category is not found', 404));
});

const updateCategory = catchError(async (req, res, next) => {
    if (req.body.name) req.body.slug = slugify(req.body.name);
    if(req.file) req.body.image = req.file.filename;
    let category = await categoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    category && res.json({ message: 'success', category });
    !category && next(new appError('category is not found', 404));
});

const deleteCategory = catchError(async (req, res, next) => {
    let category = await categoryModel.findByIdAndDelete(req.params.id);
    category && res.json({ message: 'success', category });
    !category && next(new appError('category is not found', 404));

});

const getAllCategories = catchError(async (req, res, next) => {
    let categories = await categoryModel.find().sort({ createdAt: -1 });
    res.json({ message: "success", categories });
});



export {
    addCategory,
    updateCategory,
    deleteCategory,
    getAllCategories,
    getSingleCategory
}
