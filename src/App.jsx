
import React from 'react';
import ProfileCard from './components/ProfileCard';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Assignment</h1>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6 w-full">
          <h2 className="text-lg font-semibold text-gray-200">
            Question 1: Create a simple ProfileCard component that displays a user's name, avatar, and a short bio
          </h2>
        </div>

        <div className="mb-10 w-full">
          <ProfileCard
            name="Alex Morgan"
            title="Mechanic"
            avatar="https://i.pinimg.com/originals/ff/03/e2/ff03e2b79c38b60ff911124d059daabd.jpg"
            phone="+91 8008149866"
            email="ganeshvathumilli@gmail.com"
            website="https://ganeshvath.vercel.app/"
            address="Tadepalligudem, Andhra Pradesh"
          />
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6 w-full">
          <h2 className="text-lg font-semibold text-gray-200">
            Question 2: Create a mini Task Manager and add a priority dropdown to each task item component, allowing users to set task priority (high, medium, low) and display the priority visually
          </h2>
        </div>

        <div className="w-full">
          <TaskManager />
        </div>
      </div>
    </div>
  );
}

export default App;