import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

const Checkbox = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <CheckboxPrimitive.Root
      ref={ref}
      className={`
        peer h-4 w-4 shrink-0 rounded border border-gray-400
        focus:outline-none focus:ring-2 focus:ring-black
        data-[state=checked]:bg-black data-[state=checked]:border-black
        disabled:cursor-not-allowed disabled:opacity-50
        ${className}
      `}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
        <Check className="h-3 w-3" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
