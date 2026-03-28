import { revalidateTag } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

/**
 * This endpoint allows for manual revalidation of Next.js cache tags.
 * It is useful for webhooks from Medusa Admin when products are updated.
 * 
 * Usage: POST /api/revalidate?tag=products&secret=YOUR_REVALIDATE_SECRET
 */
export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const tag = searchParams.get("tag")
  const secret = searchParams.get("secret")

  // Check if revalidate secret is correct
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 })
  }

  if (!tag) {
    return NextResponse.json({ message: "Missing tag parameter" }, { status: 400 })
  }

  try {
    revalidateTag(tag)
    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 })
  }
}

// Also support GET for easy manual testing in browser (if desired, but POST is safer)
export async function GET(request: NextRequest) {
    return POST(request)
}
