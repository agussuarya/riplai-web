import type { Message } from "@riplai/types";
import { apiClient } from "../client";

export async function getMessages(conversationId: string): Promise<Message[]> {
  const res = await apiClient.get<Message[]>(`/conversations/${conversationId}/messages`);
  return res.data;
}

export async function sendReply(conversationId: string, body: string): Promise<void> {
  await apiClient.post(`/conversations/${conversationId}/reply`, { body });
}
