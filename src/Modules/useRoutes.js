import express from 'express';
import categoryRouter from './Category/category.routes.js';
import subCategoryRouter from './SubCategory/subcategory.routes.js';
import brandRouter from './Brand/brand.routes.js';
import productRouter from './Product/product.routes.js';
import authRouter from './authentication/auth.routes.js';
import userRouter from './User/user.routes.js';
import reviewRouter from './Review/review.routes.js';
import { invalidPathHandler } from '../Middlewares/invalidPathHandler.js';
import { globalErrorHandler } from '../Middlewares/globalErrorHandler.js';
import wishlistRouter from './Wishlist/wishlist.routes.js';
import addressRouter from './Address/Address.routes.js';
export const useRoutes = (app) => {
    app.use('/api/v1/categories/images', express.static('uploads/categories/images'));
    app.use('/api/v1/brands/logos', express.static('uploads/brands/logos'));
    app.use('/api/v1/products/images', express.static('uploads/products/images'));
    app.use('/api/v1/categories', categoryRouter);
    app.use('/api/v1/sub-categories', subCategoryRouter);
    app.use('/api/v1/brands', brandRouter);
    app.use('/api/v1/products', productRouter);
    app.use('/api/v1/users-auth', authRouter);
    app.use('/api/v1/users', userRouter);
    app.use('/api/v1/reviews', reviewRouter);
    app.use('/api/v1/wishlists', wishlistRouter);
    app.use('/api/v1/addresses', addressRouter);
    app.use(invalidPathHandler);
    app.use(globalErrorHandler);

};