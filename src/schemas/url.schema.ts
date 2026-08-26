import {z} from "zod";

const urlSchema = z.object({
    originalUrl: z.url(),
});

export default urlSchema;