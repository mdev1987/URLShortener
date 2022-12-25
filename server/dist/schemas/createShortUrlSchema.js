import { object, string } from "yup";
export default object({
    body: object({
        destination: string().required('destination is required')
    })
});
//# sourceMappingURL=createShortUrlSchema.js.map