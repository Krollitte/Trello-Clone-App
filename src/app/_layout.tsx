import React from "react";
import "@/styles/global.css";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";

import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Stack screenOptions={{}}></Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
