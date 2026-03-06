import { Metadata } from "next"
import { getRegion } from "@lib/data/regions"
import HotelHero from "@modules/home/components/hotel-hero"
import HotelAmenities from "@modules/home/components/hotel-amenities"
import Testimonials from "@modules/home/components/hotel-testimonials"
import HotelCTA from "@modules/home/components/hotel-cta"

export const metadata: Metadata = {
  title: "Metora — Where Luxury Meets Comfort",
  description:
    "Experience unparalleled luxury at Metora. Premium rooms, world-class amenities, and personalised service await you.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  return (
    <>
      {/* Cinematic Hero with Availability Search */}
      <HotelHero />

      {/* World-Class Amenities */}
      <HotelAmenities />

      {/* Guest Testimonials */}
      <Testimonials />

      {/* Parallax Booking CTA */}
      <HotelCTA />
    </>
  )
}
