import { appError } from "../utils/appError.js";

export const validateInputs = (schema) => {
    return (req, res, next) => {
        let filter = { ...req.params, ...req.body, ...req.query };
        if (req.file) filter.image = req.file;
        let { error } = schema.validate(filter, { abortEarly: false });
        if (error) {
            let errMessages = [];
            error.details.forEach(val => {
                errMessages.push(val.message);
            });
            next(new appError(errMessages, 401));
        }
        else {
            next();
        }
    };
};

