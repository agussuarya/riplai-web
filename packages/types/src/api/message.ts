export type MessageDirection = "inbound" | "outbound";

export interface Message {
  id: string;
  conversation_id: string;
  direction: MessageDirection;
  body: string;
  sent_by: "customer" | "bot" | "owner";
  created_at: string;
}
