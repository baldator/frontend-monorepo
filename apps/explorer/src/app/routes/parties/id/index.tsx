import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { DATA_SOURCES } from '../../../config';
import useFetch from '../../../hooks/use-fetch';
import { TendermintSearchTransactionResponse } from '../tendermint-transaction-response';
import {
  PartyAssetsQuery,
  PartyAssetsQueryVariables,
} from './__generated__/PartyAssetsQuery';

const PARTY_ASSETS_QUERY = gql`
  query PartyAssetsQuery($partyId: ID!) {
    party(id: $partyId) {
      id
      delegations {
        amount
        node {
          id
          name
        }
        epoch
      }
      stake {
        currentStakeAvailable
      }
      accounts {
        asset {
          name
          id
          decimals
          symbol
          source {
            __typename
            ... on ERC20 {
              contractAddress
            }
          }
        }
        type
        balance
      }
    }
  }
`;

const Party = () => {
  const { party } = useParams<{ party: string }>();
  const { data: partyData } = useFetch<TendermintSearchTransactionResponse>(
    `${DATA_SOURCES.tendermintWebsocketUrl}/tx_search?query="tx.submitter=%27${party}%27"`
  );

  const { data } = useQuery<PartyAssetsQuery, PartyAssetsQueryVariables>(
    PARTY_ASSETS_QUERY,
    {
      // Don't cache data for this query, party information can move quite quickly
      fetchPolicy: 'network-only',
      variables: { partyId: party!.replace('0x', '') },
      skip: !party,
    }
  );

  return (
    <section>
      <h1>Party</h1>
      <h2>Tendermint Data</h2>
      <pre>{JSON.stringify(partyData, null, '  ')}</pre>
      <h2>Asset data</h2>
      <pre>{JSON.stringify(data, null, '  ')}</pre>
    </section>
  );
};

export { Party };