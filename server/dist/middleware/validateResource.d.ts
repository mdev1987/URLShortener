import { NextFunction, Request, Response } from "express";
import { AnyObjectSchema } from "yup";
declare const validateResource: (resouceSchema: AnyObjectSchema) => (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export default validateResource;
//# sourceMappingURL=validateResource.d.ts.map