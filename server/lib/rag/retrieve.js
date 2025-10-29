import { Pinecone } from "@pinecone-database/pinecone";
import "dotenv/config";

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.Index(process.env.PINECONE_INDEX_NAME);

export const retrieveContext = async (embedding, topK = 5) => {
  const results = await index.query({
    vector: embedding,
    topK,
    includeMetadata: true,
  });

  return results.matches.map((m) => m.metadata.text).join("\n\n");
};
