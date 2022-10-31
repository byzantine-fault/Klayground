import { atom } from 'recoil';
import { v1 } from 'uuid';

interface IsModal {
  currentPage: number | undefined;
}

export const generativeArtBuilder = atom<IsModal>({
  key: `generativeArtBuilder/${v1()}`,
  default: {
    currentPage: 0,
  },
});
