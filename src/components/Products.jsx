import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { FloatingBubbles, AmoebaBlob, GlowingOrbs } from './AnimatedShapes';

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: '✨' },
    { id: 'apparel', name: 'Apparel', icon: '👕' },
    { id: 'drinkware', name: 'Drinkware', icon: '🥤' },
    { id: 'stationery', name: 'Stationery', icon: '📝' },
    { id: 'bags', name: 'Bags', icon: '👜' },
    { id: 'tech', name: 'Tech Items', icon: '📱' },
  ];

  const products = [
    {
      id: 1,
      name: 'Custom T-Shirts',
      category: 'apparel',
      description: 'Premium cotton t-shirts with custom printing',
      badge: 'Best Seller',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 2,
      name: 'Branded Water Bottles',
      category: 'drinkware',
      description: 'Stainless steel insulated bottles',
      badge: 'Popular',
      color: 'from-cyan-400 to-teal-600',
    },
    {
      id: 3,
      name: 'Executive Diaries',
      category: 'stationery',
      description: 'Premium leather-bound diaries',
      badge: 'Premium',
      color: 'from-amber-400 to-orange-600',
    },
    {
      id: 4,
      name: 'Metal Pens',
      category: 'stationery',
      description: 'Elegant metal pens with engraving',
      badge: null,
      color: 'from-gray-400 to-gray-600',
    },
    {
      id: 5,
      name: 'Laptop Bags',
      category: 'bags',
      description: 'Professional laptop backpacks',
      badge: 'New',
      color: 'from-indigo-400 to-purple-600',
    },
    {
      id: 6,
      name: 'Power Banks',
      category: 'tech',
      description: 'High capacity custom power banks',
      badge: null,
      color: 'from-green-400 to-emerald-600',
    },
    {
      id: 7,
      name: 'Coffee Mugs',
      category: 'drinkware',
      description: 'Ceramic mugs with full color print',
      badge: 'Best Seller',
      color: 'from-rose-400 to-pink-600',
    },
    {
      id: 8,
      name: 'Polo Shirts',
      category: 'apparel',
      description: 'Corporate polo shirts with embroidery',
      badge: null,
      color: 'from-violet-400 to-purple-600',
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
              <div className={`relative h-48 bg-gradient-to-br ${product.color} overflow-hidden`}>
                {/* Animated Background Shapes */}
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full"
                  animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />

                {/* Product Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaShoppingCart className="text-3xl text-white" />
                  </motion.div>
                </div>

                {/* Badge */}
                {product.badge && (
                  <motion.span
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="absolute top-4 left-4 bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                  >
                    {product.badge}
                  </motion.span>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <motion.a
                    href="#contact"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="p-4 bg-white rounded-full text-primary shadow-xl"
                  >
                    <FaSearch className="text-xl" />
                  </motion.a>
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
