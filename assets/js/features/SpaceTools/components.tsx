import React from "react";

import classNames from "classnames";
import { DivLink } from "@/components/Link";

export function Title({ title }: { title: string }) {
  return <div className="font-bold text-lg text-center py-2 border-b border-stroke-base">{title}</div>;
}

interface ContainerProps {
  path: string;
  toolsCount: number;
  children: NonNullable<React.ReactNode>;
}

export function Container({ children, path, toolsCount }: ContainerProps) {
  const large = toolsCount > 2 ? "lg:w-[calc(33%-1.33rem)]" : "lg:w-[340px]";

  const className = classNames(
    "text-sm",
    "h-[380px] max-w-[340px] overflow-hidden",
    `w-full md:w-[calc(50%-1rem)] ${large}`,
    "border border-stroke-base",
    "hover:shadow transition-shadow duration-300",
  );

  return (
    <DivLink to={path} className={className}>
      {children}
    </DivLink>
  );
}
