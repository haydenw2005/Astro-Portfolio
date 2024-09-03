import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-purple-50 [box-shadow:0_0_10px_rgba(147,51,234,0.1)]",
      "transform-gpu dark:bg-purple-900/20 dark:[border:1px_solid_rgba(147,51,234,0.1)] dark:[box-shadow:0_0_15px_rgba(147,51,234,0.2)]",
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-purple-600 transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:text-purple-400" />
      <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200">
        {name}
      </h3>
      <p className="max-w-lg text-purple-600 dark:text-purple-300">
        {description}
      </p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Button
        variant="ghost"
        asChild
        size="sm"
        className="pointer-events-auto text-purple-600 hover:text-purple-800 dark:text-purple-300 dark:hover:text-purple-100"
      >
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-purple-100/50 group-hover:dark:bg-purple-800/30" />
  </div>
);

export { BentoCard, BentoGrid };
