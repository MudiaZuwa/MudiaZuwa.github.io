import fs from "fs";

export const splitTextFile = (filePath, chunkSize = 800, overlap = 100) => {
  const raw = fs.readFileSync(filePath, "utf8");
  const paragraphs = raw.split(/\n\s*\n/).filter(Boolean);
  const chunks = [];

  for (let para of paragraphs) {
    for (let i = 0; i < para.length; i += chunkSize - overlap) {
      const chunk = para.slice(i, i + chunkSize);
      chunks.push(chunk);
    }
  }

  return chunks;
};
