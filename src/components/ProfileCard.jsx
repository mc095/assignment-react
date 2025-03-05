
import React, { useState } from 'react';

const ProfileCard = ({ name, title, avatar, phone, email, website, address }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="max-w-sm mx-auto perspective-1000" onClick={handleFlip}>
      <div
        className={`relative w-80 h-[450px] transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
 
        <div className="absolute inset-0 bg-green-900 rounded-lg shadow-lg backface-hidden flex flex-col items-center justify-center p-6">
          <img
            className="w-32 h-32 rounded-full object-cover mb-4"
            src={avatar}
            alt="Profile"
          />
          <h2 className="text-2xl font-semibold text-white">{name}</h2>
          <p className="text-green-300 text-sm font-medium mt-1">{title}</p>
          <div className="mt-6">
            <button className="p-3 bg-green-600 text-white rounded-full shadow-sm">
              ✉️
            </button>
          </div>
        </div>
     
        <div className="absolute inset-0 bg-white rounded-lg shadow-lg backface-hidden rotate-y-180 flex flex-col">

          <div className="bg-green-900 p-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">{name}</h2>
            <div className="flex space-x-2">
              <span className="text-white">⋮</span> 
            </div>
          </div>

          <div className="flex justify-around bg-green-900 border-b border-green-700">
            <span className="text-white text-sm py-2">CHATS</span>
            <span className="text-white text-sm py-2">STATUS</span>
            <span className="text-white text-sm py-2">CALLS</span>
          </div>

          <div className="p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-600 text-sm mb-6">{title}</p>
            <div className="space-y-4 text-gray-800 w-full">
              <div className="flex items-center">
                <span className="mr-3 text-green-500 text-xl"> 📞 </span> {/* Phone emoji */}
                <span>{phone}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-red-500 text-xl"> ✉️ </span> {/* Email emoji */}
                <span>{email}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-blue-500 text-xl"> 🌐 </span> {/* Website emoji */}
                <span>{website}</span>
              </div>
              
              
              <div className="flex items-center">
                <span className="mr-3 text-orange-500 text-xl">📍</span> {/* Address emoji */}
                <span>{address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;