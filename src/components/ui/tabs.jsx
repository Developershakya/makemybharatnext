// components/ui/tabs.jsx

"use client"

import * as TabsPrimitive from "@radix-ui/react-tabs"
import React from "react"
import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(function TabsList(
  { className, ...props }, ref
) {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-white ", className)}
      {...props}
    />
  )
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(function TabsTrigger(
  { className, ...props }, ref
) {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-orange-500 data-[state=active]:shadow-sm data-[state=active]:focus-visible:ring-2 data-[state=active]:focus-visible:ring-ring data-[state=active]:focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  )
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(function TabsContent(
  { className, ...props }, ref
) {
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn("mt-2 rounded-md border border-muted bg-black mask-y-from-90% mask-x-to-900%  p-6", className)}
      {...props}
    />
  )
})
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
