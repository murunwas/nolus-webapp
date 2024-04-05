import type { NetworkAddress } from "@/common/types";
import { isServe } from ".";

export const DEFAULT_PRIMARY_NETWORK = "mainnet";
export const NETWORKS: { [key: string]: NetworkAddress } = {
  testnet: {
    currencies: () => import("@nolus/nolusjs/build/utils/currencies_testnet.json"),
    endpoints: isServe()
      ? import("../networks/rila-endpoints.json?url").then((t) => t.default)
      : "https://raw.githubusercontent.com/nolus-protocol/webapp/main/src/config/networks/rila-endpoints.json",
    chainName: "Nolus Testnet",
    explorer: "https://testnet.ping.pub/nolus/tx",
    govern: "https://testnet.ping.pub/nolus/gov",
    staking: "https://testnet.ping.pub/nolus/staking",
    etlApi: "https://etl-cl.nolus.network:8081/api",
    leaseBlockUpdate: 977014,
    lppCreatedAt: 1686573237831
  },
  mainnet: {
    currencies: () => import("@nolus/nolusjs/build/utils/currencies_mainnet.json"),
    endpoints: isServe()
      ? import("../networks/pirin-endpoints.json?url").then((t) => t.default)
      : "https://raw.githubusercontent.com/nolus-protocol/webapp/main/src/config/networks/pirin-endpoints.json",
    chainName: "Nolus",
    explorer: "https://ping.pub/nolus/tx",
    govern: "https://ping.pub/nolus/gov",
    staking: "https://ping.pub/nolus/staking",
    etlApi: "https://etl-cl.nolus.network:8080/api",
    leaseBlockUpdate: 1029833,
    lppCreatedAt: 1686845698269
  }
};

export const NetworksConfig: {
  [key: string]: {
    hidden: string[];
  };
} = {
  NEUTRON: {
    hidden: ["ATOM", "ST_ATOM", "TIA", "ST_TIA@OSMOSIS-OSMOSIS-USDC_AXELAR", "USDC_AXELAR@OSMOSIS-OSMOSIS-USDC_AXELAR"]
  },
  OSMOSIS: {
    hidden: ["ST_TIA@NEUTRON-ASTROPORT-USDC_AXELAR"]
  }
};
export const SUPPORTED_NETWORKS = [
  "NOLUS",
  "OSMOSIS",
  "COSMOS_HUB",
  "AXELAR",
  "STRIDE",
  "JUNO",
  "EVMOS",
  "PERSISTENCE",
  "SECRET",
  "STARGAZE",
  "CELESTIA",
  "NEUTRON",
  "DYDX",
  "QUICKSILVER",
  "DYMENSION",
  "JACKAL",
  "INJECTIVE",
  "COMPOSABLE",
  "NOBLE"
];
