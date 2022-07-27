import type {
  DelegateSubmissionBody,
  OrderCancellationBody,
  OrderSubmissionBody,
  UndelegateSubmissionBody,
  VoteSubmissionBody,
  WithdrawSubmissionBody,
  OrderAmendmentBody,
} from '@vegaprotocol/vegawallet-service-api-client';

export enum VegaWalletOrderType {
  Market = 'TYPE_MARKET',
  Limit = 'TYPE_LIMIT',
}

export enum VegaWalletOrderSide {
  Buy = 'SIDE_BUY',
  Sell = 'SIDE_SELL',
}

export enum VegaWalletOrderTimeInForce {
  GTC = 'TIME_IN_FORCE_GTC',
  GTT = 'TIME_IN_FORCE_GTT',
  IOC = 'TIME_IN_FORCE_IOC',
  FOK = 'TIME_IN_FORCE_FOK',
  GFN = 'TIME_IN_FORCE_GFN',
  GFA = 'TIME_IN_FORCE_GFA',
}

// Will make Transaction a union type as other transactions are added
export type TransactionSubmission =
  | OrderSubmissionBody
  | OrderCancellationBody
  | WithdrawSubmissionBody
  | VoteSubmissionBody
  | DelegateSubmissionBody
  | UndelegateSubmissionBody
  | OrderAmendmentBody;