/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AssetFields
// ====================================================

export interface AssetFields_source_BuiltinAsset {
  __typename: "BuiltinAsset";
}

export interface AssetFields_source_ERC20 {
  __typename: "ERC20";
  /**
   * The address of the ERC20 contract
   */
  contractAddress: string;
}

export type AssetFields_source = AssetFields_source_BuiltinAsset | AssetFields_source_ERC20;

export interface AssetFields {
  __typename: "Asset";
  /**
   * The ID of the asset
   */
  id: string;
  /**
   * The symbol of the asset (e.g: GBP)
   */
  symbol: string;
  /**
   * The full name of the asset (e.g: Great British Pound)
   */
  name: string;
  /**
   * The precision of the asset. Should match the decimal precision of the asset on its native chain, e.g: for ERC20 assets, it is often 18
   */
  decimals: number;
  /**
   * The origin source of the asset (e.g: an ERC20 asset)
   */
  source: AssetFields_source;
}
