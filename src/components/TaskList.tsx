import { FlatList, Text, View, TextInput, Button } from "react-native";
import TaskListItem from "./TaskListItem";
import { useState } from "react";

export function TaskList() {
  const [tasks, setTasks] = useState([{ description: "teste" }]);
  const [newTask, setNewTask] = useState("");

  const createTask = () => {
    console.log("teste");
    setTasks([...tasks, { description: newTask }]);
    setNewTask("");
  };
  return (
    <View className="bg-backgrountasklist p-2.5 rounded-md gap-1">
      <Text className="text-white font-bold text-lg mx-2.5">Todo</Text>

      <FlatList
        data={tasks}
        contentContainerStyle={{
          gap: 5,
        }}
        renderItem={({ item }) => <TaskListItem task={item} />}
      />

      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        placeholder="New task"
        placeholderTextColor={"gray"}
        className="text-white p-2.5 bg-backgroundtask rounded-md"
      />
      <Button title="Add task" onPress={createTask} />
    </View>
  );
}
