import {
  type SubscriberArgs,
  type SubscriberConfig,
} from "@medusajs/framework"

export default async function productRevalidateHandler({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
  const storefrontUrl = process.env.STOREFRONT_URL || "http://localhost:8000"
  const revalidateSecret = process.env.REVALIDATE_SECRET || "supersecret"

  console.log(`[Revalidate Subscriber] Product event received for ID: ${data.id}`)

  try {
    const response = await fetch(
      `${storefrontUrl}/api/revalidate?tag=products&secret=${revalidateSecret}`,
      {
        method: "POST",
      }
    )

    if (response.ok) {
      console.log(`[Revalidate Subscriber] Successfully triggered storefront revalidation for products`)
    } else {
      const errorText = await response.text()
      console.error(
        `[Revalidate Subscriber] Failed to trigger storefront revalidation. Status: ${response.status}, Error: ${errorText}`
      )
    }
  } catch (error) {
    console.error(`[Revalidate Subscriber] Error during storefront revalidation:`, error)
  }
}

export const config: SubscriberConfig = {
  event: ["product.created", "product.updated", "product.deleted"],
}
