import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type TaskProps = {
  description: string;
};

type Props = {
  task: TaskProps;
};
export default function TaskListItem({ task }: Props) {
  return (
    <View className="p-4 rounded-md bg-backgroundtask flex-row justify-between">
      <Text className="text-white text-sm">{task.description}</Text>
      <AntDesign name="close" size={16} color={"gray"} />
    </View>
  );
}
