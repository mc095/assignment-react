
import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Design homepage', priority: 'high' },
    { id: 2, name: 'Write documentation', priority: 'medium' },
    { id: 3, name: 'Fix bugs', priority: 'low' },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: tasks.length + 1, name: newTask, priority: 'low' }]);
    setNewTask('');
  };

  return (
    <div className="max-w-sm mx-auto">
      <h3 className="text-lg font-semibold text-white mb-4">Task Manager</h3>
      <form onSubmit={handleAddTask} className="mb-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Add
          </button>
        </div>
      </form>
      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskManager;