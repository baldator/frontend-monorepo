import merge from 'lodash/merge';
import {
  AuctionTrigger,
  MarketState,
  MarketTradingMode,
} from '@vegaprotocol/types';
import type { PartialDeep } from 'type-fest';
import type {
  MarketData,
  MarketQuery,
  MarketsDataQuery,
} from '@vegaprotocol/market-list';

export const generateMarket = (
  override?: PartialDeep<MarketQuery>
): MarketQuery => {
  const defaultResult: MarketQuery = {
    market: {
      id: 'market-0',
      tradingMode: MarketTradingMode.TRADING_MODE_MONITORING_AUCTION,
      state: MarketState.STATE_ACTIVE,
      decimalPlaces: 5,
      positionDecimalPlaces: 0,
      tradableInstrument: {
        instrument: {
          id: 'BTCUSD.MF21',
          name: 'ACTIVE MARKET',
          code: 'BTCUSD.MF21',
          metadata: {
            tags: [
              'formerly:076BB86A5AA41E3E',
              'base:BTC',
              'quote:USD',
              'class:fx/crypto',
              'monthly',
              'sector:crypto',
            ],
            __typename: 'InstrumentMetadata',
          },
          product: {
            oracleSpecForTradingTermination: {
              id: 'd253c16c6a17ab88e098479635c611ab503582a1079752d1a49ac15f656f7e7b',
              __typename: 'OracleSpec',
            },
            quoteName: 'BTCUSD Monthly',
            settlementAsset: {
              decimals: 0,
              id: '000',
              symbol: 'USD',
              name: 'United States Dollar',
              __typename: 'Asset',
            },
            __typename: 'Future',
          },
          __typename: 'Instrument',
        },
        __typename: 'TradableInstrument',
      },
      marketTimestamps: {
        open: '2022-06-21T17:18:43.484055236Z',
        close: null,
        __typename: 'MarketTimestamps',
      },
      fees: {
        __typename: 'Fees',
        factors: {
          __typename: 'FeeFactors',
          makerFee: '',
          infrastructureFee: '',
          liquidityFee: '',
        },
      },
      __typename: 'Market',
    },
  };

  return merge(defaultResult, override);
};

export const generateMarketData = (
  override?: PartialDeep<MarketData>
): MarketsDataQuery => {
  const defaultMarket: MarketData = {
    __typename: 'MarketData',
    market: {
      id: 'market-0',
      __typename: 'Market',
    },
    auctionStart: '2022-06-21T17:18:43.484055236Z',
    auctionEnd: '2022-06-21T17:18:43.484055236Z',
    targetStake: '1000000',
    suppliedStake: '1000',
    marketTradingMode: MarketTradingMode.TRADING_MODE_CONTINUOUS,
    staticMidPrice: '0',
    indicativePrice: '0',
    bestStaticBidPrice: '0',
    bestStaticOfferPrice: '0',
    indicativeVolume: '0',
    bestBidPrice: '0',
    bestOfferPrice: '0',
    markPrice: '4612690058',
    trigger: AuctionTrigger.AUCTION_TRIGGER_UNSPECIFIED,
  };

  const marketsConnectionWrapper = (
    marketData: MarketData
  ): MarketsDataQuery => {
    return {
      marketsConnection: {
        __typename: 'MarketConnection',
        edges: [
          {
            __typename: 'MarketEdge',
            node: {
              __typename: 'Market',
              data: marketData,
            },
          },
        ],
      },
    };
  };

  return marketsConnectionWrapper(merge(defaultMarket, override));
};
