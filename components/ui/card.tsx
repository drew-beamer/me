import * as React from "react";
import cn from "@/lib/utils/cn";

type HTMLDivProps = React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
};

type HTMLHeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
    className?: string;
};

type HTMLParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & {
    className?: string;
};

const Card = React.forwardRef<HTMLDivElement, HTMLDivProps>(
    ({ className = "", ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "rounded-lg border bg-card text-card-foreground shadow-sm",
                className
            )}
            {...props}
        />
    )
);
Card.displayName = "Card";
Card.defaultProps = {
    className: "",
};

const CardHeader = React.forwardRef<HTMLDivElement, HTMLDivProps>(
    ({ className = "", ...props }, ref) => (
        <div
            ref={ref}
            className={cn("flex flex-col space-y-1.5 p-6", className)}
            {...props}
        />
    )
);
CardHeader.displayName = "CardHeader";
CardHeader.defaultProps = {
    className: "",
};

const CardTitle = React.forwardRef<HTMLParagraphElement, HTMLHeadingProps>(
    ({ className = "", children, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn(
                "text-2xl font-semibold leading-none tracking-tight m-0",
                className
            )}
            {...props}
        >
            {children}
        </h3>
    )
);
CardTitle.displayName = "CardTitle";
CardTitle.defaultProps = {
    className: "",
};

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    HTMLParagraphProps
>(({ className = "", ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
));
CardDescription.displayName = "CardDescription";
CardDescription.defaultProps = {
    className: "",
};

const CardContent = React.forwardRef<HTMLDivElement, HTMLDivProps>(
    ({ className = "", ...props }, ref) => (
        <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
    )
);
CardContent.displayName = "CardContent";
CardContent.defaultProps = {
    className: "",
};

const CardFooter = React.forwardRef<HTMLDivElement, HTMLDivProps>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("flex items-center p-6 pt-0", className)}
            {...props}
        />
    )
);
CardFooter.displayName = "CardFooter";
CardFooter.defaultProps = {
    className: "",
};

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
};
