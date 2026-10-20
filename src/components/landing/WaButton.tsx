import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { waLink, DEFAULT_WA_MESSAGE } from "@/lib/site";

type Props = {
  message?: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "solid" | "outline" | "white";
  withIcon?: boolean;
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-7 text-base",
  xl: "h-16 px-9 text-lg",
};

export function WaButton({
  message = DEFAULT_WA_MESSAGE,
  children,
  className,
  size = "md",
  variant = "solid",
  withIcon = true,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 will-change-transform";
  const variants = {
    solid:
      "bg-[var(--whatsapp)] text-white shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--whatsapp)_55%,transparent)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_color-mix(in_oklab,var(--whatsapp)_60%,transparent)]",
    outline:
      "border border-navy/15 bg-white text-navy hover:border-navy/30 hover:bg-navy-soft",
    white:
      "bg-white text-navy hover:bg-white/95 shadow-card hover:-translate-y-0.5",
  };
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {withIcon && <MessageCircle className="size-[1.1em]" strokeWidth={2.4} />}
      {children}
    </a>
  );
}
