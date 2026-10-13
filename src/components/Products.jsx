import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FloatingBubbles, AmoebaBlob, GlowingOrbs } from './AnimatedShapes';

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: '✨' },
    { id: 'hampers', name: 'Gift Hampers', icon: '🎁' },
    { id: 'boxes', name: 'Gift Boxes', icon: '📦' },
    { id: 'baskets', name: 'Baskets', icon: '🧺' },
    { id: 'premium', name: 'Premium', icon: '⭐' },
  ];

  const products = [
    {
      id: 1,
      name: 'The Goodness Box',
      category: 'boxes',
      description: 'Curated box with premium dry fruits and chocolates',
      badge: 'Best Seller',
      image: '/images/products/product-1.webp',
    },
    {
      id: 2,
      name: 'Copper Touch Hamper',
      category: 'premium',
      description: 'Elegant hamper with copper accents and gourmet treats',
      badge: 'Premium',
      image: '/images/products/product-2.webp',
    },
    {
      id: 3,
      name: 'The Kraft Gift Bag',
      category: 'hampers',
      description: 'Eco-friendly kraft bag filled with festive goodies',
      badge: null,
      image: '/images/products/product-3.webp',
    },
    {
      id: 4,
      name: 'Mini Red Box',
      category: 'boxes',
      description: 'Compact gift box perfect for personal gifting',
      badge: 'Popular',
      image: '/images/products/product-4.webp',
    },
    {
      id: 5,
      name: 'Nuts About Nuts Hamper',
      category: 'hampers',
      description: 'Premium assorted dry fruits in a handcrafted hamper',
      badge: null,
      image: '/images/products/product-5.webp',
    },
    {
      id: 6,
      name: 'Three Tins',
      category: 'boxes',
      description: 'Triple tin set with gourmet nuts and trail mixes',
      badge: 'New',
      image: '/images/products/product-6.webp',
    },
    {
      id: 7,
      name: 'Peach Hamper',
      category: 'hampers',
      description: 'Pastel-themed hamper with curated festive treats',
      badge: null,
      image: '/images/products/product-7.webp',
    },
    {
      id: 8,
      name: 'KG Hamper',
      category: 'premium',
      description: 'Grand hamper packed with premium festive delights',
      badge: 'Best Seller',
      image: '/images/products/product-8.webp',
    },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="relative py-24 bg-white overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <FloatingBubbles count={8} color="accent" />
      <GlowingOrbs count={4} />
      <AmoebaBlob className="top-1/4 -right-32" color="#f4a261" size={300} duration={20} />
      <AmoebaBlob className="bottom-1/4 -left-32" color="#e63946" size={250} duration={25} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm mb-4"
          >
            Our Collection
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Browse our extensive collection of customizable corporate gifts and promotional items.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Product Image Area */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {product.badge}
                  </span>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href="#contact"
                    className="p-4 bg-white rounded-full text-primary shadow-xl hover:scale-110 transition-transform"
                  >
                    <FaSearch className="text-xl" />
                  </a>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mt-2">{product.description}</p>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-4 text-primary font-semibold text-sm"
                  whileHover={{ x: 5 }}
                >
                  Get Quote
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Curved Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#f9fafb"
            d="M0,40 C360,100 720,0 1080,60 C1260,90 1380,70 1440,40 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Products;
