import { object, string } from "yup";

export default object({
    body: object({
        destination: string()
        .required('destination is required')
        .url('destination must be a valid url')
    })
})