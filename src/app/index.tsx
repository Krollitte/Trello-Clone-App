import { TaskBoard } from "@/components/TaskBoard";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "Project Board" }} />
      <TaskBoard />
    </>
  );
}
