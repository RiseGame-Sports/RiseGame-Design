import * as React from 'react';

/**
 * The RiseGame mark. Never redraw it: this component points at the supplied
 * PNGs in assets/. Rocket always points up; the trail stays neon green.
 */
export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** wordmark = full RISEGAME lockup; stacked = R over wordmark; r = R lockup; rocket = rocket + trail only. */
  variant?: 'wordmark' | 'stacked' | 'r' | 'rocket';
  /** Use the white-on-transparent file. */
  onDark?: boolean;
  /** Rendered height in px; width follows the mark's ratio. */
  height?: number;
  /** Folder or CDN URL that holds the logo PNGs. Omit to use the copies bundled in the package. */
  assetBase?: string;
}

export declare function Logo(props: LogoProps): JSX.Element;
