import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  res.json({
    message: "Welcome to your custom Medusa 2.0 endpoint!",
  })
}
