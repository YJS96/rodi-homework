import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const customtext = cva("customtext", {
  variants: {
    fontWeight: {
      light: ["font-light"],
      bold: ["font-bold"],
      extrabold: ["font-extrabold"],
    },
    textAlign: {
      left: ["text-left"],
      center: ["text-center"],
      right: ["text-right"],
    },
    textSize: {
      small: ["text-sm"],
      medium: ["text-md"],
      large: ["text-lg"],
    },
  },
  defaultVariants: {
    fontWeight: "light",
    textAlign: "center",
    textSize: "medium",
  },
});

type CustomTextProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof customtext>;

export default function CustomText({
  fontWeight,
  textAlign,
  textSize,
  children,
  ...props
}: CustomTextProps) {
  return (
    <div className={customtext({ fontWeight, textAlign, textSize })} {...props}>
      {children}
    </div>
  );
}
