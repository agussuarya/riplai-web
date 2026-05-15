export type ConversationStatus = "needs_reply" | "bot_handled" | "waiting";

export interface Conversation {
  id: string;
  merchant_id: string;
  customer_wa: string;
  status: ConversationStatus;
  last_message_at: string;
  created_at: string;
}
