import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * If your project already has a Container primitive (per the project's
 * src/components/ui/ conventions), delete this file and import that one
 * instead — this is a drop-in equivalent.
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
