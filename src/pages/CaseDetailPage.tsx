import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import casesData from '../assets/data/cases';
import '../App.css';

const CaseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const caseItem = casesData.find(c => c.id === id);
  
  if (!caseItem) {
    return (
      <div className="case-not-found">
        <h2>Case not found</h2>
        <p>The requested project does not exist or has been deleted</p>
        <Link to="/cases" className="btn">Return to cases</Link>
      </div>
    );
  }
  
  return (
    <div className="case-detail">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>
      
      <article className="case-article">
        <header className="case-header">
          <h1>{caseItem.title}</h1>
          <p className="case-subtitle">{caseItem.subtitle}</p>
          {caseItem.date && <p className="case-date">Year: {caseItem.date}</p>}
          
          {caseItem.technologies && caseItem.technologies.length > 0 && (
            <div className="case-tech">
                <p>Technologies:</p>
              {caseItem.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          )}
          
          <div className="case-links">
            {caseItem.link && (
              <a href={caseItem.link} target="_blank" rel="noopener noreferrer" className="btn">
                View the project
              </a>
            )}
            {caseItem.github && (
              <a href={caseItem.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Source code
              </a>
            )}
          </div>
        </header>
        
        {caseItem.coverImage && (
          <div className="case-cover">
            <img src={caseItem.image} alt={`${caseItem.title} cover`} />
          </div>
        )}
        
        <div className="case-content">
          <section className="case-section">
            <h2>Project Description</h2>
            <p>{caseItem.fullDescription || caseItem.description}</p>
          </section>
          
          {caseItem.challenge && (
            <section className="case-section">
              <h2>Task</h2>
              <p>{caseItem.challenge}</p>
            </section>
          )}
          
          {caseItem.solutions && caseItem.solutions.length > 0 && (
            <section className="case-section">
              <h2>Solutions</h2>
              <div className="solutions-list">
                {caseItem.solutions.map((solution, index) => (
                  <div key={index} className="solution-item">
                    <h4>{solution.title}</h4>
                    <p>{solution.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {caseItem.features && caseItem.features.length > 0 && (
            <section className="case-section">
              <h2>Main functions</h2>
              <ul>
                {caseItem.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          )}
          
          {caseItem.solution && (
            <section className="case-section">
              <h2>Solution</h2>
              <p>{caseItem.solution}</p>
            </section>
          )}
          
          {caseItem.results && caseItem.results.length > 0 && (
            <section className="case-section">
              <h2>Results</h2>
              <ul>
                {caseItem.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </section>
          )}
          
          {caseItem.gallery && caseItem.gallery.length > 0 && (
            <section className="case-section">
              <h2>Gallery</h2>
              <div className="case-gallery">
                {caseItem.gallery.map((img, index) => (
                  <img key={index} src={img} alt={`${caseItem.title} screenshot ${index + 1}`} />
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
      
      <div className="case-navigation">
        <Link to="/cases" className="btn">← All cases</Link>
      </div>
    </div>
  );
};

export default CaseDetailPage;