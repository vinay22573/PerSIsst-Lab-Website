"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion2 = AccordionPrimitive.Root

const AccordionItem2 = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b ", className)}
    {...props}
  />
))
AccordionItem2.displayName = "AccordionItem"

const AccordionTrigger2 = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex ">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        " flex flex-1 items-center justify-between py-4 text-lg leading-normal font-semibold transition-all text-left [&[data-state=open]>svg]:rotate-90 text-white",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className=" h-6 w-6 shrink-0 text-white transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger2.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent2 = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-white"
    {...props}
  >
    <div className={cn("pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent2.displayName = AccordionPrimitive.Content.displayName

export { Accordion2, AccordionItem2, AccordionTrigger2, AccordionContent2 }
