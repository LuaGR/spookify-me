import { defineCollection } from 'astro:content'
import { cldAssetsLoader } from 'astro-cloudinary/loaders'

const images = defineCollection({
  loader: cldAssetsLoader({
    limit: 3
  })
})

export const collections = {
  images
}
