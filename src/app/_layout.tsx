import React from "react";
import "@/styles/global.css";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";

import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { RealmCustomProvider } from "../providers/Realm";

export default function Layout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <RealmCustomProvider>
        <Stack screenOptions={{}}></Stack>
      </RealmCustomProvider>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
