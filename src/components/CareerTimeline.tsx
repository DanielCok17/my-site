import React from 'react';
import './CareerTimeline.css';

const timelineData = [
  {
    year: 'NOV 2024 - Currently',
    title: 'Medior developer',
    description: 'Well code a.s.\nDeveloped the MyHero platform, enabling customers to request personalized greetings. Designed and built the platform using React Native for the mobile frontend and Node.js for the backend, ensuring seamless user experience and efficient content delivery.'
  },
  {
    year: 'JAN 2024 - NOV 2024',
    title: 'Medior developer',
    description: 'Well code a.s.\nDeveloped AI-driven prediction models for sports outcomes, targeting bettors. Built the platform using modern technologies - Next.js/NodeJS + React with TypeScript. https://ai-tips.eu/en'
  },
  {
    year: 'SEP 2022 - SEP 2023',
    title: 'Medior full stack developer',
    description: 'ON Semiconductor Slovakia, a.s., Bratislava, Slovak Republic\nCloud monitoring project using Node.js and React. Responsibilities included designing and developing the backend API with Node.js.'
  },
  {
    year: 'NOV 2021 - APR 2022',
    title: 'Junior full stack developer',
    description: 'ASData group, s.r.o., Nitra, Slovak Republic\nFull stack developer in PHP, using Laravel framework.'
  },
  {
    year: 'OCT 2020 - NOV 2021',
    title: 'Junior back-end developer',
    description: 'NIKE Slovakia s. r. o., Bratislava, Slovak Republic\nJunior back-end developer. Use of PHP - Nette, Symfony frameworks.'
  },
  {
    year: '2018 - 2024',
    title: 'FIIT - Faculty of Informatics and Information Technologies',
    description: 'Software Engineering\nSlovak University of Technology in Bratislava, Slovak Republic.'
  },
];

const CareerTimeline: React.FC = () => {
  return (
    <section className="career-timeline">
      <h2 className="timeline-title">Career Timeline</h2>
      <div className="timeline-container">
        {timelineData.map((item, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-item-title">{item.title}</h3>
              <p className="timeline-description" style={{whiteSpace: 'pre-line'}}>{item.description}</p>
            </div>
          </div>
        ))}
        <div className="timeline-line" />
      </div>
    </section>
  );
};

export default CareerTimeline; 