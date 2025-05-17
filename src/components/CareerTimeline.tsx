'use client'
import React from 'react';
import './CareerTimeline.css';
import careerEn from '@/messages/career.en.json';
import careerSk from '@/messages/career.sk.json';
import { useSearchParams } from 'next/navigation';

const CareerTimeline: React.FC = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') === 'sk' ? 'sk' : 'en';
  const messages = lang === 'sk' ? careerSk : careerEn;

  return (
    <section className="career-timeline">
      <h2 className="timeline-title">{messages.sectionTitle}</h2>
      <div className="timeline-container">
        {messages.items.map((item, idx) => (
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