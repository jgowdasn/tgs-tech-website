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
    { id: 1, title: 'Artisan Hamper', category: 'Premium', image: '/images/gallery/gallery-1.webp' },
    { id: 2, title: 'Celebration Hamper', category: 'Festival', image: '/images/gallery/gallery-2.webp' },
    { id: 3, title: 'Grande Hamper', category: 'Premium', image: '/images/gallery/gallery-3.webp' },
    { id: 4, title: 'Signature Hamper', category: 'Corporate', image: '/images/gallery/gallery-4.webp' },
    { id: 5, title: 'The Chic Box', category: 'Hampers', image: '/images/gallery/gallery-5.webp' },
    { id: 6, title: 'The Bamboo Basket', category: 'Eco', image: '/images/gallery/gallery-6.webp' },
    { id: 7, title: 'Classic Gift Hamper', category: 'Corporate', image: '/images/gallery/gallery-7.webp' },
    { id: 8, title: 'Festive Gift Box', category: 'Festival', image: '/images/gallery/gallery-8.webp' },
    { id: 9, title: 'Duplex Hamper', category: 'Premium', image: '/images/gallery/gallery-9.webp' },
    { id: 10, title: 'Wicker Basket', category: 'Hampers', image: '/images/gallery/gallery-10.webp' },
    { id: 11, title: 'Something Copper', category: 'Premium', image: '/images/gallery/gallery-11.webp' },
    { id: 12, title: 'The Keepsake', category: 'Corporate', image: '/images/gallery/gallery-12.webp' },
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
              <div className={`${index === 0 || index === 5 ? 'h-80 md:h-full' : 'h-48 md:h-56'} relative overflow-hidden bg-gray-100`}>
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
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
            className="max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={galleryImages[selectedImage].image}
                alt={galleryImages[selectedImage].title}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold">
                  {galleryImages[selectedImage].title}
                </h3>
                <span className="inline-block mt-2 px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                  {galleryImages[selectedImage].category}
                </span>
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
