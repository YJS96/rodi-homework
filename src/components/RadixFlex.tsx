import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const radixflex = cva("radixflex", {
  variants: {
    display: {
      none: ["hidden"],
      inlineFlex: ["inline-flex"],
      flex: ["flex"],
    },
    direction: {
      row: ["flex-row"],
      col: ["flex-col"],
      rowReverse: ["flex-row-reverse"],
      colReverse: ["flex-col-reverse"],
    },
    align: {
      start: ["items-start"],
      center: ["items-center"],
      end: ["items-end"],
      baseline: ["items-baseline"],
      stretch: ["items-stretch"],
    },
    justify: {
      start: ["justify-start"],
      center: ["justify-center"],
      end: ["justify-end"],
      between: ["justify-between"],
    },
    wrap: {
      nowrap: ["flex-nowrap"],
      wrap: ["flex-wrap"],
      wrapReverse: ["flex-wrap-reverse"]
    },
    // gap: (value: number) => [`gap-${value}`],
    gap: {
      0: ["gap-0"], 
      1: ["gap-1"], 
      2: ["gap-2"], 
      3: ["gap-3"], 
    }
  },
  defaultVariants: {
    display: "flex",
    direction: "row",
    align: "start",
    justify: "start",
    wrap: "wrap",
    gap: 1,
  },
});

type RadixFlexProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof radixflex>;

export default function RadixFlex({
  display,
  direction,
  align,
  justify,
  wrap,
  gap,
  children,
  ...props
}: RadixFlexProps) {
  return (
    <div className={radixflex({ display, direction, align, justify, wrap, gap })} {...props}>
      {children}
    </div>
  );
}
