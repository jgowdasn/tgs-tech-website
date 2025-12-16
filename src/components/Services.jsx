import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBuilding, FaHeart, FaGraduationCap, FaGift, FaTshirt, FaBox } from 'react-icons/fa';
import { FloatingBubbles, AmoebaBlob, WaveDividerAlt } from './AnimatedShapes';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: <FaBuilding className="text-4xl" />,
      title: 'Corporate Gifting',
      description: 'Premium custom-branded gifts for employees, clients, and corporate events.',
      color: 'from-blue-500 to-indigo-600',
      lightColor: 'bg-blue-50',
      items: ['Employee Rewards', 'Client Gifts', 'Event Giveaways', 'Brand Merchandise'],
    },
    {
      icon: <FaHeart className="text-4xl" />,
      title: 'Wedding Return Gifts',
      description: 'Elegant and memorable return gifts for weddings and family functions.',
      color: 'from-pink-500 to-rose-600',
      lightColor: 'bg-pink-50',
      items: ['Traditional Gifts', 'Modern Hampers', 'Custom Packaging', 'Bulk Orders'],
    },
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: 'School & College Gifts',
      description: 'Customized gifts for academic institutions and celebrations.',
      color: 'from-emerald-500 to-teal-600',
      lightColor: 'bg-emerald-50',
      items: ['Graduation Gifts', 'Award Ceremonies', 'Annual Day', 'Sports Events'],
    },
    {
      icon: <FaTshirt className="text-4xl" />,
      title: 'Custom Apparel',
      description: 'Branded t-shirts, polo shirts, jackets with your logo and design.',
      color: 'from-purple-500 to-violet-600',
      lightColor: 'bg-purple-50',
      items: ['T-Shirts', 'Polo Shirts', 'Jackets', 'Uniforms'],
    },
    {
      icon: <FaBox className="text-4xl" />,
      title: 'Gift Hampers',
      description: 'Curated gift hampers for festivals and special celebrations.',
      color: 'from-orange-500 to-amber-600',
      lightColor: 'bg-orange-50',
      items: ['Festival Hampers', 'Diwali Gifts', 'New Year Packs', 'Custom Combos'],
    },
    {
      icon: <FaGift className="text-4xl" />,
      title: 'Promotional Items',
      description: 'Wide range of promotional products for brand visibility.',
      color: 'from-red-500 to-rose-600',
      lightColor: 'bg-red-50',
      items: ['Pens & Stationery', 'Bags & Pouches', 'Tech Gadgets', 'Eco Products'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="relative py-24 bg-gray-50 overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <FloatingBubbles count={10} color="primary" />
      <AmoebaBlob className="-top-20 -right-20" color="#e63946" size={400} duration={25} />
      <AmoebaBlob className="-bottom-20 -left-20" color="#f4a261" size={350} duration={30} />

      {/* Top Wave Divider */}
      <WaveDividerAlt flip color="#f9fafb" />

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
            className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4"
          >
            What We Offer
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From corporate branding to wedding celebrations, we provide premium gifting solutions
            tailored to your needs across Bengaluru and Kolar.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Animated Background Blob */}
              <motion.div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500`}
              />

              {/* Card Content */}
              <div className="relative p-8">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Items */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.items.map((item, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-3 py-1 ${service.lightColor} text-gray-700 rounded-full`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>

              {/* Bottom Gradient Line */}
              <div className={`h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl">
            <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Custom Solution
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Services;
