import type { Account } from "../types/account.types";

export async function getPortfolio(account: Account): Promise<{total: string, available: string}> {
    const response = await fetch(`https://mainnet.zklighter.elliot.ai/api/v1/account?by=index&value=${account.accountIndex}`)
    const data = await response.json() as { accounts: Array<{ collateral: string; available_balance: string }> };
    return {
        total: data.accounts[0]?.collateral || "0", 
        available: data.accounts[0]?.available_balance || "0"
    };
}