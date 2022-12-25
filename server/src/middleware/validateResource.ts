import { NextFunction, Request, Response } from "express";
import { AnyObjectSchema } from "yup";


const validateResource = (resouceSchema: AnyObjectSchema) => async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        await resouceSchema.validate({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    } catch (ex: any) {        
        return res.status(400)
            .json({ message: ex.message })
    }
}

export default validateResource;