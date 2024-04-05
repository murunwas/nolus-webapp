export const TWITTER_ACCOUNT = "https://twitter.com/NolusPlatform";
export const TELEGRAM_ACCOUNT = "https://t.me/NolusPlatform";
export const MEDIUM_ACCOUNT = "https://medium.com/nolusplatform";
export const REDDIT_ACCOUNT = "https://www.reddit.com/r/NolusPlatform";
export const LINKEDIN_ACCOUNT = "https://www.linkedin.com/company/nolus-platform";
export const DISCORD_ACCOUNT = "https://discord.com/invite/Rmwz8S6ZJP";
export const SUPPORT_URL = "https://hub.nolus.io";

export enum APPEARANCE {
  light = "light",
  dark = "dark",
  sync = "sync"
}

export const CHART_RANGES = {
  "1": {
    label: "24h",
    days: "1",
    interval: ""
  },
  "7": {
    label: "7d",
    days: "7",
    interval: ""
  },
  "30": {
    label: "30d",
    days: "30",
    interval: "daily"
  },
  "90": {
    label: "90d",
    days: "90",
    interval: "daily"
  },
  "365": {
    label: "1y",
    days: "365",
    interval: "daily"
  },
  max: {
    label: "Max",
    days: "max",
    interval: "daily"
  }
};

export const WASM_LP_DEPOSIT = "wasm-lp-deposit";
export const WASM_LP_OPEN = "wasm-ls-open";

export const INTEREST_DECIMALS = 1;
export const PERMILLE = 1000;
export const PERCENT = 100;

export const UPDATE_BLOCK_INTERVAL = 5 * 60 * 1000;
export const UPDATE_BALANCE_INTERVAL = 5 * 60 * 1000;
export const UPDATE_PRICES_INTERVAL = 5 * 60 * 1000;
export const UPDATE_REWARDS_INTERVAL = 5 * 60 * 1000;
export const SESSION_TIME = 15 * 60 * 1000;
export const MONTHS = 12;

export const LPN_PRICE = 1;
export const LPN_DECIMALS = 6;
export const LPN_Symbol = "USDC.axl";

export const DECIMALS_AMOUNT = [
  {
    decimals: 2,
    amount: 10000
  },
  {
    decimals: 4,
    amount: 1000
  },
  {
    decimals: 6,
    amount: 100
  }
];

export const ZERO_DECIMALS = 6;
export const MAX_DECIMALS = 8;

export const CoinGecko = {
  url: "https://pro-api.coingecko.com/api/v3",
  label: "Nolus App",
  key: "CG-QQSfXqT6EJWXG9UjjfhfoJVk"
};

export const LedgerName = "Ledger";
export const IGNORE_TRANSFER_ASSETS: string[] = [];
