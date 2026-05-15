import type { Merchant, MerchantUsage } from "@riplai/types";
import { apiClient, USE_FIXTURES } from "../client";
import fixtureMerchant from "../__fixtures__/merchant.json";

export async function getMerchant(): Promise<Merchant> {
  if (USE_FIXTURES) return fixtureMerchant as Merchant;
  const res = await apiClient.get<Merchant>("/merchant");
  return res.data;
}

export async function getMerchantUsage(): Promise<MerchantUsage> {
  const res = await apiClient.get<MerchantUsage>("/merchant/usage");
  return res.data;
}
