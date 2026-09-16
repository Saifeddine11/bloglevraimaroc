import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const sourceDir =
  "/Users/namousssifeddine/Downloads/WEB DEV/Websites/Accrocar/Coulisse the gentlmen";
const outDir = "public/images/articles/gentlemen-maroc";
await mkdir(outDir, { recursive: true });

const jobs = [
  {
    source: `${sourceDir}/IMG_7422.JPG`,
    output: "gentlemen-saison-3-maroc.webp",
    extract: { left: 0, top: 420, width: 1008, height: 567 },
  },
  {
    source: "tmp/gentlemen-rabat-source.jpg",
    output: "gentlemen-saison-3-rabat.webp",
    position: "attention",
  },
  {
    source: "tmp/gentlemen-erfoud-source.jpg",
    output: "gentlemen-saison-3-erfoud.webp",
    position: "attention",
  },
  {
    source: `${sourceDir}/IMG_7420.JPG`,
    output: "gentlemen-lieux-tournage-maroc.webp",
    extract: { left: 0, top: 500, width: 1008, height: 567 },
  },
  {
    source: "tmp/gentlemen-atlas-studios-source.jpg",
    output: "productions-internationales-maroc.webp",
    position: "attention",
  },
  {
    source: `${sourceDir}/9f134121-ba08-4036-882e-10d26234b68d.jpg`,
    output: "accrocar-vehicules-luxe-gentlemen.webp",
    position: "centre",
  },
  {
    source: `${sourceDir}/IMG_7433.PNG`,
    output: "logistique-automobile-production-maroc.webp",
    extract: { left: 0, top: 880, width: 1170, height: 658 },
  },
  {
    source: `${sourceDir}/733a58b6-3524-41b9-9f2b-1c522090c90c.JPG`,
    output: "rolls-royce-bentley-gentlemen-maroc.webp",
    extract: { left: 0, top: 700, width: 2340, height: 1316 },
  },
  {
    source: `${sourceDir}/9f134121-ba08-4036-882e-10d26234b68d.jpg`,
    output: "accrocar-mobilite-productions.webp",
    position: "centre",
  },
  {
    source: `${sourceDir}/IMG_7433.PNG`,
    output: "ecosysteme-production-maroc.webp",
    extract: { left: 0, top: 990, width: 1170, height: 658 },
  },
  {
    source: `${sourceDir}/IMG_7422.JPG`,
    output: "rolls-royce-cullinan-rabat-inline.webp",
    extract: { left: 0, top: 510, width: 1008, height: 567 },
  },
  {
    source: `${sourceDir}/9f134121-ba08-4036-882e-10d26234b68d.jpg`,
    output: "rolls-royce-interieur-inline.webp",
    position: "centre",
  },
];

for (const job of jobs) {
  let pipeline = sharp(job.source, { failOn: "error" }).rotate();
  if (job.extract) pipeline = pipeline.extract(job.extract);
  const base = await pipeline.resize(1600, 900, {
    fit: "cover",
    position: job.position ?? "centre",
    withoutEnlargement: false,
  }).toBuffer();
  const redactions = [];
  for (const rect of job.redactions ?? []) {
    const blurred = await sharp(base).extract(rect).blur(24).toBuffer();
    redactions.push({ input: blurred, left: rect.left, top: rect.top });
  }
  await sharp(base)
    .composite(redactions)
    .webp({ quality: 82, effort: 5 })
    .toFile(`${outDir}/${job.output}`);
}

console.log(`Created ${jobs.length} optimized WebP derivatives in ${outDir}`);
