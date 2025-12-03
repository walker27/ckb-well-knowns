
import * as fs from "node:fs"
import z from "zod"
import { udtSchema } from "./udt.zod.mts"



const jsonSchema = z.toJSONSchema(udtSchema);

fs.writeFileSync("./udt/schema.json", JSON.stringify(jsonSchema, null, 2));
