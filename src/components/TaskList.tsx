import { FlatList, Text, View } from "react-native";
import TaskListItem from "./TaskListItem";
import { useState } from "react";

export function TaskList() {
  const [tasks, setTasks] = useState([{ description: "teste" }]);
  return (
    <View className="bg-backgrountasklist p-2.5 rounded-md">
      <Text className="text-white font-bold text-lg mx-2.5">Todo</Text>

      <FlatList
        data={tasks}
        contentContainerStyle={{
          gap: 5,
        }}
        renderItem={({ item }) => <TaskListItem task={item} />}
      />
    </View>
  );
}
