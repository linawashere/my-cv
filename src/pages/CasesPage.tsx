import React from 'react';
import CaseCard from '@/assets/components/Card/Card';
import casesData from '../assets/data/cases';
import { Case } from '../assets/data/cases';

const CasesPage: React.FC = () => {
    return (
        <div className="cases-page">
            <h1>All cases</h1>
            <p className="page-description">Here are collected my significant projects and completed tasks</p>

            <div className="cases-grid">
                {casesData.map((caseItem: Case) => (
                <CaseCard
                    key={caseItem.id}
                    id={caseItem.id}
                    title={caseItem.title}
                    description={caseItem.description}
                    image={caseItem.image}
                    link={caseItem.link}
                />
                ))}
            </div>
        </div>
    );
};

export default CasesPage;