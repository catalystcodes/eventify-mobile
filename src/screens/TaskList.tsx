import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from "react-native";
import React, { useState } from "react";
import PageHeader from "../components/atoms/PageHeader";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AppInput from "../components/molecules/AppInput";
import ArrowBack from "../components/atoms/vectors/ArrowBack";
import AppButton from "../components/atoms/AppButton";
import TaskTemplate from "../components/atoms/TaskTemplate";

interface TaskList {
  taskName: string;
  addedNote: string;
}

const TaskList = () => {
  const [task, setTask] = useState({ taskName: "", addedNote: "" });
  const [taskList, setTaskList] = useState<TaskList[]>([]);
  const [addTask, setAddTask] = useState(false);

  const handleAddTask = () => {
    if (task.taskName.trim().length && task.addedNote.trim().length) {
      setTaskList([...taskList, task]);
      setAddTask(false);
      setTask({ addedNote: "", taskName: "" });
    } else {
      alert("Please fill in all fields");
    }
  };
  const handleNameChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setTask({ ...task, taskName: e.nativeEvent.text });
    // console.log(task);
  };
  const handleNoteChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setTask({ ...task, addedNote: e.nativeEvent.text });
  };

  return (
    <View>
      <View style={styles.headerView}>
        {!addTask && (
          <PageHeader style={{ paddingRight: "70%" }}>
            <View
              style={{
                marginLeft: wp(7),
              }}
            >
              <Text style={{ fontSize: hp(2.5), fontWeight: "bold" }}>
                Task List
              </Text>
            </View>
          </PageHeader>
        )}
        {addTask && (
          <View style={styles.addTaskView}>
            <ArrowBack onPress={() => setAddTask(false)} />
            <Text style={{ fontWeight: "bold", fontSize: hp(3) }}>
              Add Task
            </Text>
          </View>
        )}
      </View>
      <View style={{ marginVertical: hp(3.7), marginHorizontal: wp(5.33) }}>
        {!addTask && (
          <View>
            {taskList.length > 0 && (
              <View style={styles.taskListView}>
                {taskList.map((item, index) => (
                  <TaskTemplate {...item} key={index} />
                ))}
              </View>
            )}
            <Text
              onPress={() => setAddTask(true)}
              style={{
                fontWeight: "medium",
                color: "#F0534F",
                fontSize: hp(2.2),
              }}
            >
              + Add Task
            </Text>

            {taskList.length < 1 && (
              <View style={styles.noTaskView}>
                <Image
                  style={{ height: hp(10), width: wp(18) }}
                  source={require("../assets/image 19.png")}
                />
                <View>
                  <Text
                    style={{
                      textAlign: "center",
                      marginBottom: hp(0.5),
                      fontWeight: "medium",
                      fontSize: hp(2),
                    }}
                  >
                    No Tasks found
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: hp(1.7),
                      color: "#848484",
                    }}
                  >
                    Please add your tasks
                  </Text>
                </View>
              </View>
            )}
          </View>
        )}
        {addTask && (
          <View>
            <AppInput
              label="Task Name"
              inputValue={task.taskName}
              handleChange={handleNameChange}
              placeholder="Enter Task Name"
              style={{
                fontSize: hp(1.7),
                paddingLeft: wp(4.26),
                borderColor: "#82828270",
                backgroundColor: "#fff",
              }}
            />

            <AppInput
              label="Note"
              inputValue={task.addedNote}
              handleChange={handleNoteChange}
              placeholder="Enter Note"
              style={{
                fontSize: hp(1.7),
                paddingLeft: wp(4.26),
                borderColor: "#82828270",
                backgroundColor: "#fff",
              }}
            />
            <View style={{ marginTop: hp(6) }}>
              <AppButton onPress={handleAddTask} text="Add to Task List" />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerView: {
    // position: "relative",
    paddingTop: hp(4),
    paddingBottom: hp(1),
    boxShadow: "0 0 4px 0 #1D1D1D20 ",
    // paddingTop: hp(2),
    backgroundColor: "#fff",
  },
  addTaskView: {
    display: "flex",
    flexDirection: "row",
    columnGap: wp(7),
    alignItems: "center",
    marginLeft: wp(5.9),
    marginVertical: hp(2),
  },
  taskListView: {
    marginBottom: hp(2.5),
    display: "flex",
    rowGap: hp(2.5),
  },
  noTaskView: {
    marginTop: hp(25),
    width: "100%",
    display: "flex",
    alignItems: "center",
    rowGap: hp(3),
  },
});

export default TaskList;
