import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Avatar, 
  Rating,
  Container,
  Grid,
  Chip,
  alpha,
  useTheme, TextField
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Play, Star } from 'lucide-react';
import {
  selectTestimonials,
  selectCurrentIndex,
  selectCurrentTestimonial,
  selectIsAutoPlaying,
  selectAutoPlayInterval,
  setCurrentIndex,
  nextTestimonial
} from '../store/slices/testimonialsSlice';

const NexusGamingTestimonials = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  
  // Redux selectors
  const testimonials = useSelector(selectTestimonials);
  const currentIndex = useSelector(selectCurrentIndex);
  const currentTestimonial = useSelector(selectCurrentTestimonial);
  const isAutoPlaying = useSelector(selectIsAutoPlaying);
  const autoPlayInterval = useSelector(selectAutoPlayInterval);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      dispatch(nextTestimonial());
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [dispatch, isAutoPlaying, autoPlayInterval]);

  const handleNavigationClick = (index) => {
    dispatch(setCurrentIndex(index));
  };
  

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `
          radial-gradient(ellipse at top, rgba(0, 255, 136, 0.05) 0%, transparent 60%),
          radial-gradient(ellipse at bottom, rgba(139, 92, 246, 0.05) 0%, transparent 60%),
          linear-gradient(180deg, #0a0a0a 0%, #111827 50%, #0f172a 100%)
        `,
        position: 'relative',
        overflow: 'hidden',
        py: 8
      }}
    >
      {/* Animated Background Grid */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.4,
          animation: 'pulse 4s ease-in-out infinite'
        }}
      />

      {/* Floating Orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${['#00ff88', '#ff6b35', '#8b5cf6'][i]}15 0%, transparent 70%)`,
            filter: 'blur(40px)',
            left: `${20 + i * 30}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <Container maxWidth="xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Box textAlign="center" mb={8}>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', md: '4.5rem' },
                  fontWeight: 900,
                  background: 'linear-gradient(45deg, #00ff88, #06b6d4, #8b5cf6, #ff6b35)',
                  backgroundSize: '400% 400%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  mb: 3,
                  textShadow: '0 0 60px rgba(0, 255, 136, 0.3)',
                  animation: 'gradient 3s ease infinite',
                  '@keyframes gradient': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' }
                  }
                }}
              >
                NEXUS GAMING
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  mb: 2,
                  textShadow: '0 2px 20px rgba(0,0,0,0.5)',
                  fontSize: { xs: '1.8rem', md: '2.5rem' }
                }}
              >
                Elite Gamers Love Us
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: alpha('#FFFFFF', 0.7),
                  maxWidth: 600,
                  mx: 'auto',
                  fontSize: '1.1rem',
                  lineHeight: 1.6
                }}
              >
                Experience next-generation cloud gaming with zero compromise
              </Typography>
            </motion.div>
          </Box>
        </motion.div>

        {/* Main Testimonial Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Box sx={{ position: 'relative', height:{xs: 'auto', sm: '450px'}, mb: 6, perspective: '1000px', minHeight: '360px'}}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ 
                  rotateY: 90, 
                  opacity: 0, 
                  scale: 0.8,
                  x: 300
                }}
                animate={{ 
                  rotateY: 0, 
                  opacity: 1, 
                  scale: 1,
                  x: 0
                }}
                exit={{ 
                  rotateY: -90, 
                  opacity: 0, 
                  scale: 0.8,
                  x: -300
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 20,
                  duration: 0.8
                }}
                style={{ position: 'absolute', width: '100%', height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: `
                      linear-gradient(135deg, 
                        ${alpha(currentTestimonial.bgColor, 0.15)} 0%,
                        ${alpha(currentTestimonial.accent, 0.1)} 50%,
                        ${alpha('#000000', 0.3)} 100%
                      )
                    `,
                    backdropFilter: 'blur(30px)',
                    border: `3px solid ${alpha(currentTestimonial.bgColor, 0.3)}`,
                    borderRadius: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: `
                      0 25px 50px ${alpha(currentTestimonial.bgColor, 0.3)},
                      inset 0 1px 0 ${alpha('#FFFFFF', 0.1)}
                    `,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(45deg, ${alpha(currentTestimonial.bgColor, 0.05)}, transparent, ${alpha(currentTestimonial.accent, 0.05)})`,
                      pointerEvents: 'none'
                    }
                  }}
                >
                  {/* Floating Quote Icon */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, 0], 
                      scale: [1, 1.1, 1] 
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    style={{
                      position: 'absolute',
                      top: '30px',
                      right: '30px',
                      zIndex: 1
                    }}
                  >
                    <Quote
                      size={60}
                      style={{
                        color: alpha(currentTestimonial.bgColor, 0.4),
                        filter: `drop-shadow(0 0 20px ${currentTestimonial.bgColor}40)`
                      }}
                    />
                  </motion.div>

                  <CardContent sx={{ 
                    height: '100%', 
                    width: '100%',
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    p: 6,
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <Box display="flex" alignItems="center" mb={4}>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring" }}
                      >
                        <Avatar
                          src={currentTestimonial.avatar}
                          sx={{
                            display:{xs: 'none', sm: 'flex'},
                            width: 90,
                            height: 90,
                            mr: 4,
                            border: `4px solid ${currentTestimonial.bgColor}`,
                            boxShadow: `
                              0 0 30px ${alpha(currentTestimonial.bgColor, 0.6)},
                              inset 0 0 20px ${alpha('#000000', 0.2)}
                            `,
                            fontSize: '24px',
                            fontWeight: 'bold'
                          }}
                        >
                          {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                        </Avatar>
                      </motion.div>
                      
                      <Box>
                        <Typography
                          variant="h4"
                          sx={{
                            color: 'white',
                            fontWeight: 800,
                            mb: 1,
                            textShadow: `0 2px 20px ${currentTestimonial.bgColor}40`
                          }}
                        >
                          {currentTestimonial.name}
                        </Typography>
                        
                        <Typography
                          variant="h6"
                          sx={{
                            color: currentTestimonial.bgColor,
                            mb: 2,
                            pr: 10,
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                          }}
                        >
                          {currentTestimonial.role}
                        </Typography>

                        <Box display="flex" alignItems="center" gap={2} mb={2}>
                          <Rating
                            value={currentTestimonial.rating}
                            readOnly
                            sx={{
                              '& .MuiRating-iconFilled': {
                                color: currentTestimonial.bgColor,
                                filter: `drop-shadow(0 0 10px ${currentTestimonial.bgColor})`
                              }
                            }}
                          />
                        </Box>
                        <Box display="flex" gap={2}>
                          <Chip
                            icon={<Play size={16} />}
                            label={currentTestimonial.game}
                            sx={{
                              bgcolor: alpha(currentTestimonial.bgColor, 0.2),
                              color: 'white',
                              fontWeight: 700,
                              border: `1px solid ${alpha(currentTestimonial.bgColor, 0.4)}`,
                              '& .MuiChip-icon': {
                                color: currentTestimonial.bgColor
                              }
                            }}
                          />
                          <Chip
                            icon={<Star size={16} />}
                            label="Verified Player"
                            sx={{
                              bgcolor: alpha(currentTestimonial.accent, 0.2),
                              color: 'white',
                              fontWeight: 700,
                              border: `1px solid ${alpha(currentTestimonial.accent, 0.4)}`,
                              '& .MuiChip-icon': {
                                color: currentTestimonial.accent
                              }
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        color: 'white',
                        fontStyle: 'italic',
                        lineHeight: 1.7,
                        textAlign: 'center',
                        fontSize: 'clamp(0.7rem, 0.9rem, 1.1rem)',
                        fontWeight: 500,
                        pr: 11,
                        pb: 10,
                        textShadow: '0 2px 10px rgba(0,0,0,0.7)',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          bottom: '-10px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '100px',
                          height: '2px',
                          background: `linear-gradient(90deg, transparent, ${currentTestimonial.bgColor}, transparent)`
                        }
                      }}
                    >
                      "{currentTestimonial.text}"
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </Box>
        </motion.div>

        {/* Enhanced Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Box display="flex" justifyContent="center" gap={3} mb={8}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Box
                  onClick={() => handleNavigationClick(index)}
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    bgcolor: index === currentIndex ? testimonials[currentIndex].bgColor : alpha('#FFFFFF', 0.3),
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: `2px solid ${index === currentIndex ? testimonials[currentIndex].bgColor : 'transparent'}`,
                    boxShadow: index === currentIndex ? `0 0 20px ${testimonials[currentIndex].bgColor}` : 'none',
                    position: 'relative',
                    '&::after': index === currentIndex ? {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      bgcolor: 'white',
                      boxShadow: `0 0 10px ${testimonials[currentIndex].bgColor}`
                    } : {},
                    '&:hover': {
                      bgcolor: index === currentIndex ? testimonials[currentIndex].bgColor : alpha('#FFFFFF', 0.7),
                      boxShadow: `0 0 15px ${index === currentIndex ? testimonials[currentIndex].bgColor : alpha('#FFFFFF', 0.5)}`
                    }
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Compact Additional Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              color: 'white', 
              textAlign: 'center', 
              mb: 5, 
              fontWeight: 700,
              textShadow: '0 2px 20px rgba(0,0,0,0.5)'
            }}
          >
            Join The Gaming Revolution
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Grid item xs={12} md={4} key={testimonial.id}>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 1.4, duration: 0.6 }}
                  whileHover={{ y: -15, scale: 1.03 }}
                >
                  <Card
                    sx={{
                      height: '300px',
                      background: `linear-gradient(135deg, 
                        ${alpha(testimonial.bgColor, 0.08)} 0%,
                        ${alpha('#FFFFFF', 0.02)} 100%
                      )`,
                      backdropFilter: 'blur(20px)',
                      border: `1px solid ${alpha(testimonial.bgColor, 0.2)}`,
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        border: `1px solid ${alpha(testimonial.bgColor, 0.4)}`,
                        boxShadow: `0 15px 35px ${alpha(testimonial.bgColor, 0.2)}`
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Box display="flex" alignItems="center" mb={3}>
                        <Avatar 
                          src={testimonial.avatar}
                          sx={{ 
                            bgcolor: testimonial.bgColor, 
                            mr: 2, 
                            width: 55, 
                            height: 55,
                            border: `2px solid ${alpha(testimonial.bgColor, 0.3)}`
                          }}
                        >
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </Avatar>
                        <Box>
                          <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: testimonial.bgColor, fontWeight: 600 }}>
                            {testimonial.role}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Rating value={testimonial.rating} readOnly size="small" sx={{ mb: 2 }} />
                      
                      <Typography
                        variant="body2"
                        sx={{
                          color: alpha('#FFFFFF', 0.85),
                          flexGrow: 1,
                          fontStyle: 'italic',
                          lineHeight: 1.6,
                          fontSize: '0.95rem'
                        }}
                      >
                        "{testimonial.text.substring(0, 120)}..."
                      </Typography>
                      
                      <Chip
                        label={testimonial.game}
                        size="small"
                        sx={{
                          alignSelf: 'flex-start',
                          mt: 2,
                          bgcolor: alpha(testimonial.bgColor, 0.2),
                          color: 'white',
                          fontWeight: 600,
                          border: `1px solid ${alpha(testimonial.bgColor, 0.3)}`
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default NexusGamingTestimonials;