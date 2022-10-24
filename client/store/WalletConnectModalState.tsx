import { atom } from 'recoil';
import { v1 } from 'uuid';

interface IsModal {
  open: boolean | undefined;
}

export const walletConnectModalState = atom<IsModal>({
  key: `walletConnectModalState/${v1()}`,
  default: {
    open: false,
  },
});
