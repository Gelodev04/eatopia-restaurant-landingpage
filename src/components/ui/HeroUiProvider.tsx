"use client";
import React from 'react'
import {HeroUIProvider} from "@heroui/react";

interface HeroUiProviderProps {
  children: React.ReactNode;
}

export default function HeroUiProvider({ children }: HeroUiProviderProps) {
  return (
    <HeroUIProvider>{children}</HeroUIProvider>
  )
}
