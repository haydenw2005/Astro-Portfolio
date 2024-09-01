import type { ImageMetadata } from "astro";
import { getImage } from "astro:assets";

interface OptimizationOptions {
  width: number;
  format: "webp" | "avif" | "png" | "jpg" | "svg";
}

export async function optimizeImage(
  source: string | { src: string },
  imageModules: { default: ImageMetadata }[],
  options: OptimizationOptions
) {
  const imagePath = typeof source === "string" ? source : source.src;
  const baseName = imagePath.split(".").slice(0, -1).join(".");

  const imageModule = imageModules.find((img) =>
    img.default.src.toLowerCase().includes(baseName.toLowerCase())
  );

  if (!imageModule) {
    console.error("Image not found:", imagePath);
    return { original: imagePath, optimizedSrc: "" };
  }

  try {
    const optimizedImage = await getImage({
      src: imageModule.default,
      ...options,
    });
    return { original: imagePath, optimizedSrc: optimizedImage.src };
  } catch (error) {
    console.error("Error processing image:", imagePath, error);
    return { original: imagePath, optimizedSrc: "" };
  }
}
