import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const polytext = cva("polytext", {
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

type PolyTextProps<T extends React.ElementType> = {
  as?: T;
} & React.HTMLAttributes<T> &
  VariantProps<typeof polytext>;

const PolyText = React.forwardRef<HTMLElement, PolyTextProps<React.ElementType>>(({
  as: Component = "div",
  fontWeight,
  textAlign,
  textSize,
  children,
  ...props
}, ref) => {
  return React.createElement(Component, {
    className: polytext({ fontWeight, textAlign, textSize }),
    ref,
    ...props,
  }, children);
});

export default PolyText;