
import * as fs from "node:fs"
import z from "zod"
import { scriptSchema } from "./script.zod.mts"



const jsonSchema = z.toJSONSchema(scriptSchema);

fs.writeFileSync("./script/schema.json", JSON.stringify(jsonSchema, null, 2));
