import { join } from "node:path";
import sharp from "sharp";

const imagesDir = join(import.meta.dir, "public", "images");
const inputPath = join(imagesDir, "stop.png");

async function addPadding() {
  console.log("Adding padding to stop.png...");

  // Get original dimensions
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const width = metadata.width!;
  const height = metadata.height!;

  // Scale down by 10% (so it's 90% of original size)
  const newSize = Math.round(Math.min(width, height) * 0.9);

  // Resize the image to 90% of its size
  const resizedBuffer = await sharp(inputPath)
    .resize(newSize, newSize, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 }, // Transparent background
    })
    .toBuffer();

  // Place it on a canvas of the original size (centered)
  const finalBuffer = await sharp({
    create: {
      width: width,
      height: height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }, // Transparent
    },
  })
    .composite([
      {
        input: resizedBuffer,
        gravity: "centre",
      },
    ])
    .png()
    .toBuffer();

  // Replace original
  await Bun.write(inputPath, finalBuffer);

  console.log("✓ Padding added to stop.png");
}

addPadding();
