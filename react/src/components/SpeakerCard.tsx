import React from 'react';

type Speaker = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
};

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <img 
            src={speaker.image} 
            alt={speaker.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-cassw-blue"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-800">{speaker.name}</h3>
            <p className="text-cassw-blue">{speaker.role}</p>
            <p className="text-sm text-gray-600">{speaker.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;