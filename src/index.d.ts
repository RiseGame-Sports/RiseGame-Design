import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'accent' | 'ink' | 'outline' | 'dark';
  /** Optional Lucide slug rendered before the label. */
  icon?: string;
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;

/**
 * RiseGame button. Primary is neon-on-black; hover inverts to near-black with a
 * white label, exactly as risegame.com. Radius stays 2px — never pill.
 * @startingPoint section="Core" subtitle="Buttons, icon buttons, badges and tags" viewport="700x260"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = accent fill; secondary = outline; ghost = text only; dark = ink fill. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide slug rendered before the label. */
  iconLeft?: string;
  /** Lucide slug rendered after the label. */
  iconRight?: string;
  fullWidth?: boolean;
  /** Set on black/near-black chrome so outline and ghost switch to white. */
  onDark?: boolean;
  /** Renders an anchor instead of a button. */
  href?: string;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'light' | 'alt' | 'dark';
  /** CSS padding value. Default var(--space-5). */
  padding?: string;
  /** Adds hover lift + ink/accent border for clickable cards. */
  interactive?: boolean;
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon slug, e.g. "calendar-days", "clipboard-list", "rocket". */
  name: string;
  /** Pixel box for the glyph. Default 20. */
  size?: number;
  /** Accessible label; omit for decorative glyphs. */
  title?: string;
}

export declare function Icon(props: IconProps): JSX.Element;

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lucide slug. */
  icon: string;
  /** Required accessible label — icon buttons carry no visible text. */
  label: string;
  variant?: 'ghost' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  onDark?: boolean;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;

/**
 * The RiseGame mark. Never redraw it — this component points at the supplied
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

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Renders a remove affordance when provided. */
  onRemove?: () => void;
  /** Filled ink treatment for an active filter. */
  selected?: boolean;
  onDark?: boolean;
  children?: React.ReactNode;
}

export declare function Tag(props: TagProps): JSX.Element;

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  onDark?: boolean;
}

export declare function Checkbox(props: CheckboxProps): JSX.Element;

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  /** Muted helper line under the control. */
  hint?: string;
  /** Replaces the hint; rendered in ink, not red — RiseGame avoids alarm colour. */
  error?: string;
  required?: boolean;
  htmlFor?: string;
  onDark?: boolean;
  children?: React.ReactNode;
}

export declare function Field(props: FieldProps): JSX.Element;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Lucide slug shown inside the field, before the text. */
  icon?: string;
  size?: 'sm' | 'md' | 'lg';
  invalid?: boolean;
  onDark?: boolean;
}

export declare function Input(props: InputProps): JSX.Element;

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  onDark?: boolean;
}

export declare function Radio(props: RadioProps): JSX.Element;

export interface SelectOption { value: string; label: string }

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Strings, or {value,label} pairs. */
  options?: Array<string | SelectOption>;
  size?: 'sm' | 'md' | 'lg';
  onDark?: boolean;
}

export declare function Select(props: SelectProps): JSX.Element;

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  onDark?: boolean;
}

export declare function Switch(props: SwitchProps): JSX.Element;

export interface AppTabBarItem { value: string; label: string; icon: string }

export interface AppTabBarProps extends React.HTMLAttributes<HTMLElement> {
  items?: AppTabBarItem[];
  value?: string;
  onChange?: (value: string) => void;
}

export declare function AppTabBar(props: AppTabBarProps): JSX.Element;

/**
 * The risegame.com header: black bar, white wordmark, uppercase Roboto 700 nav,
 * outline CTA on the right.
 * @startingPoint section="Navigation" subtitle="Marketing site header, tabs and app tab bar" viewport="700x300"
 */
export interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Nav labels in order, e.g. ["Home","About","Products","Testimonials","Blog","Tutorials"]. */
  items?: string[];
  /** Label of the current page — rendered accent with an underline. */
  active?: string;
  onNavigate?: (label: string) => void;
  ctaLabel?: string;
  ctaHref?: string;
  /** Folder or CDN URL that holds the logo PNGs. Omit to use the copies bundled in the package. */
  assetBase?: string;
}

export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;

export interface TabItem { value: string; label: string }

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: Array<string | TabItem>;
  value?: string;
  onChange?: (value: string) => void;
  onDark?: boolean;
}

export declare function Tabs(props: TabsProps): JSX.Element;

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  /** Action row, usually two Buttons. */
  footer?: React.ReactNode;
  onClose?: () => void;
  /** Max width in px. Default 460. */
  width?: number;
  children?: React.ReactNode;
}

export declare function Dialog(props: DialogProps): JSX.Element;

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lucide slug. */
  icon?: string;
  title?: string;
  body?: string;
  /** Usually a single Button. */
  action?: React.ReactNode;
  onDark?: boolean;
}

export declare function EmptyState(props: EmptyStateProps): JSX.Element;

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  /** Uppercase caption above the bar; the value/max pair renders on the right. */
  label?: string;
  onDark?: boolean;
  /** Bar height in px. Default 6. */
  height?: number;
}

export declare function ProgressBar(props: ProgressBarProps): JSX.Element;

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lucide slug for the leading glyph. Default "check". */
  icon?: string;
  /** Tint the glyph accent (confirmation). Set false for neutral notices. */
  accent?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export declare function Toast(props: ToastProps): JSX.Element;

