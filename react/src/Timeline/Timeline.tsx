import React from 'react';

type Event = {
  time: string;
  title: string;
  speaker?: string;
  description?: string;
  isBreak?: boolean;
};

const Timeline = ({ events }: { events: Event[] }) => {
  return (
    <div className="max-w-3xl mx-auto">
      {events.map((event, index) => (
        <div key={index} className="relative pl-8 pb-8 border-l-2 border-cassw-blue last:border-0 last:pb-0">
          <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-cassw-blue"></div>
          <div className={`p-6 rounded-lg ${event.isBreak ? 'bg-gray-100' : 'bg-white shadow-md'}`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <span className="text-cassw-blue font-bold">{event.time}</span>
              {event.isBreak ? (
                <h3 className="text-lg font-semibold text-gray-700">{event.title}</h3>
              ) : (
                <div>
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  {event.speaker && <p className="text-cassw-orange">{event.speaker}</p>}
                </div>
              )}
            </div>
            {event.description && (
              <p className="mt-2 text-gray-600">{event.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;