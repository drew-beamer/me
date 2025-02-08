import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  colors?: {
    from: string;
    to: string;
  }[];
  className?: string;
}

export default function GradientBackground({
  colors = [
    { from: "from-blue-400", to: "to-blue-600/60" },
    { from: "from-purple-400", to: "to-purple-600/60" },
  ],
  className,
}: GradientBackgroundProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 h-screen w-screen overflow-hidden",
        className
      )}
    >
      <div className="absolute -inset-[100%] opacity-50">
        {colors.map(({ from, to }, index) => (
          <div
            key={index}
            className={cn(
              "absolute size-1/4 rounded-full bg-radial blur-3xl",
              from,
              to,
              index === 0 && "top-1/4 left-1/3",
              index === 1 && "bottom-1/3 right-1/4"
            )}
          />
        ))}
      </div>
    </div>
  );
}
