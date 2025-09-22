import React from "react";
//Data
import labMembersData, { professorData, aluminiData } from '../../uploads/People/peopleData';
// CSS
const sectionTitle = "text-2xl font-bold mt-8 ";
const partTitle = "text-2xl font-bold mt-8 mb-4 border-b-2 border-blue-200 pb-2";
import ReactMarkdown from "react-markdown";

const MembersCard = (member) => (
  <div key={member.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center">
    <img src={member.photo} alt={member.name} className="w-54 h-54 rounded-full object-cover mb-4 border-2 border-gray-300" />
    {member.link ? <a href={member.link} target="_blank" className="text-blue-600 hover:underline mt-2 text-sm">
      <h3 className="text-xl font-semibold mb-1">{member.name}</h3></a>
      :
      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>}
    <p className="text-gray-500 mb-1">{member.role}</p>
    <p className="text-gray-400 text-sm mb-2">{member.from}</p>
    <p className="text-gray-500 text-sm mb-2"><strong>Email:</strong> <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline">{member.email}</a></p>
    {member.edu && member.edu.map((edu, idx) => <p key={idx} className="text-gray-500 text-sm">{edu}</p>)}
  </div>
);

const AluminiCard = (member) => (
  <div key={member.id} className="rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center">
    <img src={member.photo || '/images/no_image.png'} alt={member.name} className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-gray-300" />
    {member.link ? <a href={member.link} target="_blank" className="text-blue-600 hover:underline mt-2 text-sm">
      <h3 className="text-xl font-semibold mb-1">{member.name}</h3></a>
      :
      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>}
    <p className="text-gray-400 text-sm mb-2">{member.date}</p>
  </div>
);

export default function People() {
  return (
    <>
        {/* Professor Section */}
        <section className="pt-20 pb-16">
          <div className = "container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
              <div className="">
                <div className="w-full aspect-[3/3] bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center text-gray-400"><img src={professorData.photo} alt={professorData.name} className="w-full h-full object-cover rounded-2xl" /></div>
                </div>
              </div>
              <div className="md:col-span-2">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">{professorData.name}</h1>
                
                <p className="mt-6 text-lg text-gray-600">{professorData.greeting}</p>
                {/* <p className="mt-6 text-lg text-gray-600">Learn more about our research <a href="#" className='px-2 underline'>here</a>.</p> */}
                
                <div className="mt-8 md:flex flex-wrap gap-8">
                  <p className="text-gray-500 mb-2"><strong>Email:</strong> <a href={`mailto:${professorData.email}`} className="text-blue-600 hover:underline">{professorData.email}</a></p>
                  <p className="text-gray-500 mb-2"><strong>Website:</strong> <a href={professorData.link} target="_blank" className="text-blue-600 hover:underline">{professorData.link}</a></p>
                </div>
                <div className={partTitle}>Education</div>
              {professorData.edu.map((item, idx) => <p key={idx} className="text-gray-500">{item}</p>)}
              <div className={partTitle}>Research Interest</div>
            <ReactMarkdown>{professorData.research}</ReactMarkdown>
          </div>
              </div>
            </div>
            
        </section>
        
        <div className="container bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col  p-8 mb-12 lg:flex-row items-center gap-8 flex-1 text-center">
          <img src={professorData.photo} alt={professorData.name} className="w-96 h-96 rounded-3xl object-cover border-4 border-blue-100" />
          <div className="flex-1 mt-4 lg:mt-0 lg:ml-6 text-left">
            <h1 className="text-4xl font-bold mb-2">{professorData.name}</h1>
            <p className="my-6 text-lg text-gray-600">{professorData.greeting}</p>
            <p className="text-gray-500 mb-2"><strong>Email:</strong> <a href={`mailto:${professorData.email}`} className="text-blue-600 hover:underline">{professorData.email}</a></p>
            <p className="text-gray-500 mb-2"><strong>Website:</strong> <a href={professorData.link} target="_blank" className="text-blue-600 hover:underline">{professorData.link}</a></p>
            <div className={partTitle}>Education</div>
            {professorData.edu.map((item, idx) => <p key={idx} className="text-gray-500">{item}</p>)}
            <div className={partTitle}>Research Interest</div>
            <ReactMarkdown>{professorData.research}</ReactMarkdown>
          </div>
        </div>

        {/* Lab Members */}
        <section className="container mb-12">
        <div className={sectionTitle}>Lab Members</div>
        <div className="divider" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {labMembersData.map(member => (
            <MembersCard key={member.id} {...member} />
          ))}
        </div>
        </section>

        {/* Alumni Section */}
        <section className="container mb-12">
        <div className={sectionTitle}>Alumni - Ph.D.</div>
        <div className="divider" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {aluminiData.filter(member => member.degree === 'Ph.D.').map(member => (
            <AluminiCard key={member.id} {...member} />
          ))}
        </div>
        </section>

        <section className="container mb-12">
        <div className={sectionTitle}>Alumni - M.S.</div>
        <div className="divider" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {aluminiData.filter(member => member.degree === 'M.S.').map(member => (
            <AluminiCard key={member.id} {...member} />
          ))}
        </div>
        </section>
    </>
  );
}
