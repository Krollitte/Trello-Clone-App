import React from "react";
import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

type TaskProps = {
  id: string;
  description: string;
};

type Props = {
  task: TaskProps;
};
export default function TaskListItem({ task }: Props) {
  return (
    <Link href={`/${task.id}`} asChild>
      <Pressable className="p-4 rounded-md bg-backgroundtask flex-row justify-between">
        <Text className="text-white text-sm">{task.description}</Text>
        <AntDesign name="close" size={16} color={"gray"} />
      </Pressable>
    </Link>
  );
}
