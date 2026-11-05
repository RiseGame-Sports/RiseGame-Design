import * as React from 'react';

/**
 * The risegame.com header: black bar, white wordmark, uppercase Roboto 700 nav,
 * outline CTA on the right.
 * @startingPoint section="Navigation" subtitle="Marketing site header, tabs and app tab bar" viewport="700x300"
 */
export interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Nav labels in order, e.g. ["Home","About","Products","Testimonials","Blog","Tutorials"]. */
  items?: string[];
  /** Label of the current page, rendered accent with an underline. */
  active?: string;
  onNavigate?: (label: string) => void;
  ctaLabel?: string;
  ctaHref?: string;
  /** Folder or CDN URL that holds the logo PNGs. Omit to use the copies bundled in the package. */
  assetBase?: string;
}

export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;

export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Verbatim quote. Never paraphrase or invent a testimonial. */
  quote?: string;
  name?: string;
  /** League President, Coach, Parent. */
  role?: string;
  location?: string;
  tone?: 'light' | 'alt' | 'dark';
  assetBase?: string;
}

export declare function Testimonial(props: TestimonialProps): JSX.Element;
