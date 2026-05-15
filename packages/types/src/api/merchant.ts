export interface Merchant {
  id: string;
  wa_number: string;
  owner_wa: string;
  plan: "free" | "starter" | "growth" | "managed";
  is_active: boolean;
  created_at: string;
}

export interface MerchantUsage {
  merchant_id: string;
  month: string;
  reply_count: number;
  reply_cap: number;
}
