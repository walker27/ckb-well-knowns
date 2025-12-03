import * as z from "zod";

const deploymentSchema = z.object({
  tag: z.string().optional(),
  manager: z.string().optional(),
  deprecated: z.boolean(),
  type: z.object({
    codeHash: z.string().min(1),
    hashType: z.enum(["type", "data", "data1", "data2"]),
    args: z.string().min(1)
  })
})

export const udtSchema = z.object({
  "$schema": z.string(),
  name: z.string().min(1, { error: "Name is required" }).describe("UDT Name"),
  symbol: z.string().min(1, { error: "Symbol is required" }).max(8),
  icon: z.string().optional(),
  decimal: z.number().min(0).max(8),
  tags: z.array(z.enum(["rgb++", "layer-1-asset", "layer-2-asset", "supply-limited"])).optional(),
  deployments: z.object({
    mainnet: z.array(deploymentSchema),
    testnet: z.array(deploymentSchema),
  })
})