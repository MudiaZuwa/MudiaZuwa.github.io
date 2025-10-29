import { pipeline } from "@xenova/transformers";

let embedder;

export async function embedText(text) {
  if (!embedder) {
    embedder = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
  }

  const result = await embedder(text, {
    pooling: "mean",
    normalize: true,
  });

  let embedding;

  if (result?.data) {
    embedding = result.data;
  } else if (Array.isArray(result)) {
    embedding = result[0];
  } else if (result?.tolist) {
    embedding = result.tolist()[0];
  } else if (result?.dims && result?.toArray) {
    const arr = await result.toArray();
    embedding = arr[0];
  } else {
    console.error("⚠️ Unknown embedder output:", result);
    throw new Error("Failed to read embedding data");
  }

  console.log("🔍 Embedding dimension:", embedding.length);
  return Array.from(embedding);
}
