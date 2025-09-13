import React, { useState } from 'react';
import '../styles/styles.less';

function App() {
  // Step 1: define tasks per day
  const weeklyTasks = {
    Monday: [
      { id: 1, text: 'Morning run', completed: false },
      { id: 2, text: 'Team meeting', completed: false },
      { id: 3, text: 'Read 20 minutes', completed: false },
    ],
    Tuesday: [
      { id: 4, text: 'Gym workout', completed: false },
      { id: 5, text: 'Write report', completed: false },
      { id: 6, text: 'Call parents', completed: false },
    ],
    Wednesday: [
      { id: 7, text: 'Yoga', completed: false },
      { id: 8, text: 'Project planning', completed: false },
      { id: 9, text: 'Cook healthy dinner', completed: false },
    ],
    Thursday: [
      { id: 10, text: 'Go grocery shopping', completed: false },
      { id: 11, text: 'Finish presentation', completed: false },
      { id: 12, text: 'Walk in the park', completed: false },
    ],
    Friday: [
      { id: 13, text: 'Morning swim', completed: false },
      { id: 14, text: 'Review week’s work', completed: false },
      { id: 15, text: 'Movie night', completed: false },
    ],
    Saturday: [
      { id: 16, text: 'Clean apartment', completed: false },
      { id: 17, text: 'Do laundry', completed: false },
      { id: 18, text: 'Meet friends', completed: false },
    ],
    Sunday: [
      { id: 19, text: 'Sleep in', completed: false },
      { id: 20, text: 'Family lunch', completed: false },
      { id: 21, text: 'Plan next week', completed: false },
    ],
  };

  // Step 2: keep state for all tasks
  const [tasks, setTasks] = useState(weeklyTasks);

  // Step 3: toggle completion for a given day + task
  const toggleTask = (day, id) => {
    setTasks({
      ...tasks,
      [day]: tasks[day].map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    });
  };

  return (
    <div className="app">
      <h1>Weekly Checklist</h1>
      {Object.keys(tasks).map((day) => (
        <div key={day} className="day-section">
          <h2>{day}</h2>
          <ul>
            {tasks[day].map((task) => (
              <li key={task.id}>
                <input
                  id={`task-${task.id}`}
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(day, task.id)}
                />
                <label htmlFor={`task-${task.id}`}>
                  <span
                    style={{
                      textDecoration: task.completed ? 'line-through' : 'none',
                    }}
                  >
                    {task.text}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
