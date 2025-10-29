import { embedText } from "./embed.js";
import { retrieveContext } from "./retrieve.js";
import { generateAnswer } from "./generate.js";

export const runRAGPipeline = async (query, userId, onToken) => {
  const embedding = await embedText(query);
  const context = await retrieveContext(embedding);

  await generateAnswer(context, query, userId, onToken);
};
