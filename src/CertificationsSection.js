import React, { useState } from 'react';
import { Typography } from '@mui/material';
import CircularGallery from './CircularGallery';
import CertificateModal from './CertificateModal';

import Mern_Intro from './certifications/Mern_Intro.png';
import Azura_CV from './certifications/azura_CV.png';
import Java_Fundamental from './certifications/java_fundemendal.png';
import Python_Foundations from './certifications/Python Foundations.png';
import Basics_of_Python from './certifications/Basics of python.png';
import Python_Basic from './certifications/Python_basic.png';
import Software_Engineer from './certifications/Software_Engineer.png';
import Problem_Solving from './certifications/Problem_Solving.png';
import Java_Basic from './certifications/Java_basic.png';

const certificates = [
  { image: Mern_Intro, text: 'MERN Stack Intro (Simplilearn)' },
  { image: Azura_CV, text: 'CV app with Azure (Coursera)' },
  { image: Java_Fundamental, text: 'Java Fundamentals(Infosys Springboard)' },
  { image: Python_Foundations, text: 'Python Foundations(Infosys Springboard)' },
  { image: Basics_of_Python, text: 'Basics of Python(Infosys Springboard)' },
  { image: Python_Basic, text: 'Python Basic(Hackerrank)' },
  { image: Software_Engineer, text: 'Software Engineer(Hackerrank)' },
  { image: Problem_Solving, text: 'Problem Solving(Hackerrank)' },
  { image: Java_Basic, text: 'Java Basic(Hackerrank)' },
];

export default function CertificationsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <>
      <section id="certifications" style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 0', scrollMarginTop: '80px' }}>
        <h2 style={{ marginBottom: 32, fontWeight: 700, fontSize: 32 }}>Certifications</h2>
        <div style={{
          width: '100%',
          maxWidth: 1600,
          height: 600,
          background: 'rgba(30,30,40,0.85)',
          border: '3px solid var(--mui-palette-divider, rgba(160,160,160,0.25))',
          borderRadius: 18,
          boxShadow: '0 6px 32px 0 rgba(0,0,0,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
          backdropFilter: 'blur(6px)',
        }}>
          <CircularGallery 
            items={certificates} 
            bend={2.5} 
            cardWidth={1200} 
            cardHeight={860}
            onCertificateClick={handleCertificateClick}
          />
        </div>
        <Typography 
          variant="body2" 
          sx={{ 
            mt: 2, 
            textAlign: 'center', 
            color: 'text.secondary',
            fontStyle: 'italic'
          }}
        >
          Click on any certificate to view it in full detail
        </Typography>
      </section>

      <CertificateModal
        certificate={selectedCertificate}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
} 