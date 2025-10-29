import { embedText } from "./embed.js";
import { retrieveContext } from "./retrieve.js";
import { generateAnswer } from "./generate.js";

export const runRAGPipeline = async (query, userId) => {
  const embedding = await embedText(query);
  const context = await retrieveContext(embedding);
  const answer = await generateAnswer(context, query, userId);
  return answer;
};
