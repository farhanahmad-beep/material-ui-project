import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  PlayArrow,
  Group,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionCard = motion(Card);

// Animated 3D floating cubes
const FloatingCube = ({ delay = 0, duration = 4, size = 60, position = {} }) => (
  <MotionBox
    sx={{
      position: 'absolute',
      width: size,
      height: size,
      background: 'linear-gradient(45deg, #00fff7, #ff0080, #8000ff)',
      borderRadius: '12px',
      opacity: 0.1,
      zIndex: 1,
      ...position,
    }}
    animate={{
      x: [0, 100, -50, 0],
      y: [0, -80, 60, 0],
      rotateX: [0, 360],
      rotateY: [0, 360],
      rotateZ: [0, 180],
      scale: [1, 1.2, 0.8, 1],
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Glowing orbs
const GlowOrb = ({ delay = 0, position = {}, size = 120 }) => (
  <MotionBox
    sx={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(0,255,247,0.4) 0%, rgba(255,0,128,0.2) 50%, transparent 100%)',
      filter: 'blur(20px)',
      zIndex: 1,
      ...position,
    }}
    animate={{
      scale: [1, 1.8, 1],
      opacity: [0.3, 0.8, 0.3],
    }}
    transition={{
      duration: 4,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Animated stat cards
const StatCard = ({ icon, value, label, delay }) => (
  <MotionCard
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, duration: 0.6 }}
    whileHover={{ 
      scale: 1.08,
      rotateY: 10,
    }}
    sx={{
      background: 'rgba(255,255,255,0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(0,255,247,0.2)',
      borderRadius: '16px',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '0 10px 30px rgba(0,255,247,0.3)',
      },
    }}
  >
    <CardContent sx={{ textAlign: 'center', p: 2 }}>
      <Box sx={{ color: '#00fff7', mb: 1, fontSize: '2rem' }}>
        {icon}
      </Box>
      <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700 }}>
        {value}
      </Typography>
      <Typography variant="caption" sx={{ color: '#aaa' }}>
        {label}
      </Typography>
    </CardContent>
  </MotionCard>
);

