import merge from 'lodash/merge';
import type { AssetQuery, AssetsQuery } from '@vegaprotocol/assets';
import { Schema as Types } from '@vegaprotocol/types';
import type { PartialDeep } from 'type-fest';

export const generateAsset = (override?: PartialDeep<AssetQuery>) => {
  const defaultAssets: AssetsQuery = {
    assetsConnection: {
      edges: [
        {
          node: {
            id: 'asset-id',
            symbol: 'tEURO',
            decimals: 5,
            name: 'Euro',
            source: {
              contractAddress: '0x0158031158Bb4dF2AD02eAA31e8963E84EA978a4',
              lifetimeLimit: '123000000',
              withdrawThreshold: '50',
              __typename: 'ERC20',
            },
            quantum: '1',
            status: Types.AssetStatus.STATUS_ENABLED,
            infrastructureFeeAccount: {
              balance: '1',
              __typename: 'AccountBalance',
            },
            globalRewardPoolAccount: {
              balance: '2',
              __typename: 'AccountBalance',
            },
            takerFeeRewardAccount: {
              balance: '3',
              __typename: 'AccountBalance',
            },
            makerFeeRewardAccount: {
              balance: '4',
              __typename: 'AccountBalance',
            },
            lpFeeRewardAccount: {
              balance: '5',
              __typename: 'AccountBalance',
            },
            marketProposerRewardAccount: {
              balance: '6',
              __typename: 'AccountBalance',
            },
            __typename: 'Asset',
          },
        },
      ],
    },
  };
  return merge(defaultAssets, override);
};

export const generateAssets = (override?: PartialDeep<AssetsQuery>) => {
  const defaultAssets: AssetsQuery = {
    assetsConnection: {
      edges: [
        {
          node: {
            id: 'asset-id',
            symbol: 'tEURO',
            decimals: 5,
            name: 'Euro',
            source: {
              contractAddress: '0x0158031158Bb4dF2AD02eAA31e8963E84EA978a4',
              lifetimeLimit: '123000000',
              withdrawThreshold: '50',
              __typename: 'ERC20',
            },
            quantum: '1',
            status: Types.AssetStatus.STATUS_ENABLED,
            infrastructureFeeAccount: {
              balance: '1',
              __typename: 'AccountBalance',
            },
            globalRewardPoolAccount: {
              balance: '2',
              __typename: 'AccountBalance',
            },
            takerFeeRewardAccount: {
              balance: '3',
              __typename: 'AccountBalance',
            },
            makerFeeRewardAccount: {
              balance: '4',
              __typename: 'AccountBalance',
            },
            lpFeeRewardAccount: {
              balance: '5',
              __typename: 'AccountBalance',
            },
            marketProposerRewardAccount: {
              balance: '6',
              __typename: 'AccountBalance',
            },
            __typename: 'Asset',
          },
        },
        {
          node: {
            id: 'asset-id-2',
            symbol: 'tDAI',
            decimals: 5,
            name: 'DAI',
            source: {
              contractAddress: '0x26223f9C67871CFcEa329975f7BC0C9cB8FBDb9b',
              lifetimeLimit: '123000000',
              withdrawThreshold: '50',
              __typename: 'ERC20',
            },
            quantum: '1',
            status: Types.AssetStatus.STATUS_ENABLED,
            infrastructureFeeAccount: {
              balance: '1',
              __typename: 'AccountBalance',
            },
            globalRewardPoolAccount: {
              balance: '2',
              __typename: 'AccountBalance',
            },
            takerFeeRewardAccount: {
              balance: '3',
              __typename: 'AccountBalance',
            },
            makerFeeRewardAccount: {
              balance: '4',
              __typename: 'AccountBalance',
            },
            lpFeeRewardAccount: {
              balance: '5',
              __typename: 'AccountBalance',
            },
            marketProposerRewardAccount: {
              balance: '6',
              __typename: 'AccountBalance',
            },
            __typename: 'Asset',
          },
        },
        {
          node: {
            id: 'asset-0',
            symbol: 'AST0',
            decimals: 5,
            name: 'Asto',
            source: {
              maxFaucetAmountMint: '5000000000',
              __typename: 'BuiltinAsset',
            },
            quantum: '1',
            status: Types.AssetStatus.STATUS_ENABLED,
            infrastructureFeeAccount: {
              balance: '0',
              __typename: 'AccountBalance',
            },
            globalRewardPoolAccount: null,
            takerFeeRewardAccount: null,
            makerFeeRewardAccount: null,
            lpFeeRewardAccount: null,
            marketProposerRewardAccount: null,
            __typename: 'Asset',
          },
        },
        // NOTE: These assets ids and contract addresses are real assets on Sepolia, this is needed
        // because we don't currently mock our seplia infura provider. If we change network these will
        // need to be updated
        {
          node: {
            id: 'cee709223217281d7893b650850ae8ee8a18b7539b5658f9b4cc24de95dd18ad',
            symbol: 'tBTC',
            name: 'Sepolia tBTC',
            decimals: 5,
            status: Types.AssetStatus.STATUS_ENABLED,
            source: {
              contractAddress: '0x1d525fB145Af5c51766a89706C09fE07E6058D1D',
              lifetimeLimit: '123000000',
              withdrawThreshold: '50',
              __typename: 'ERC20',
            },
            quantum: '1',
            infrastructureFeeAccount: {
              balance: '1',
              __typename: 'AccountBalance',
            },
            globalRewardPoolAccount: {
              balance: '2',
              __typename: 'AccountBalance',
            },
            takerFeeRewardAccount: {
              balance: '3',
              __typename: 'AccountBalance',
            },
            makerFeeRewardAccount: {
              balance: '4',
              __typename: 'AccountBalance',
            },
            lpFeeRewardAccount: {
              balance: '5',
              __typename: 'AccountBalance',
            },
            marketProposerRewardAccount: {
              balance: '6',
              __typename: 'AccountBalance',
            },
            __typename: 'Asset',
          },
          __typename: 'AssetEdge',
        },
        {
          node: {
            id: 'c9fe6fc24fce121b2cc72680543a886055abb560043fda394ba5376203b7527d',
            symbol: 'tUSDC',
            name: 'Sepolia tUSDC',
            decimals: 5,
            status: Types.AssetStatus.STATUS_ENABLED,
            source: {
              contractAddress: '0x444b9aDA947130Fc320a144cd22bC1641e5c9d81',
              lifetimeLimit: '123000000',
              withdrawThreshold: '50',
              __typename: 'ERC20',
            },
            quantum: '1',
            infrastructureFeeAccount: {
              balance: '1',
              __typename: 'AccountBalance',
            },
            globalRewardPoolAccount: {
              balance: '2',
              __typename: 'AccountBalance',
            },
            takerFeeRewardAccount: {
              balance: '3',
              __typename: 'AccountBalance',
            },
            makerFeeRewardAccount: {
              balance: '4',
              __typename: 'AccountBalance',
            },
            lpFeeRewardAccount: {
              balance: '5',
              __typename: 'AccountBalance',
            },
            marketProposerRewardAccount: {
              balance: '6',
              __typename: 'AccountBalance',
            },
            __typename: 'Asset',
          },
          __typename: 'AssetEdge',
        },
      ],
    },
  };
  return merge(defaultAssets, override);
};
