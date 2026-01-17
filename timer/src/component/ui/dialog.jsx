import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

const Dialog = DialogPrimitive.Root;


const DialogTrigger = DialogPrimitive.Trigger;


const DialogClose = DialogPrimitive.Close;


const DialogPortal = DialogPrimitive.Portal;

const DialogOverlay = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <DialogPrimitive.Overlay
      ref={ref}
      className={`
        fixed inset-0 z-50 bg-black/50
        data-[state=open]:animate-in
        data-[state=closed]:animate-out
        ${className}
      `}
      {...props}
    />
  )
);
DialogOverlay.displayName = "DialogOverlay";

/* Content */
const DialogContent = React.forwardRef(
  ({ className = "", children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={`
          fixed left-1/2 top-1/2 z-50 w-full max-w-lg
          -translate-x-1/2 -translate-y-1/2
          rounded-lg bg-white p-6 shadow-lg
          data-[state=open]:animate-in
          data-[state=closed]:animate-out
          ${className}
        `}
        {...props}
      >
        {children}

        <DialogPrimitive.Close
          className="
            absolute right-4 top-4 rounded-sm opacity-70
            hover:opacity-100 focus:outline-none
          "
        >
          <X className="h-4 w-4" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
);
DialogContent.displayName = "DialogContent";

/* Header */
const DialogHeader = ({ className = "", ...props }) => (
  <div
    className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

/* Footer */
const DialogFooter = ({ className = "", ...props }) => (
  <div
    className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

/* Title */
const DialogTitle = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <DialogPrimitive.Title
      ref={ref}
      className={`text-lg font-semibold ${className}`}
      {...props}
    />
  )
);
DialogTitle.displayName = "DialogTitle";

/* Description */
const DialogDescription = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <DialogPrimitive.Description
      ref={ref}
      className={`text-sm text-gray-500 ${className}`}
      {...props}
    />
  )
);
DialogDescription.displayName = "DialogDescription";

/* Exports */
export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
