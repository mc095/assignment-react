
import React, { useState } from 'react';

const TaskItem = ({ task }) => {
  const [priority, setPriority] = useState(task.priority || 'low');

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };


  const priorityColor = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
    low: 'bg-green-500',
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-2 border border-gray-200">
      <div className="flex items-center">
        <span className={`w-4 h-4 rounded-full mr-3 ${priorityColor[priority]}`}></span>
        <span className="text-gray-800">{task.name}</span>
      </div>
      <select
        value={priority}
        onChange={handlePriorityChange}
        className="p-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
};

export default TaskItem;