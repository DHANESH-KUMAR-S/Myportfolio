import React, { useEffect, useRef } from 'react';
import { Box, IconButton, Typography, Paper } from '@mui/material';
import { Close } from '@mui/icons-material';

const CertificateModal = ({ certificate, isOpen, onClose }) => {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  // Parse certificate text to extract organization and name
  const parseCertificateText = (text) => {
    const match = text.match(/^(.+?)\s*\(([^)]+)\)$/);
    if (match) {
      return {
        certificateName: match[1].trim(),
        organization: match[2].trim()
      };
    }
    return {
      certificateName: text,
      organization: ''
    };
  };

  const { certificateName, organization } = parseCertificateText(certificate?.text || '');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus trap
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

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen || !certificate) return null;

  return (
    <Box
      ref={backdropRef}
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
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      }}
    >
      <Paper
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        sx={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '90vh',
          width: 'auto',
          height: 'auto',
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
          animation: 'slideIn 0.4s ease-out',
          '@keyframes slideIn': {
            '0%': {
              opacity: 0,
              transform: 'scale(0.8) translateY(20px)',
            },
            '100%': {
              opacity: 1,
              transform: 'scale(1) translateY(0)',
            },
          },
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

        {/* Organization Name - Above Image */}
        {organization && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(rgba(0, 0, 0, 0.8), transparent)',
              padding: 3,
              paddingBottom: 6,
              zIndex: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                fontWeight: 600,
                textAlign: 'center',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                fontSize: '1.1rem',
                opacity: 0.9,
              }}
            >
              {organization}
            </Typography>
          </Box>
        )}

        {/* Certificate Image */}
        <Box
          component="img"
          src={certificate.image}
          alt={certificateName}
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '80vh',
            objectFit: 'contain',
            display: 'block',
          }}
        />

        {/* Certificate Name - Below Image */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
            padding: 3,
            paddingTop: 6,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              fontWeight: 600,
              textAlign: 'center',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
              fontSize: '1.2rem',
            }}
          >
            {certificateName}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default CertificateModal; 