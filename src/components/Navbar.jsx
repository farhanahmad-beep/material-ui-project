// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useTheme,
  useMediaQuery,
  Avatar,
  Tooltip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  SportsEsports as SportsEsportsIcon,
  Close as CloseIcon,
  AccountCircle as AccountIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';

// Styled components for enhanced UI
const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  background: scrolled
    ? 'rgba(15, 15, 35, 0.95)'
    : 'linear-gradient(135deg, rgba(15, 15, 35, 0.98) 0%, rgba(25, 25, 65, 0.95) 100%)',
  backdropFilter: 'blur(20px)',
  borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
  boxShadow: scrolled
    ? '0 8px 32px rgba(0, 0, 0, 0.3)'
    : '0 4px 20px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  fontWeight: 600,
  fontSize: '0.95rem',
  textTransform: 'none',
  padding: '8px 20px',
  borderRadius: '25px',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
    transition: 'left 0.6s',
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
    '&::before': {
      left: '100%',
    },
  },
}));

const LogoContainer = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '4px 12px',
  borderRadius: '15px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'scale(1.05)',
  },
}));

const GlowIcon = styled(SportsEsportsIcon)(({ theme }) => ({
  marginRight: '12px',
  fontSize: '2rem',
  background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
  backgroundSize: '200% 200%',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: 'gradientShift 3s ease infinite',
  filter: 'drop-shadow(0 0 10px rgba(78, 205, 196, 0.3))',
  '@keyframes gradientShift': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 280,
    background: 'linear-gradient(180deg, rgba(15, 15, 35, 0.98) 0%, rgba(25, 25, 65, 0.95) 100%)',
    backdropFilter: 'blur(20px)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
  },
}));

const ActionButton = styled(IconButton)(({ theme }) => ({
  color: '#ffffff',
  padding: '10px',
  margin: '0 4px',
  borderRadius: '50%',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'scale(1.1)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  },
}));

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Games', href: '#games' },
    { name: 'Tournaments', href: '#tournaments' },
    { name: 'Store', href: '#store' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  const drawerVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  return (
    <>
      <StyledAppBar
        position="fixed"
        elevation={0}
        scrolled={scrolled}
        component={motion.div}
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo Section */}
            <LogoContainer
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  fontSize: '1.8rem',
                    background: 'linear-gradient(135deg, #fff 30%, #00fff7 70%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '0.5px',
                }}
              >
                NEXUS ARENA
              </Typography>
            </LogoContainer>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <StyledButton href={link.href}>
                    {link.name}
                  </StyledButton>
                </motion.div>
              ))}
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/* Profile - Desktop Only */}
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Tooltip title="Profile">
                    <ActionButton>
                      <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                        <AccountIcon />
                      </Avatar>
                    </ActionButton>
                  </Tooltip>
                </motion.div>
              </Box>

              {/* Mobile Menu Button */}
              <Box sx={{ display: { xs: 'block', md: 'none' }, ml: 1 }}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ActionButton onClick={toggleDrawer(true)}>
                    <MenuIcon />
                  </ActionButton>
                </motion.div>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <StyledDrawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            component={motion.div}
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
                Menu
              </Typography>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <ActionButton onClick={toggleDrawer(false)}>
                  <CloseIcon />
                </ActionButton>
              </motion.div>
            </Box>
            
            <List sx={{ pt: 0 }}>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  custom={index}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ListItem
                    button
                    onClick={toggleDrawer(false)}
                    sx={{
                      py: 2,
                      px: 3,
                      margin: '4px 16px',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateX(8px)',
                      },
                    }}
                  >
                    <ListItemText
                      primary={link.name}
                      sx={{
                        '& .MuiTypography-root': {
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '1.1rem',
                        },
                      }}
                    />
                  </ListItem>
                </motion.div>
              ))}
              
              {/* Profile in Mobile Menu */}
              <motion.div
                custom={navLinks.length}
                variants={mobileItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                <ListItem
                  button
                  onClick={toggleDrawer(false)}
                  sx={{
                    py: 2,
                    px: 3,
                    margin: '4px 16px',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    mt: 2,
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateX(8px)',
                    },
                  }}
                >
                  <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main', mr: 2 }}>
                    <AccountIcon />
                  </Avatar>
                  <ListItemText
                    primary="Profile"
                    sx={{
                      '& .MuiTypography-root': {
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                      },
                    }}
                  />
                </ListItem>
              </motion.div>
            </List>

          </StyledDrawer>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;