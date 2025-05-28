// components/NexusFooter.jsx
import React from 'react';
import { Box, Typography, Grid, IconButton, Link, Divider, Button } from '@mui/material';
import { Twitter, YouTube, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const footerVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
  },
};

const NexusFooter = () => {
  return (
    <MotionBox
      component="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      sx={{
        background: 'linear-gradient(to right, #0f0f0f, #1a1a1a)',
        color: '#ffffff',
        px: { xs: 4, md: 12 },
        py: 6,
        mt: 10,
        borderTop: '2px solid #00f0ff30',
      }}
    >
      {/* Top Section */}
      <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
        {/* Brand */}
        <Grid item xs={12} md={4}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: '#00f0ff' }}>
            NEXUS
          </Typography>
          <Typography variant="subtitle2" color="gray" sx={{ mt: 1 }}>
            Forge your legend in the world of competitive gaming.
          </Typography>

          {/* Call to Action */}
          <MotionButton
            variant="outlined"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              mt: 3,
              borderColor: '#00f0ff',
              color: '#00f0ff',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              '&:hover': {
                backgroundColor: '#00f0ff20',
              },
            }}
          >
            Join the Battle
          </MotionButton>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" gutterBottom sx={{ color: '#00f0ff' }}>
            Explore
          </Typography>
          {['Home', 'Tournaments', 'Teams', 'Rankings', 'Store'].map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              underline="none"
              sx={{
                display: 'block',
                mb: 1,
                color: 'gray',
                '&:hover': { color: '#00f0ff' },
              }}
            >
              {link}
            </Link>
          ))}
        </Grid>

        {/* Socials */}
        <Grid item xs={6} md={3}>
          <Typography variant="h6" gutterBottom sx={{ color: '#00f0ff' }}>
            Connect
          </Typography>
          <Box>
            {[{ icon: <Twitter />, href: '#' },
              { icon: <YouTube />, href: '#' },
              { icon: <GitHub />, href: '#' }].map(({ icon, href }, index) => (
              <IconButton
                key={index}
                component={motion.a}
                href={href}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.95 }}
                sx={{ color: '#ffffff', mr: 1 }}
              >
                {icon}
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 4, borderColor: '#00f0ff30' }} />

      {/* Bottom Bar */}
      <Typography variant="body2" align="center" color="gray">
        © {new Date().getFullYear()} Nexus Gaming. All rights reserved. Power up. Play hard.
      </Typography>
    </MotionBox>
  );
};

export default NexusFooter;
