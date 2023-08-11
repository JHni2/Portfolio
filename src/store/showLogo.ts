import { atom } from 'recoil';

export const showLogoState = atom<boolean>({
  key: 'showLogo',
  default: true,
});
