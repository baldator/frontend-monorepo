import { Button } from '@vegaprotocol/ui-toolkit';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { StakingMethod } from '../../../../../components/staking-method-radio';
import { TransactionCallout } from '../../../../../components/transaction-callout';
import type {
  TransactionAction,
  TransactionState,
} from '../../../../../hooks/transaction-reducer';
import { TransactionActionType } from '../../../../../hooks/transaction-reducer';
import Routes from '../../../../routes';

export const DisassociateTransaction = ({
  amount,
  vegaKey,
  state,
  dispatch,
  stakingMethod,
}: {
  amount: string;
  vegaKey: string;
  state: TransactionState;
  dispatch: React.Dispatch<TransactionAction>;
  stakingMethod: StakingMethod;
}) => {
  const { t } = useTranslation();
  return (
    <TransactionCallout
      completeHeading={t('Done')}
      completeBody={
        stakingMethod === StakingMethod.Contract
          ? t('{{amount}} VEGA tokens have been returned to Vesting contract', {
              amount,
            })
          : t('{{amount}} VEGA tokens have been returned to Ethereum wallet', {
              amount,
            })
      }
      completeFooter={
        <Link to={Routes.STAKING}>
          <Button>{t('backToStaking')}</Button>
        </Link>
      }
      pendingHeading={t('Dissociating Tokens')}
      pendingBody={t(
        'Dissociating  {{amount}} VEGA tokens from Vega key {{vegaKey}}',
        { amount, vegaKey }
      )}
      state={state}
      reset={() => dispatch({ type: TransactionActionType.TX_RESET })}
    />
  );
};
