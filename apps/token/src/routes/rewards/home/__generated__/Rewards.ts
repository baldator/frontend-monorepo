/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountType } from "@vegaprotocol/types";

// ====================================================
// GraphQL query operation: Rewards
// ====================================================

export interface Rewards_party_rewardDetails_asset {
  __typename: "Asset";
  /**
   * The ID of the asset
   */
  id: string;
  /**
   * The symbol of the asset (e.g: GBP)
   */
  symbol: string;
}

export interface Rewards_party_rewardDetails_rewards_asset {
  __typename: "Asset";
  /**
   * The ID of the asset
   */
  id: string;
}

export interface Rewards_party_rewardDetails_rewards_party {
  __typename: "Party";
  /**
   * Party identifier
   */
  id: string;
}

export interface Rewards_party_rewardDetails_rewards_epoch {
  __typename: "Epoch";
  /**
   * Numeric sequence number used to identify the epoch
   */
  id: string;
}

export interface Rewards_party_rewardDetails_rewards {
  __typename: "Reward";
  /**
   * The type of reward
   */
  rewardType: AccountType;
  /**
   * The asset this reward is paid in
   */
  asset: Rewards_party_rewardDetails_rewards_asset;
  /**
   * Party receiving the reward
   */
  party: Rewards_party_rewardDetails_rewards_party;
  /**
   * Epoch for which this reward was distributed
   */
  epoch: Rewards_party_rewardDetails_rewards_epoch;
  /**
   * Amount received for this reward
   */
  amount: string;
  /**
   * The amount field formatted by the client
   */
  amountFormatted: string;
  /**
   * Percentage out of the total distributed reward
   */
  percentageOfTotal: string;
  /**
   * Time at which the rewards was received
   */
  receivedAt: string;
}

export interface Rewards_party_rewardDetails {
  __typename: "RewardPerAssetDetail";
  /**
   * Asset in which the reward was paid
   */
  asset: Rewards_party_rewardDetails_asset;
  /**
   * A list of rewards received for this asset
   */
  rewards: (Rewards_party_rewardDetails_rewards | null)[] | null;
  /**
   * The total amount of rewards received for this asset.
   */
  totalAmount: string;
  /**
   * The total amount field formatted by the client
   */
  totalAmountFormatted: string;
}

export interface Rewards_party_delegations {
  __typename: "Delegation";
  /**
   * Amount delegated
   */
  amount: string;
  /**
   * The amount field formatted by the client
   */
  amountFormatted: string;
  /**
   * Epoch of delegation
   */
  epoch: number;
}

export interface Rewards_party {
  __typename: "Party";
  /**
   * Party identifier
   */
  id: string;
  /**
   * Return reward information
   */
  rewardDetails: (Rewards_party_rewardDetails | null)[] | null;
  delegations: Rewards_party_delegations[] | null;
}

export interface Rewards_epoch_timestamps {
  __typename: "EpochTimestamps";
  /**
   * RFC3339 timestamp - Vega time of epoch start, null if not started
   */
  start: string | null;
  /**
   * RFC3339 timestamp - Vega time of epoch end, null if not ended
   */
  end: string | null;
  /**
   * RFC3339 timestamp - Vega time of epoch expiry
   */
  expiry: string | null;
}

export interface Rewards_epoch {
  __typename: "Epoch";
  /**
   * Numeric sequence number used to identify the epoch
   */
  id: string;
  /**
   * Timestamps for start and end of epochs
   */
  timestamps: Rewards_epoch_timestamps;
}

export interface Rewards {
  /**
   * An entity that is trading on the Vega network
   */
  party: Rewards_party | null;
  /**
   * Get data for a specific epoch, if ID omitted it gets the current epoch. If the string is 'next', fetch the next epoch
   */
  epoch: Rewards_epoch;
}

export interface RewardsVariables {
  partyId: string;
}
