import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      {/* Feature Image - The Main Visual */}
      {images.length > 0 && (
        <div
          className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 group cursor-zoom-in"
          key={images[0].id}
        >
          <Image
            src={images[0].url || ""}
            priority={true}
            className="absolute inset-0 object-cover rounded-none transition-transform duration-700 group-hover:scale-105"
            alt="Main product visual"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 border border-black/5 pointer-events-none" />
        </div>
      )}

      {/* Secondary Images - Tiled Grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-2 gap-4">
          {images.slice(1).map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 group cursor-pointer"
            >
              <Image
                src={image.url || ""}
                priority={false}
                className="absolute inset-0 object-cover rounded-none transition-transform duration-500 group-hover:scale-110"
                alt={`Product detail ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 400px"
              />
              <div className="absolute inset-0 border border-black/5 group-hover:border-black/10 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageGallery
