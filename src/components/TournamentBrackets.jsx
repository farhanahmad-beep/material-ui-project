import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Avatar,
  Stack,
  Rating,
  Divider,
} from "@mui/material";
import {
  PlayArrow,
  Star,
  TrendingUp,
  SportsEsports,
  People,
  EmojiEvents,
  FlashOn,
  MyLocation,
  Extension,
} from "@mui/icons-material";

const NexusArenaSection = () => {
  const gameCategories = [
    {
      id: 3,
      title: "FPS Showdown",
      description:
        "Fast-paced first-person shooter tournaments with epic prize pools",
      image:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=250&fit=crop",
      players: "15.8K",
      rating: 4.9,
      trending: true,
      icon: <FlashOn />,
      color: "#FF1744",
      gradient: "linear-gradient(135deg, #FF1744 0%, #FF5722 100%)",
    },
    {
      id: 4,
      title: "Strategy Zone",
      description:
        "Tactical gameplay that tests your strategic mind and decision making",
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=250&fit=crop",
      players: "6.1K",
      rating: 4.7,
      trending: false,
      icon: <Extension />,
      color: "#00E676",
      gradient: "linear-gradient(135deg, #00E676 0%, #00C853 100%)",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Simplified Background Animations (like hero component)
  const AnimatedBackgroundShapes = () => (
    <>
      {/* Floating Cubes - Simple and Clean */}
      {[...Array(4)].map((_, i) => (
        <Box
          key={`cube-${i}`}
          component={motion.div}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            rotateX: [0, 360],
            rotateY: [0, 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          sx={{
            position: "absolute",
            width: { xs: 40, md: 60 },
            height: { xs: 40, md: 60 },
            left: `${10 + i * 20}%`,
            top: `${15 + (i % 2) * 40}%`,
            background: "linear-gradient(45deg, #00fff7, #ff0080, #8000ff)",
            borderRadius: "12px",
            opacity: 0.1,
            zIndex: 0,
          }}
        />
      ))}

      {/* Glowing Orbs */}
      {[...Array(3)].map((_, i) => (
        <Box
          key={`glow-${i}`}
          component={motion.div}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          sx={{
            position: "absolute",
            width: { xs: 80, md: 120 },
            height: { xs: 80, md: 120 },
            left: `${20 + i * 30}%`,
            top: `${10 + i * 25}%`,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,255,247,0.4) 0%, rgba(255,0,128,0.2) 50%, transparent 100%)",
            filter: "blur(20px)",
            zIndex: 0,
          }}
        />
      ))}

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <Box
          key={`particle-${i}`}
          component={motion.div}
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
          sx={{
            position: "absolute",
            width: 4,
            height: 4,
            backgroundColor: "#00fff7",
            borderRadius: "50%",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            zIndex: 0,
          }}
        />
      ))}

      {/* Orbiting Elements */}
      <Box
        component={motion.div}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        sx={{
          position: "absolute",
          top: "20%",
          right: "20%",
          width: { xs: 200, md: 300 },
          height: { xs: 200, md: 300 },
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 20,
            height: 20,
            background: "linear-gradient(135deg, #00fff7, #00b8d4)",
            borderRadius: "50%",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </Box>
    </>
  );

  return (
    <Box
      component={motion.div}
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Shapes */}
      <AnimatedBackgroundShapes />

      {/* Original Animated Background Orbs */}
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: { xs: 200, md: 400 },
          height: { xs: 200, md: 400 },
          background:
            "radial-gradient(circle, rgba(123,104,238,0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Box
        component={motion.div}
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: { xs: 150, md: 300 },
          height: { xs: 150, md: 300 },
          background:
            "radial-gradient(circle, rgba(255,107,53,0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          textAlign="center"
          mb={8}
        >
          <Typography
            variant="h2"
            component={motion.h2}
            sx={{
              fontWeight: 900,
              background: "linear-gradient(135deg, #fff 30%, #00fff7 70%)",
              backgroundSize: "300% 300%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              mb: 3,
              fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
              letterSpacing: "-0.02em",
              textShadow: "0 0 30px rgba(0,255,247,0.5)",
            }}
          >
            NEXUS ARENA
          </Typography>
        </Box>

        {/* Game Categories Grid - Centered */}
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4} justifyContent="center">
            {gameCategories.map((category, index) => (
              <Grid item xs={12} sm={8} md={5} lg={4} key={category.id}>
                <Card
                  component={motion.div}
                  variants={cardVariants}
                  whileHover={{
                    y: -12,
                    scale: 1.03,

                  }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    height: "100%",
                    background: "rgba(255,255,255,0.02)",
                    backdropFilter: "blur(30px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 5,
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 6,
                      background: category.gradient,
                      zIndex: 1,
                    },
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="220"
                      image={category.image}
                      alt={category.title}
                      sx={{
                        filter: "brightness(0.8) contrast(1.1)",
                        transition: "all 0.4s ease",
                      }}
                    />

                    {category.trending && (
                      <Chip
                        icon={<TrendingUp />}
                        label="TRENDING"
                        component={motion.div}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          background: "rgba(255,107,53,0.95)",
                          color: "white",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          backdropFilter: "blur(10px)",
                          boxShadow: "0 8px 25px rgba(255,107,53,0.4)",
                        }}
                      />
                    )}

                    <Avatar
                      sx={{
                        position: "absolute",
                        bottom: -25,
                        right: 20,
                        width: 50,
                        height: 50,
                        background: category.gradient,
                        color: "white",
                        boxShadow: `0 8px 30px rgba(0,0,0,0.4)`,
                        zIndex: 2,
                      }}
                    >
                      {category.icon}
                    </Avatar>
                  </Box>

                  <CardContent sx={{ p: 3, pt: 2.5 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        fontWeight: 700,
                        mb: 1.5,
                        fontSize: "1.4rem",
                      }}
                    >
                      {category.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255,255,255,0.75)",
                        lineHeight: 1.6,
                        mb: 3,
                        height: "3em",
                        overflow: "hidden",
                      }}
                    >
                      {category.description}
                    </Typography>

                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={3}
                    >
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <People
                          sx={{ fontSize: 18, color: "rgba(255,255,255,0.6)" }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: "rgba(255,255,255,0.9)",
                            fontWeight: 600,
                          }}
                        >
                          {category.players}
                        </Typography>
                      </Stack>

                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <Rating
                          value={category.rating}
                          precision={0.1}
                          readOnly
                          size="small"
                          sx={{
                            "& .MuiRating-iconFilled": {
                              color: "#FFD700",
                            },
                            "& .MuiRating-iconEmpty": {
                              color: "rgba(255,255,255,0.3)",
                            },
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: "rgba(255,255,255,0.9)",
                            fontWeight: 600,
                            ml: 1,
                          }}
                        >
                          {category.rating}
                        </Typography>
                      </Stack>
                    </Stack>

                    <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)", mb: 3 }} />

                    <Button
                      component={motion.button}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      fullWidth
                      variant="contained"
                      startIcon={<PlayArrow />}
                      sx={{
                        background: category.gradient,
                        color: "white",
                        fontWeight: 700,
                        py: 1.5,
                        borderRadius: 3,
                        textTransform: "none",
                        fontSize: "1rem",
                        boxShadow: `0 8px 25px rgba(${
                          category.color === "#FF1744"
                            ? "255,23,68"
                            : "0,230,118"
                        }, 0.4)`,
                        "&:hover": {
                          background: category.gradient,
                          boxShadow: `0 12px 35px rgba(${
                            category.color === "#FF1744"
                              ? "255,23,68"
                              : "0,230,118"
                          }, 0.6)`,
                        },
                      }}
                    >
                      Enter Arena
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          textAlign="center"
          mt={10}
        >
          <Button
            component={motion.button}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0,255,247,0.4)",
              rotateY: 5,
            }}
            whileTap={{ scale: 0.95 }}
            variant="contained"
            size="large"
            startIcon={<SportsEsports />}
            sx={{
              background: "linear-gradient(135deg, #00fff7, #00b8d4)",
              color: "#000",
              fontWeight: 700,
              px: 6,
              py: 2,
              borderRadius: "50px",
              textTransform: "none",
              fontSize: "1.2rem",
              minWidth: "250px",
            }}
          >
            Join Nexus Arena Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NexusArenaSection;