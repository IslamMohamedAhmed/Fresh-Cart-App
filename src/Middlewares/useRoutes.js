import categoryRouter from "../Modules/Category/category.routes.js";
import express from 'express';
export const useRoutes = (app) => {
    app.use('/api/v1/categories/images', express.static('uploads/categories/images'));
    app.use('/api/v1/categories', categoryRouter);
};