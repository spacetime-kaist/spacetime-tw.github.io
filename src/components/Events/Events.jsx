import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import events from '../../uploads/Events/EventsData';

const Container = styled.div.attrs({ className: 'max-w-6xl mx-auto px-6' })``;
const Divider = styled.hr.attrs({ className: 'my-10 border-t border-gray-300' })``;

const EventCard = ( event ) => (
  <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm mb-8">
    <h2 className="text-2xl font-bold">{event.title}</h2>
    <p className="text-sm text-gray-500 mb-2">{event.date}</p>
    <p className="text-sm text-sky-600 mb-1"><span className='font-bold'>Participants: </span>{event.participants}</p>
    <p className="text-sm text-sky-500 mb-4">Keywords: {event.keywords}</p>

    <div className="prose prose-gray max-w-none mb-6">
      <ReactMarkdown>{event.desc}</ReactMarkdown>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {event.photos.map((photo, idx) => (
        <img
          key={idx}
          src={photo}
          alt={`${event.title} photo ${idx + 1}`}
          className="w-full h-48 object-cover rounded-md"
        />
      ))}
    </div>
  </article>
);

export default function EventsPage() {
  return (
    <>
      <header className="py-5">
        <div className='container'>
          <h1 className="text-3xl font-bold">Events</h1>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Explore our past and upcoming events, conferences, and workshops.
          </p>
        </div>
      <Divider />
      </header>
 
      <main className="py-1">
        <Container>
          {events.map((event, idx) => (
            <EventCard key={idx} {...event} />
          ))}
        </Container>
      </main>
    </>
  );
}
