import { atom } from 'recoil';

interface IsModal {
  open: boolean | undefined;
}

export const walletConnectModalState = atom<IsModal>({
  key: 'walletConnectModalState',
  default: {
    open: false,
  },
});
