import Joi from "joi";

export const postValidator = Joi.object({
    title: Joi.string()
        .pattern(/\w{3,}/)
        .messages({
            "string.pattern.base": "you don't match the pattern",
        }),
    body: Joi.string().min(3).messages({
        "string.min": "must be at least 3 characters"}),
    userId: Joi.number().min(1).messages({
        "NUmber.min": "must be at least 1",
    }),
});

export default postValidator;