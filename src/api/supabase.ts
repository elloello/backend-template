import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv"; config({ path: "./config/.env" })

const { URL, KEY } = process.env;

export const client = createClient(String(URL), String(KEY));