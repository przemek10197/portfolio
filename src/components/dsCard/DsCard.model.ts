export interface DsCardProps {
  type?: DsCardType;
  defaultBackgroundColor?: string;
  defaultTextColor?: string;
  isShadowVisible?: boolean;
}

export enum DsCardType {
  LIGHT = 'light',
  DARK = 'dark',
}
