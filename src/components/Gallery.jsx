import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaTimes, FaExpand, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FloatingBubbles, AmoebaBlob } from './AnimatedShapes';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, title: 'Corporate Gift Set', category: 'Corporate', color: 'from-blue-400 to-indigo-500', image: '/images/gallery/1.jpg' },
    { id: 2, title: 'Wedding Return Gifts', category: 'Wedding', color: 'from-pink-400 to-rose-500' },
    { id: 3, title: 'Custom T-Shirts', category: 'Apparel', color: 'from-purple-400 to-violet-500' },
    { id: 4, title: 'Premium Hampers', category: 'Hampers', color: 'from-amber-400 to-orange-500' },
    { id: 5, title: 'School Event Gifts', category: 'Academic', color: 'from-green-400 to-emerald-500', image: '/images/gallery/5.jpg' },
    { id: 6, title: 'Branded Stationery', category: 'Stationery', color: 'from-cyan-400 to-teal-500' },
    { id: 7, title: 'Executive Gift Box', category: 'Corporate', color: 'from-slate-400 to-gray-600' },
    { id: 8, title: 'Festival Special', category: 'Festival', color: 'from-red-400 to-rose-500' },
    { id: 9, title: 'Custom Drinkware', category: 'Drinkware', color: 'from-sky-400 to-blue-500', image: '/images/gallery/9.jpg' },
    { id: 10, title: 'Tech Accessories', category: 'Tech', color: 'from-violet-400 to-purple-500', image: '/images/gallery/10.jpg' },
    { id: 11, title: 'Eco-Friendly Gifts', category: 'Eco', color: 'from-lime-400 to-green-500' },
    { id: 12, title: 'Luxury Gift Sets', category: 'Premium', color: 'from-yellow-400 to-amber-500' },
  ];

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="relative py-24 bg-gray-50 overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <FloatingBubbles count={10} color="secondary" />
      <AmoebaBlob className="-top-32 -left-32" color="#1d3557" size={400} duration={30} />
      <AmoebaBlob className="-bottom-32 -right-32" color="#e63946" size={350} duration={25} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-full text-sm mb-4"
          >
            Visual Showcase
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our stunning collection of customized gifts and branded products.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              onClick={() => openLightbox(index)}
            >
              <div className={`${index === 0 || index === 5 ? 'h-80 md:h-full' : 'h-48 md:h-56'} bg-gradient-to-br ${image.color} relative overflow-hidden`}>
                {/* Animated Background Shapes */}
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full"
                  animate={{ scale: [1.2, 1, 1.2] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />

                <div className="w-full h-full flex items-center justify-center">
                  <motion.div
                    className="text-center p-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-16 h-16 mx-auto bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3">
                      <FaExpand className="text-2xl text-white" />
                    </div>
                    <p className="text-white font-semibold text-shadow">{image.title}</p>
                  </motion.div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-primary/80 text-white text-xs font-medium rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                </div>
                <motion.div
                  className="absolute top-4 right-4 p-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"
                  whileHover={{ rotate: 90 }}
                >
                  <FaExpand className="text-primary" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Full Catalog
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,80 C240,40 480,100 720,60 C960,20 1200,80 1440,40 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-primary transition-all"
            onClick={closeLightbox}
          >
            <FaTimes className="text-2xl" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute left-6 p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-primary transition-all"
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
          >
            <FaChevronLeft className="text-2xl" />
          </motion.button>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`max-w-4xl w-full bg-gradient-to-br ${galleryImages[selectedImage].color} rounded-3xl overflow-hidden shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated Background */}
            <div className="relative h-96 md:h-[500px]">
              <motion.div
                className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/10 rounded-full"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 15, repeat: Infinity }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring' }}
                    className="w-24 h-24 mx-auto bg-white/30 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6"
                  >
                    <FaExpand className="text-4xl text-white" />
                  </motion.div>
                  <h3 className="text-white text-3xl font-bold mb-2">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full font-medium">
                    {galleryImages[selectedImage].category}
                  </span>
                  <p className="text-white/70 mt-6 text-sm">
                    Add image: /public/images/gallery/{selectedImage + 1}.jpg
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-primary transition-all"
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
          >
            <FaChevronRight className="text-2xl" />
          </motion.button>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                className={`w-3 h-3 rounded-full transition-all ${index === selectedImage ? 'bg-primary w-8' : 'bg-white/30 hover:bg-white/50'
                  }`}
                onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
