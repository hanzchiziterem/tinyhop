import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.string().default("development"),
  PORT: z
    .string()
    .default("3678")
    .transform((val) => parseInt(val, 10)),
  MONGODB_URI: z.string(),
});

const parsedEnv = envSchema.safeParse(process.env);

//@warn: If true, stop the application immediately.
if (!parsedEnv.success) {
  const formattedErrors = z.treeifyError(parsedEnv.error);
  console.error(formattedErrors);
  process.exit(1);
}

export const config = parsedEnv.data;
