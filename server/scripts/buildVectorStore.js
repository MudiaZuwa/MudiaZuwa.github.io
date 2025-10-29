import "dotenv/config";
import { Pinecone } from "@pinecone-database/pinecone";
import { splitTextFile } from "../lib/utils/splitText.js";
import { embedText } from "../lib/rag/embed.js";

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

const index = pinecone.Index(process.env.PINECONE_INDEX_NAME);

const buildVectorStore = async () => {
  console.log("📂 Loading data...");
  const chunks = splitTextFile("data.txt");

  console.log(`🪓 Split into ${chunks.length} chunks`);

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    console.log(`🔢 Embedding chunk ${i + 1}/${chunks.length}`);
    const embedding = await embedText(chunk);

    await index.upsert([
      {
        id: `chunk-${i}`,
        values: embedding,
        metadata: { text: chunk },
      },
    ]);
  }

  console.log("✅ Vector store built and uploaded successfully!");
};

buildVectorStore();
