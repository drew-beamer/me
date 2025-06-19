import { cn } from "@/lib/utils";

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentCard({ children, className }: ContentCardProps) {
  return (
    <div
      className={cn(
        "bg-card/60 relative mx-auto flex max-w-[64ch] flex-col items-start justify-start rounded-xl p-8 shadow-xl backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
