import type { Conversation } from "@riplai/types";
import { apiClient, USE_FIXTURES } from "../client";
import fixtureData from "../__fixtures__/conversations.json";

export async function getConversations(): Promise<Conversation[]> {
  if (USE_FIXTURES) return fixtureData as Conversation[];
  const res = await apiClient.get<Conversation[]>("/conversations");
  return res.data;
}
