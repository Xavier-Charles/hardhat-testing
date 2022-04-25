import { Fixture, MockContract } from "ethereum-waffle";
import { Wallet } from "@ethersproject/wallet";
import { Lending } from "../../typechain";

declare module "mocha" {
  export interface Context {
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    // eslint-disable-next-line no-use-before-define
    signers: Signers;
    // eslint-disable-next-line no-use-before-define
    mocks: Mocks;
    lending: Lending;
  }
}

export interface Signers {
  deployer: Wallet;
  alice: Wallet;
  bob: Wallet;
}

export interface Mocks {
  mockUsdc: MockContract;
}
