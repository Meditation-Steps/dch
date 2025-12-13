import { readdir } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const imagesToInvert = [
  "fullscreen.png",
  "home.png",
  "language.png",
  "reset.png",
  "right.png",
  "start.png",
  "stop.png",
];

const imagesDir = join(import.meta.dir, "public", "images");

async function invertImage(filename: string) {
  const inputPath = join(imagesDir, filename);
  const outputPath = join(imagesDir, filename);

  console.log(`Inverting ${filename}...`);

  await sharp(inputPath)
    .negate({ alpha: false }) // Invert colors but keep alpha channel
    .toFile(outputPath + ".tmp");

  // Replace original with inverted
  await Bun.write(outputPath, Bun.file(outputPath + ".tmp"));
  await Bun.write(outputPath + ".tmp", ""); // Delete temp file

  console.log(`✓ ${filename} inverted`);
}

async function main() {
  console.log("Inverting button images to white...\n");

  for (const image of imagesToInvert) {
    try {
      await invertImage(image);
    } catch (error) {
      console.error(`✗ Error inverting ${image}:`, error);
    }
  }

  console.log("\nDone!");
}

main();