// Particle field
const ParticleField = () => (
  <Box sx={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' }}>
    {[...Array(25)].map((_, i) => (
      <MotionBox
        key={i}
        sx={{
          position: 'absolute',
          width: 4,
          height: 4,
          backgroundColor: '#00fff7',
          borderRadius: '50%',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [-20, -150],
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 4 + 3,
          delay: Math.random() * 3,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    ))}
  </Box>
);

// Floating UI elements
const FloatingUIElement = ({ text, icon, delay = 0, position = {} }) => (
  <MotionBox
    sx={{
      position: 'absolute',
      zIndex: 30,
      background: 'linear-gradient(135deg, #00fff7, #00b8d4)',
      color: '#000',
      px: 2,
      py: 1,
      borderRadius: '20px',
      fontWeight: 700,
      fontSize: '0.9rem',
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      ...position,
    }}
    animate={{
      y: [0, -15, 0],
      rotate: [0, 3, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 3,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {text} {icon}
  </MotionBox>
);

// Animated border component
const AnimatedBorder = ({ children }) => (
  <MotionBox
    sx={{
      position: 'relative',
      borderRadius: '24px',
      p: '4px',
      background: 'linear-gradient(45deg, #00fff7, #ff0080, #8000ff, #00fff7)',
      backgroundSize: '300% 300%',
    }}
    animate={{
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <Box
      sx={{
        background: 'rgba(0,0,0,0.9)',
        borderRadius: '20px',
        overflow: 'hidden',
      }}
    >
      {children}
    </Box>
  </MotionBox>
);

// Orbiting elements
const OrbitingElement = ({ size = 32, color = '#00fff7', duration = 8, radius = 250, delay = 0 }) => (
  <MotionBox
    sx={{
      position: 'absolute',
      width: size,
      height: size,
      background: `linear-gradient(135deg, ${color}, #00b8d4)`,
      borderRadius: '50%',
      top: '50%',
      left: '50%',
      transformOrigin: `${radius}px 0px`,
    }}
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Get data from Redux store
  const heroData = useSelector((state) => state.hero);
  const {
    badge,
    title,
    description,
    buttons,
    heroImage,
    floatingElements,
    orbitingElements,
    floatingCubes,
    glowOrbs
  } = heroData;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: `
          radial-gradient(circle at 20% 50%, rgba(0,255,247,0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255,0,128,0.15) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(128,0,255,0.15) 0%, transparent 50%),
          linear-gradient(135deg, #0a0a0a 0%, #1a0a1a 50%, #0a0a1a 100%)
        `,
      }}
    >
      {/* Animated Background Elements */}
      <ParticleField />
      
      {/* Floating 3D Cubes */}
      {floatingCubes.map((cube) => (
        <FloatingCube 
          key={cube.id}
          delay={cube.delay} 
          duration={cube.duration} 
          size={cube.size} 
          position={cube.position} 
        />
      ))}
      
      {/* Glowing Orbs */}
      {glowOrbs.map((orb) => (
        <GlowOrb 
          key={orb.id}
          delay={orb.delay} 
          position={orb.position} 
          size={orb.size} 
        />
      ))}

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 20 }}>
        <Box sx={{ pt: 10, pb: 6 }}>
          <Grid container spacing={6} alignItems="center" justifyContent="center" sx={{ minHeight: '80vh' }}>
            {/* Left Content */}
            <Grid item xs={12} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <MotionBox
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                sx={{ textAlign: 'center', maxWidth: '100%' }}
              >
                {/* Badge */}
                <MotionBox
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  sx={{ mb: 3 }}
                >
                  <Chip
                    label={badge}
                    sx={{
                      backgroundColor: 'rgba(0,255,247,0.2)',
                      color: '#00fff7',
                      fontWeight: 600,
                      letterSpacing: 1,
                      border: '1px solid rgba(0,255,247,0.3)',
                    }}
                  />
                </MotionBox>

                {/* Main Heading */}
                <MotionTypography
                  variant="h1"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  sx={{
                    fontSize: { xs: '3rem', md: '4.5rem', lg: '6rem' },
                    fontWeight: 900,
                    lineHeight: 0.9,
                    mb: 3,
                    background: 'linear-gradient(135deg, #fff 30%, #00fff7 70%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 30px rgba(0,255,247,0.5)',
                  }}
                >
                  {title.first}
                  <br />
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #ff0080, #00fff7)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {title.second}
                  </Box>
                </MotionTypography>

                {/* Description */}
                <MotionTypography
                  variant="h6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  sx={{
                    color: '#ccc',
                    maxWidth: '600px',
                    mb: 4,
                    lineHeight: 1.6,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                  }}
                >
                  {description}
                </MotionTypography>

                {/* Action Buttons */}
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={3} 
                  sx={{ mb: 6 }}
                >
                  <MotionButton
                    variant="contained"
                    size="large"
                    startIcon={<PlayArrow />}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 10px 30px rgba(0,255,247,0.4)',
                      rotateY: 5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    sx={{
                      background: 'linear-gradient(135deg, #00fff7, #00b8d4)',
                      color: '#000',
                      fontWeight: 700,
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      borderRadius: '50px',
                      textTransform: 'none',
                      minWidth: '200px',
                    }}
                  >
                    {buttons.primary.text}
                  </MotionButton>

                  <MotionButton
                    variant="outlined"
                    size="large"
                    startIcon={<Group />}
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: '#00fff7',
                      backgroundColor: 'rgba(0,255,247,0.1)',
                      rotateY: -5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    sx={{
                      borderColor: 'rgba(255,255,255,0.3)',
                      color: '#fff',
                      fontWeight: 600,
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      borderRadius: '50px',
                      textTransform: 'none',
                      minWidth: '200px',
                      borderWidth: '2px',
                      '&:hover': {
                        borderWidth: '2px',
                      },
                    }}
                  >
                    {buttons.secondary.text}
                  </MotionButton>
                </Stack>


              </MotionBox>
            </Grid>

            {/* Right Content - Hero Image */}
            <Grid item xs={12} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <MotionBox
                initial={{ x: 100, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                sx={{ position: 'relative' }}
              >
                {/* Floating UI Elements */}
                {floatingElements.map((element) => (
                  <FloatingUIElement
                    key={element.id}
                    text={element.text}
                    icon={element.icon}
                    delay={element.delay}
                    position={element.position}
                  />
                ))}

                {/* Orbiting Elements */}
                <Box sx={{ position: 'relative' }}>
                  {orbitingElements.map((element) => (
                    <OrbitingElement 
                      key={element.id}
                      size={element.size} 
                      color={element.color} 
                      duration={element.duration} 
                      radius={element.radius} 
                      delay={element.delay} 
                    />
                  ))}
                </Box>

                {/* Main Hero Image with Animated Border */}
                <AnimatedBorder>
                  <MotionBox
                    component="img"
                    src={heroImage}
                    alt="Gaming Setup"
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: 2,
                      rotateX: 2,
                    }}
                    transition={{ duration: 0.4 }}
                    sx={{
                      width: '100%',
                      maxWidth: '600px',
                      height: 'auto',
                      display: 'block',
                      filter: 'brightness(1.1) contrast(1.2) saturate(1.2)',
                      boxShadow: `
                        0 25px 50px rgba(0,0,0,0.8),
                        0 0 100px rgba(0,255,247,0.3),
                        inset 0 0 50px rgba(0,255,247,0.1)
                      `,
                    }}
                  />
                </AnimatedBorder>
              </MotionBox>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;