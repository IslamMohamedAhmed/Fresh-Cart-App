import express from "express";
import { addCategory, deleteCategory, getAllCategories, getSingleCategory, updateCategory } from "./category.controller.js";
import { validateInputs } from "../../Middlewares/validateInputs.js";
import { validateAddCategory, validateParamsId, validateUpdateCategory } from "./category.validation.js";
import { uploadSingle } from "../../services/uploadFile/fileUpload.js";

const categoryRouter = express.Router();

categoryRouter.route('/').get(getAllCategories).post(uploadSingle('image', 'uploads/categories/images'), validateInputs(validateAddCategory), addCategory);
categoryRouter.route('/:id').delete(validateInputs(validateParamsId), deleteCategory).put(uploadSingle('image', 'uploads/categories/images'), validateInputs(validateUpdateCategory), updateCategory).get(getSingleCategory);

export default categoryRouter;