export interface ProductTileProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Product name exactly as locked: Tryout Scheduler, Tryouts By RiseGame, Draft, Reports, Elevate. */
  name?: string;
  /** The job it does, one sentence from the products page. */
  job?: string;
  /** Lucide slug. */
  icon?: string;
  href?: string;
  ctaLabel?: string;
  tone?: 'light' | 'alt' | 'dark';
}

export declare function ProductTile(props: ProductTileProps): JSX.Element;

/**
 * Eyebrow + Barlow Condensed headline + supporting line. The standard opener
 * for every marketing section and product page block.
 * @startingPoint section="Patterns" subtitle="Section headings, product tiles, testimonials" viewport="700x340"
 */
export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Accent uppercase kicker. */
  eyebrow?: string;
  title?: string;
  /** One supporting sentence, muted. */
  body?: string;
  align?: 'left' | 'center';
  onDark?: boolean;
  /** Heading level 1–3. Default 2. */
  level?: 1 | 2 | 3;
}

export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;

export interface StatTileProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Big condensed number or ratio. Use only real, in-product counts. */
  value?: React.ReactNode;
  /** Uppercase caption. */
  label?: string;
  tone?: 'light' | 'alt' | 'dark';
}

export declare function StatTile(props: StatTileProps): JSX.Element;

export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Verbatim quote — never paraphrase or invent a testimonial. */
  quote?: string;
  name?: string;
  /** League President, Coach, Parent. */
  role?: string;
  location?: string;
  tone?: 'light' | 'alt' | 'dark';
  assetBase?: string;
}

export declare function Testimonial(props: TestimonialProps): JSX.Element;

export interface PlayerRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Jersey or tryout number. */
  number?: number | string;
  name?: string;
  /** Secondary line, e.g. "10U Majors · Age 11". */
  meta?: string;
  /** Composite evaluation score, shown right-aligned. */
  score?: number | string;
  /** Badge label, e.g. "Scored", "Not scored". */
  status?: string;
  onDark?: boolean;
}

export declare function PlayerRow(props: PlayerRowProps): JSX.Element;

/**
 * The evaluation-score input coaches tap on the field — one tap per drill,
 * thumb-sized targets, accent marks the chosen score.
 * @startingPoint section="Evaluation" subtitle="Score scale, player row, tryout slot" viewport="700x300"
 */
export interface ScoreScaleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Top of the scale. Default 5. */
  max?: number;
  value?: number;
  onChange?: (score: number) => void;
  size?: 'sm' | 'md' | 'lg';
  readOnly?: boolean;
  /** Drill name, uppercase caption above the row. */
  label?: string;
  onDark?: boolean;
}

export declare function ScoreScale(props: ScoreScaleProps): JSX.Element;

export interface SlotCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Human date, e.g. "Sat, Feb 21". */
  date?: string;
  /** Time range, e.g. "9:00 – 9:45 AM". */
  time?: string;
  /** Field or facility name. */
  location?: string;
  spotsLeft?: number;
  capacity?: number;
  selected?: boolean;
  onSelect?: () => void;
}

export declare function SlotCard(props: SlotCardProps): JSX.Element;

/**
 * The primary and secondary action for a screen, laid out by the hierarchy rules.
 */
export interface ActionGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** stack = full width, primary on top (phone); row = equal halves side by side (tablet and up); auto = side by side, stacks when narrower than about 500px. */
  layout?: 'auto' | 'stack' | 'row';
  /** One primary Button first, then at most one secondary Button. Each is made full width of its slot. */
  children?: React.ReactNode;
}

export declare function ActionGroup(props: ActionGroupProps): JSX.Element;

/**
 * A labelled section: a muted uppercase eyebrow above one plain card.
 */
export interface SectionCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Eyebrow text, set uppercase in a muted colour. Never accent. */
  label?: string;
  /** Set on black chrome: dark card, dark hairline, muted inverse label. */
  onDark?: boolean;
  /** CSS padding inside the card. Default 0, so a ToolList or rows sit flush. */
  padding?: string;
  /** Extra styles for the card itself (style goes on the outer section). */
  cardStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

export declare function SectionCard(props: SectionCardProps): JSX.Element;

/**
 * One card of ToolRows with hairline dividers between them.
 */
export interface ToolListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Set on black chrome; passed down to every ToolRow that does not set its own. */
  onDark?: boolean;
  /** ToolRow elements. */
  children?: React.ReactNode;
}

export declare function ToolList(props: ToolListProps): JSX.Element;

/**
 * One tool or item: icon tile, title, muted meta line, and one action.
 */
export interface ToolRowProps extends React.HTMLAttributes<HTMLElement> {
  /** Lucide slug for the 40px icon tile, e.g. "clipboard-list". */
  icon?: string;
  title: string;
  /** Muted second line, e.g. "Count every pitch". */
  meta?: string;
  /** Label for the secondary small button on the right ("Start count"). */
  actionLabel?: string;
  onAction?: () => void;
  /** With no actionLabel: makes the whole row the tap target, ending in a chevron. */
  onClick?: () => void;
  /** With no actionLabel: renders the whole row as a link. */
  href?: string;
  onDark?: boolean;
  /** Hairline under the row. ToolList sets this for you. */
  divider?: boolean;
}

export declare function ToolRow(props: ToolRowProps): JSX.Element;
