import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { size?: number };
const Icon = ({ children, size = 20, ...props }: Props & { children: React.ReactNode }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>;
export const Search = (p: Props) => <Icon {...p}><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></Icon>;
export const ArrowRight = (p: Props) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6"/></Icon>;
export const ChevronRight = (p: Props) => <Icon {...p}><path d="m9 18 6-6-6-6"/></Icon>;
export const Check = (p: Props) => <Icon {...p}><path d="m5 12 4 4L19 6"/></Icon>;
export const MapPin = (p: Props) => <Icon {...p}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></Icon>;
export const Folder = (p: Props) => <Icon {...p}><path d="M3 6.5h6l2 2h10v9.5A2 2 0 0 1 19 20H5a2 2 0 0 1-2-2Z"/></Icon>;
export const Users = (p: Props) => <Icon {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></Icon>;
