import {useState} from "react";

import Header from "./components/Header.js";
import Tasks from "./components/Tasks.js";

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

  // Delete and/ add tasks. However we are not using add task in this example.
  const deleteTask = (id) => {
    // console.log("Delete", id);
    setTasks(tasks.filter(task => task.id !== id));
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
      {tasks.length > 0 ?
      (<Tasks
        tasks={tasks}
        onDelete={deleteTask}
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
