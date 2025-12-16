import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaArrowRight, FaGift, FaHeart, FaStar, FaPlay } from 'react-icons/fa';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Premium Corporate',
      highlight: 'Gifting',
      subtitle: 'Elevate Your Brand with Custom Gifts',
      description: 'Make lasting impressions with personalized corporate gifts that reflect your brand excellence.',
      icon: <FaGift />,
      color: 'from-primary via-rose-500 to-orange-400',
      bgColor: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
    },
    {
      title: 'Wedding Return',
      highlight: 'Gifts',
      subtitle: 'Celebrate Love with Elegant Gifts',
      description: 'Create beautiful memories with our exquisite collection of wedding return gifts.',
      icon: <FaHeart />,
      color: 'from-pink-400 via-rose-400 to-red-400',
      bgColor: 'bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900',
    },
    {
      title: 'School & College',
      highlight: 'Events',
      subtitle: 'Customized Academic Gifts',
      description: 'Perfect gifts for graduations, annual days, and academic achievements.',
      icon: <FaStar />,
      color: 'from-blue-400 via-cyan-400 to-teal-400',
      bgColor: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentData = slides[currentSlide];

  return (
    <section id="home" className={`relative min-h-screen overflow-hidden transition-all duration-1000 ${currentData.bgColor}`}>
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Amoeba Blob 1 */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ background: `linear-gradient(135deg, ${currentSlide === 0 ? '#e63946' : currentSlide === 1 ? '#ec4899' : '#3b82f6'}, transparent)` }}
        />

        {/* Large Amoeba Blob 2 */}
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0],
            borderRadius: ['70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%'],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ background: `linear-gradient(135deg, #f4a261, transparent)` }}
        />

        {/* Floating Bubbles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Animated Circles */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 border border-white/10 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-white/10 rounded-full"
          animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-4 h-4 bg-primary rounded-full blur-sm"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-accent rounded-full blur-sm"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1.5, 1, 1.5],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Curved Bottom Shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#f9fafb"
            d="M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <motion.div
                key={currentSlide + 'badge'}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium">{currentData.subtitle}</span>
              </motion.div>

              <motion.h1
                key={currentSlide + 'title'}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                {currentData.title}
                <br />
                <span className={`bg-gradient-to-r ${currentData.color} bg-clip-text text-transparent`}>
                  {currentData.highlight}
                </span>
              </motion.h1>

              <motion.p
                key={currentSlide + 'desc'}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg"
              >
                {currentData.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#services"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <FaPlay className="text-sm" />
                  Get Free Quote
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-8 mt-12"
              >
                {[
                  { number: '500+', label: 'Happy Clients' },
                  { number: '10K+', label: 'Gifts Delivered' },
                  { number: '10+', label: 'Years Experience' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${currentData.color} bg-clip-text text-transparent`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Animated Gift Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              {/* Main Floating Element */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Glowing Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${currentData.color} blur-3xl opacity-30 rounded-full scale-75`} />

                {/* Gift Box Container */}
                <div className="relative w-80 h-80 mx-auto">
                  {/* Animated Ring 1 */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                  {/* Animated Ring 2 */}
                  <motion.div
                    className="absolute inset-4 border border-white/10 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  />
                  {/* Animated Ring 3 */}
                  <motion.div
                    className="absolute inset-8 border border-dashed border-white/10 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  />

                  {/* Center Icon */}
                  <motion.div
                    key={currentSlide + 'icon'}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className={`w-32 h-32 bg-gradient-to-br ${currentData.color} rounded-3xl flex items-center justify-center text-white text-5xl shadow-2xl transform rotate-12`}>
                      {currentData.icon}
                    </div>
                  </motion.div>

                  {/* Floating Small Elements */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-4 h-4 bg-gradient-to-r ${currentData.color} rounded-full`}
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? `w-8 bg-gradient-to-r ${slides[index].color}`
                : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
