import React from 'react';
import { Button, Popover } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { useSolong } from '../utils/solong-helper';
import LinkAddress from './LinkAddress';
import { FormattedMessage } from "react-intl";
import { messages } from '../utils/lang';

export default function WalletConnect() {
  const { connected, wallet } = useSolong();
  const publicKey = wallet?.publicKey?.toBase58();

  return (
    <React.Fragment>
      {!connected && (
        <Button
          type="text"
          size="large"
          onClick={ wallet.selectAccount}
          style={{ color: '#2abdd2' }}
        >
          <UserOutlined />
          {!connected ? <FormattedMessage {...messages.connect} /> : <FormattedMessage {...messages.disConnect} /> }
        </Button>
      )}
      {connected && (
        <Popover
          content={<LinkAddress address={publicKey} />}
          placement="bottomRight"
          title="Wallet public key"
          trigger="click"
        >
         <UserOutlined style={{ color: '#2abdd2', marginLeft: '1rem' }} /> 
        </Popover>
      )}
    </React.Fragment>
  );
}
