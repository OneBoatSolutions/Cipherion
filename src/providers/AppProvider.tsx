"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";

export function AppProvider({
  children,
  ...props
}: React.ComponentProps<typeof ThemeProvider>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" {...props}>
      {children}
    </ThemeProvider>
  );
}
