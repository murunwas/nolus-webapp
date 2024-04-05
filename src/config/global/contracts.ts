import type { ContractConfig } from "@/common/types";
import { ProtocolsRila, ProtocolsPirin } from "@nolus/nolusjs/build/types/Networks";
import { NATIVE_ASSET } from "./network";

export const CONTRACTS: ContractConfig = {
  testnet: {
    protocols: ProtocolsRila,
    dispatcher: {
      instance: "nolus1tqwwyth34550lg2437m05mjnjp8w7h5ka7m70jtzpxn4uh2ktsmqtctwnn",
      codeId: ""
    },
    admin: {
      instance: "nolus1gurgpv8savnfw66lckwzn4zk7fp394lpe667dhu7aw48u40lj6jsqxf8nd",
      codeId: "",
      ignoreProtocols: ["OSMOSIS-OSMOSIS-USDC_NOBLE", "OSMOSIS-OSMOSIS-USDC_AXELAR", "osmosis-axlusdc"]
    }
  },
  mainnet: {
    protocols: ProtocolsPirin,
    dispatcher: {
      instance: "nolus1tqwwyth34550lg2437m05mjnjp8w7h5ka7m70jtzpxn4uh2ktsmqtctwnn",
      codeId: ""
    },
    admin: {
      instance: "nolus1gurgpv8savnfw66lckwzn4zk7fp394lpe667dhu7aw48u40lj6jsqxf8nd",
      codeId: "",
      ignoreProtocols: []
    }
  }
};

export const ProtocolsConfig: {
  [key: string]: {
    only: string[];
    currencies: string[];
    lease: boolean;
    ignoreNetowrk: string[];
  };
} = {
  "OSMOSIS-OSMOSIS-USDC-1": {
    only: ["NLS", "ATOM"],
    lease: true,
    currencies: ["NLS", "OSMO", "USDC_AXELAR", "ATOM", "AKT", "JUNO"],
    ignoreNetowrk: ["NEUTRON"]
  },
  "OSMOSIS-OSMOSIS-USDC_AXELAR": {
    only: [],
    currencies: ["USDC_AXELAR"],
    lease: false,
    ignoreNetowrk: ["NEUTRON"]
  },
  "NEUTRON-ASTROPORT-USDC_AXELAR": {
    only: [],
    lease: true,
    currencies: ["NTRN", "USDC_AXELAR", "DYDX", "ST_TIA"],
    ignoreNetowrk: ["OSMOSIS"]
  },
  "OSMOSIS-OSMOSIS-USDC_NOBLE": {
    only: ["NLS", "ATOM", "ST_ATOM", "TIA"],
    lease: true,
    currencies: [
      "NLS",
      "OSMO",
      "ST_OSMO",
      "ATOM",
      "ST_ATOM",
      "USDC_NOBLE",
      "WETH_AXELAR",
      "WBTC_AXELAR",
      "AKT",
      "AXL",
      "JUNO",
      "EVMOS",
      "STK_ATOM",
      "SCRT",
      "CRO",
      "TIA",
      "STARS",
      "Q_ATOM",
      "STRD",
      "MILK_TIA",
      "ST_TIA",
      "JKL",
      "DYM",
      "INJ",
      "LVN",
      "PICA"
    ],
    ignoreNetowrk: ["NEUTRON"]
  }
};

export const isProtocolInclude = (currency: string) => {
  const networks = [];
  for (const key in ProtocolsConfig) {
    if (ProtocolsConfig[key].only.includes(currency)) {
      networks.push(key);
    }
  }
  return networks;
};

export const TIP = {
  amount: 100,
  denom: NATIVE_ASSET.denom
};
