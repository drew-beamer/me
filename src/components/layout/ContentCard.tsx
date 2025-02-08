import { cn } from "@/lib/utils";

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentCard({ children, className }: ContentCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-start bg-card/60 backdrop-blur-sm shadow-xl rounded-xl relative max-w-[64ch] mx-auto p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
