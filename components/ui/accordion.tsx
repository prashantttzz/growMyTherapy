"use client"

import * as React from "react"
import { Plus, Minus } from "lucide-react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

type AccordionTriggerProps = React.ComponentProps<
  typeof AccordionPrimitive.Trigger
> & {
  iconPosition?: "left" | "right"
}

function AccordionTrigger({
  className,
  children,
  iconPosition = "left",
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "group flex flex-1 items-center py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring",
          iconPosition === "right" && "flex-row-reverse justify-between",
          iconPosition === "left" && "gap-4",
          className
        )}
        {...props}
      >
        {/* Icon */}
        <span className="relative size-14 flex items-center justify-center shrink-0">
          <Plus className="absolute inset-0 m-auto size-8 text-black transition-opacity duration-200 group-data-[state=open]:opacity-0" />
          <Minus className="absolute inset-0 m-auto size-8 text-black opacity-0 transition-opacity duration-200 group-data-[state=open]:opacity-100" />
        </span>

        {/* Text */}
        <span className="flex-1">{children}</span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
}
