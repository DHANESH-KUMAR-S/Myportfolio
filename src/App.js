import React, { useMemo, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Container,
  CssBaseline,
  useTheme,
  ThemeProvider,
  createTheme,
  Stack,
  LinearProgress,
  Paper
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

import Particles from './Particles';
import './Particles.css';
import profile from './profile.png';
import ClickSpark from './ClickSpark';
import ProfileCard from './ProfileCard';
import bgavatar from './bgavatar.png';
import grain from './grain.webp';
import { Typewriter } from 'react-simple-typewriter';
import CertificationsSection from './CertificationsSection';
import ScrollProgressBar from './ScrollProgressBar';
import ProjectCard3D from './ProjectCard3D';
import ProjectModal from './ProjectModal';
import StarBorder from './StarBorder';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Hero', id: 'hero' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
];

const SKILLS = [
  'Python',
  'JavaScript',
  'React',
  'Node.js',
  'HTML/CSS',
  'Flask',
  'Java',
  'C++',
  'C',
  'GitHub',
];

const PROJECTS = [
  {
    name: 'Code Arena',
    description: 'A real-time coding challenge platform with secure Docker-based code execution. Users can create and join challenges, write code in multiple languages, test against cases, and compete live.',
    tech: ['MERN', 'Docker'],
    link: 'https://github.com/DHANESH-KUMAR-S/Codearena',
    screenshot: '/screenshots/code-arena.png', // Add your screenshot path here
  },
  {
    name: 'Testforge AI',
    description: 'A Flask-based web app that generates manual test cases and automation scripts from project requirements. Supports multiple input types, frameworks, and includes responsive dark-mode UI.',
    tech: ['Flask', 'JavaScript'],
    link: 'https://github.com/DHANESH-KUMAR-S/aitestcasegenerator',
    screenshot: '/screenshots/testforge-ai.png', // Add your screenshot path here
  },
  {
    name: 'ThinkFirst AI',
    description: 'An AI learning assistant designed to promote independent problem-solving. Offers guidance and hints while avoiding spoon-feeding answers, with final answers revealed only on request.',
    tech: ['Flask', 'JavaScript'],
    link: 'https://github.com/DHANESH-KUMAR-S/Thinkfirstai',
    screenshot: '/screenshots/thinkfirst-ai.png', // Add your screenshot path here
  },
  {
    name: 'BatGPT',
    description: 'A virtual assistant chatbot inspired by Batman, offering engaging and interactive conversation through a sleek web interface built with Flask and basic front-end stack.',
    tech: ['Flask', 'JavaScript'],
    link: 'https://github.com/DHANESH-KUMAR-S/Batgptai',
    screenshot: '/screenshots/batgpt.png', // Add your screenshot path here
  },
  {
    name: 'Scanalyze AI',
    description: 'An AI-powered medical report analyzer designed to simplify medical reports for elderly users. Features file upload, OCR, chatbot integration, and responsive, elderly-friendly UI.',
    tech: ['Flask', 'JavaScript'],
    link: 'https://github.com/DHANESH-KUMAR-S/Scanalyze-AI',
    screenshot: '/screenshots/scanalyze-ai.png', // Add your screenshot path here
  },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function MyAppBar({ darkMode, toggleDarkMode }) {
  const theme = useTheme();
  return (
    <AppBar position="fixed" color="default" elevation={2} sx={{ bgcolor: theme.palette.background.paper }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}>
          Dhanesh Kumar S
        </Typography>
        <Stack direction="row" spacing={2}>
          {NAV_ITEMS.map(item => (
            <Button key={item.id} color="inherit" onClick={() => scrollToSection(item.id)}>
              {item.label}
            </Button>
          ))}
        </Stack>
        <IconButton sx={{ ml: 2 }} onClick={toggleDarkMode} color="inherit">
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

function HeroSection() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default', pt: 10 }}>
      <Container maxWidth="md">
        <Paper elevation={4} sx={{
          p: 6,
          borderRadius: 4,
          textAlign: 'center',
          bgcolor: 'background.paper',
          backdropFilter: 'blur(8px)',
          borderTop: '4px solid #00e6fb',
          borderBottom: '4px solid #00e6fb',
          borderLeft: '4px solid #00e6fb',
          borderRight: '4px solid #00e6fb',
        }}>
          <Typography variant="h2" color="primary" fontWeight={800} gutterBottom>
            Dhanesh Kumar
          </Typography>
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              fontWeight: 700,
              mb: 2,
              minHeight: '2.5em',
              flexWrap: 'nowrap',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontSize: { xs: '1.1rem', sm: '1.5rem', md: '2rem' },
              width: '100%',
              maxWidth: '100%',
            }}
          >
            <span style={{ color: '#fff', fontWeight: 600, marginRight: 8, whiteSpace: 'nowrap' }}>
              Hi there !, I&apos;m a
            </span>
            <span style={{ color: '#00e6fb', textShadow: '0 0 12px #00e6fb, 0 0 24px #1976d2', fontFamily: 'monospace', fontWeight: 800, whiteSpace: 'nowrap' }}>
              <Typewriter
                words={[
                  'Aspiring Developer',
                  'Cloud Enthusiast',
                  'Motivated Individual',
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

function SkillsSection() {
  return (
    <Box id="skills" sx={{ py: 10, bgcolor: 'background.default', scrollMarginTop: '80px' }}>
      <Container maxWidth="sm">
        <Typography variant="h4" color="primary" fontWeight={700} align="center" gutterBottom>
          My Skills
        </Typography>
        <Stack spacing={4} mt={4}>
          {SKILLS.map(skill => {
            const value = Math.floor(Math.random() * 41) + 60; // 60-100%
            return (
              <Box key={skill}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography fontWeight={600}>{skill}</Typography>
                  <Typography color="text.secondary">{value}%</Typography>
                </Stack>
                <LinearProgress variant="determinate" value={value} sx={{ height: 10, borderRadius: 5, mt: 1, bgcolor: 'grey.300' }} color="primary" />
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Box id="projects" sx={{ py: 10, bgcolor: 'background.default', minHeight: '100vh', scrollMarginTop: '80px', display: 'flex', alignItems: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" color="primary" fontWeight={700} align="center" gutterBottom sx={{ mb: 6 }}>
            Projects
          </Typography>
          <StarBorder 
            color="#00e6fb" 
            speed="8s" 
            thickness={3}
            style={{ 
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
                gap: 4,
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
              }}
            >
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <ProjectCard3D
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                </motion.div>
              ))}
            </Box>
          </StarBorder>
        </Container>
      </Box>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#fff',
      },
    },
    typography: {
      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
    },
  }), [darkMode]);

  return (
    <>
      <ScrollProgressBar />
      <ClickSpark sparkColor="#1976d2" sparkSize={16} sparkRadius={32} sparkCount={12} duration={600}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MyAppBar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
          <Particles />
          {/* Overlapping ProfileCard and HeroSection, centered and visually connected */}
          <div id="hero" style={{ position: 'relative', width: 800, maxWidth: '95vw', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, paddingTop: 0, overflow: 'visible' }}>
            <div style={{ position: 'absolute', left: 0, right: 0, top: '80px', display: 'flex', justifyContent: 'center', zIndex: 3 }}>
              <ProfileCard
                avatarUrl={profile}
                miniAvatarUrl={profile}
                iconUrl={bgavatar}
                grainUrl={grain}
                name="DHANESH KUMAR S"
                title="Aspiring Software Engineer"
                handle="dhaneshkumars"
                status="Online"
                contactText="Contact"
                showBehindGradient={false}
              />
            </div>
            <div style={{ width: 800, maxWidth: '95vw', margin: '0 auto', marginTop: 270 }}>
              <HeroSection />
            </div>
          </div>
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
        </ThemeProvider>
      </ClickSpark>
    </>
  );
}
