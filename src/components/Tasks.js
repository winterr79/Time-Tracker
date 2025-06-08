import Task from "./Task.js";

// const tasks = [
//     {
//     id: 1,
//     text: 'Doctors Appointment',
//     day: 'Feb 5th at 2:30pm',
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: 'Meeting at School',
//     day: 'Feb 6th at 1:30pm',
//     reminder: true,
//   },
//   {
//     id: 3,
//     text: 'Food Shopping',
//     day: 'Feb 5th at 2:30pm',
//     reminder: false,
//   },
// ];

// import {useState} from "react";

const Tasks = ({tasks, onDelete, onToggle}) => {
    // const [tasks, setTasks] = useState([
    //     {
    //         id: 1,
    //         text: 'Doctors Appointment',
    //         day: 'Feb 5th at 2:30pm',
    //         reminder: true,
    //     },
    //     {
    //         id: 2,
    //         text: 'Meeting at School',
    //         day: 'Feb 6th at 1:30pm',
    //         reminder: true,
    //     },
    //     {
    //         id: 3,
    //         text: 'Food Shopping',
    //         day: 'Feb 5th at 2:30pm',
    //         reminder: false,
    //     },
    // ]);

    // const addTask = () => {
    //     setTasks([...tasks, {
    //         id: 4,
    //         text: "New Task",
    //         day: "Feb 7th at 10:00am",
    //         reminder: true
    //     }]);
    // };

    return (
        // setTasks([...tasks, {}]),
        <>
            {/* <button onClick={addTask}>Add Task</button> */}
            {tasks.map((task) => (
                // <h3 key= {task.id}>{task.text}</h3>
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle= {onToggle}
                />
            ))}
        </>
    );
};

export default Tasks
