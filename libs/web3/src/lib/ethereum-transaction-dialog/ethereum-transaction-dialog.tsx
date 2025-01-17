import { t } from '@vegaprotocol/react-helpers';
import { Dialog, Icon, Intent, Loader } from '@vegaprotocol/ui-toolkit';
import { isEthereumError } from '../ethereum-error';
import type { EthTxState, TxError } from '../use-ethereum-transaction';
import { EthTxStatus } from '../use-ethereum-transaction';
import { ConfirmRow, TxRow, ConfirmationEventRow } from './dialog-rows';

export interface EthereumTransactionDialogProps {
  title: string;
  onChange: (isOpen: boolean) => void;
  transaction: EthTxState;
  // Undefined means this dialog isn't expecting an additional event for a complete state, a boolean
  // value means it is but hasn't been received yet
  requiredConfirmations?: number;
}

export const EthereumTransactionDialog = ({
  onChange,
  title,
  transaction,
  requiredConfirmations = 1,
}: EthereumTransactionDialogProps) => {
  const { status, error, confirmations, txHash } = transaction;
  return (
    <Dialog
      open={transaction.dialogOpen}
      onChange={onChange}
      size="small"
      {...getWrapperProps(title, status)}
    >
      <TransactionContent
        status={status}
        error={error}
        txHash={txHash}
        confirmations={confirmations}
        requiredConfirmations={requiredConfirmations}
      />
    </Dialog>
  );
};

export const TransactionContent = ({
  status,
  error,
  txHash,
  confirmations,
  requiredConfirmations = 1,
}: {
  status: EthTxStatus;
  error: TxError | null;
  txHash: string | null;
  confirmations: number;
  requiredConfirmations?: number;
}) => {
  if (status === EthTxStatus.Error) {
    let errorMessage = '';

    if (isEthereumError(error)) {
      errorMessage = error.reason;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    return (
      <p className="break-all">
        {t('Error')}: {errorMessage}
      </p>
    );
  }

  return (
    <div className="text-sm">
      <ConfirmRow status={status} />
      <TxRow
        status={status}
        txHash={txHash}
        confirmations={confirmations}
        requiredConfirmations={requiredConfirmations}
        highlightComplete={false}
      />
      <ConfirmationEventRow status={status} />
    </div>
  );
};

export const getWrapperProps = (title: string, status: EthTxStatus) => {
  const propsMap = {
    [EthTxStatus.Default]: {
      title: '',
      icon: null,
      intent: undefined,
    },
    [EthTxStatus.Error]: {
      title: t(`${title} failed`),
      icon: <Icon name="warning-sign" />,
      intent: Intent.Danger,
    },
    [EthTxStatus.Requested]: {
      title: t('Confirm transaction'),
      icon: <Icon name="hand-up" />,
      intent: Intent.Warning,
    },
    [EthTxStatus.Pending]: {
      title: t(`${title} pending`),
      icon: (
        <span className="mt-1">
          <Loader size="small" />
        </span>
      ),
      intent: Intent.None,
    },
    [EthTxStatus.Complete]: {
      title: t(`${title} pending`),
      icon: <Loader size="small" />,
      intent: Intent.None,
    },
    [EthTxStatus.Confirmed]: {
      title: t(`${title} complete`),
      icon: <Icon name="tick" />,
      intent: Intent.Success,
    },
  };

  return propsMap[status];
};
