import type { ReactNode } from "react";
import SparkleHeading from "./SparkleHeading";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  sparkle?: boolean;
};

export default function SectionHeading({ eyebrow, title, intro, align = "center", sparkle = false }: Props) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
        {sparkle ? <SparkleHeading>{title}</SparkleHeading> : title}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-cream/65">{intro}</p>}
    </div>
  );
}
