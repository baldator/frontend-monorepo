import { createContext } from 'react';

export interface VegaWalletDialogState {
  manage: boolean;
  setManage: (isOpen: boolean) => void;
}

interface MenuState {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  onToggle: () => void;
}

export interface LocalValues {
  vegaWalletDialog: VegaWalletDialogState;
  menu: MenuState;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const LocalContext = createContext<LocalValues>({} as LocalValues);

export default LocalContext;
