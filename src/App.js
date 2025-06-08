import {useState} from "react";

import Header from "./components/Header.js";
import Tasks from "./components/Tasks.js";
import AddTask from "./components/AddTask.js";

// import {useState} from "react";

// import ErrorBoundary from "./components/ErrorBoundary.js";

function App() {
  // const name = "Harish";
  // const x = 0;

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
  ]);

  // Because I am dealing with tasks, I am creating a function in App.js
  const addTask = (task, text, reminder) => {
    console.log("Add", task, text, reminder);
  };

  // Delete and/ add tasks. However we are not using add task in this example.
  const deleteTask = (id) => {
    // console.log("Delete", id);
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    // console.log("Toggle Reminder", id);
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          reminder: !task.reminder
        };
      }
      return task;
    }));
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {/* <Header title = "Hello" /> */}
      {/* <Header title = {1} /> */}
      {/* <ErrorBoundary fallback={<h2>Header failed to load</h2>}>
        <Header />
      </ErrorBoundary> */}
      {/* <h1>Hello From React</h1> */}
      {/* <h2>Hello {name} {x ? "How are you!" : "Go to hell"}</h2> */}
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ?
      (<Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onToggle= {toggleReminder}
      />) :
      "No Tasks To Show"}
    </div>
    // <>
    //   <h1>Hello From React</h1>
    //   <h2>Hello</h2>
    // </>
  );
}

export default App;
