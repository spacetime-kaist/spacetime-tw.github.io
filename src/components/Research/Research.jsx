import React from 'react';
import styled from 'styled-components';
import researchItems from '../../uploads/Research/researchData'; // Import the data array from another file
import { Link } from 'react-router-dom';

const Page = styled.div.attrs({ className: 'min-h-screen bg-gray-50 text-gray-900' })``;
const Container = styled.div.attrs({ className: 'max-w-6xl mx-auto px-6' })``;

const ResearchCard = ({ title, desc, link, image }) => (
  <Link to={link} className="no-underline">
  <article className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="mt-2 text-sm text-gray-600">{desc}</p>
    <a href={link} className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline">Read more →</a>
  </article>
  </Link>
);

export default function ResearchPage() {
  return (
    <Page>
      <header className="py-10 bg-white shadow-sm">
        <Container>
          <h1 className="text-3xl font-bold">Research</h1>
          <p className="mt-2 text-gray-600 max-w-2xl">Explore our ongoing and completed projects that span urban systems, robotics, energy, and extraterrestrial habitats.</p>
        </Container>
      </header>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchItems.map((item) => (
              <ResearchCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </main>
    </Page>
  );
}
