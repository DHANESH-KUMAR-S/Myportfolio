import React, { useEffect } from 'react';
import { Box, IconButton, Typography, Paper, Chip } from '@mui/material';
import { Close } from '@mui/icons-material';
import { motion } from 'framer-motion';
import BlurText from './BlurText';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <Box
      onClick={onClose}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        animation: 'fadeIn 0.3s ease-out',
        '@keyframes fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Paper
          onClick={(e) => e.stopPropagation()}
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            width: 600,
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(0, 230, 251, 0.05) 100%)',
            border: '2px solid rgba(25, 118, 210, 0.2)',
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              zIndex: 1,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <Close />
          </IconButton>

          {/* Content */}
          <Box sx={{ p: 4, pt: 6 }}>
            {/* Project Name */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: 'linear-gradient(45deg, #1976d2, #00e6fb)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Project Details
              </Typography>
              <BlurText
                text={`Project Name: ${project.name}`}
                delay={100}
                className="text-xl font-bold mb-4"
                color="#1976d2"
              />
            </Box>

            {/* Description */}
            <Box sx={{ mb: 4 }}>
              <BlurText
                text="Description:"
                delay={200}
                className="text-lg font-semibold mb-2"
                color="#1976d2"
              />
              <BlurText
                text={project.description}
                delay={300}
                className="text-base leading-relaxed"
                color="#1976d2"
                animateBy="words"
                stepDuration={0.5}
              />
            </Box>

            {/* Tech Stack */}
            <Box sx={{ mb: 4 }}>
              <BlurText
                text="Tech Stack:"
                delay={400}
                className="text-lg font-semibold mb-3"
                color="#1976d2"
              />
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                }}
              >
                {project.tech.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 500 + index * 100 }}
                  >
                    <Chip
                      label={tech}
                      size="medium"
                      sx={{
                        backgroundColor: 'rgba(25, 118, 210, 0.1)',
                        color: '#1976d2',
                        border: '2px solid rgba(25, 118, 210, 0.3)',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        '&:hover': {
                          backgroundColor: 'rgba(25, 118, 210, 0.2)',
                          transform: 'scale(1.05)',
                        },
                        transition: 'all 0.2s ease',
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </Box>

            {/* View Project Button */}
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  backgroundColor: '#1976d2',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
                }}
              >
                View Project
              </motion.a>
            </Box>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default ProjectModal; 