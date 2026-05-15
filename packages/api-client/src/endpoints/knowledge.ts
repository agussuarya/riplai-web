import type { KnowledgeBase } from "@riplai/types";
import { apiClient } from "../client";

export async function getKnowledgeBase(): Promise<KnowledgeBase> {
  const res = await apiClient.get<KnowledgeBase>("/knowledge-base");
  return res.data;
}
