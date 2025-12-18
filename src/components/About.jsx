import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCheckCircle, FaAward, FaHandshake, FaTruck, FaLeaf, FaHeart } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: <FaAward />,
      title: 'Premium Quality',
      description: 'We source only the finest materials for all our products.',
    },
    {
      icon: <FaHandshake />,
      title: 'Custom Solutions',
      description: 'Tailored gifting solutions that match your brand identity.',
    },
    {
      icon: <FaTruck />,
      title: 'Timely Delivery',
      description: 'On-time delivery across Bengaluru and Kolar regions.',
    },
    {
      icon: <FaLeaf />,
      title: 'Eco-Friendly Options',
      description: 'Sustainable and environmentally conscious gift choices.',
    },
  ];

  const values = [
    'Quality Assurance',
    'Customer First',
    'Timely Delivery',
    'Competitive Pricing',
    'Custom Branding',
    'Bulk Order Support',
  ];

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold text-lg">About Us</span>
            <h2 className="section-title mt-2">Your Trusted Partner in Corporate Gifting</h2>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              <strong className="text-secondary">TGS Gifts</strong> is a leading corporate gifting company
              based in Karnataka, serving businesses and families across <strong>Bengaluru and Kolar</strong>.
              With over a decade of experience, we specialize in creating memorable gifting experiences
              that strengthen relationships and elevate brands.
            </p>

            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              From customized corporate merchandise to elegant wedding return gifts, we offer a comprehensive
              range of premium products tailored to your specific needs. Our commitment to quality, creativity,
              and customer satisfaction sets us apart in the industry.
            </p>

            {/* Values List */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <FaCheckCircle className="text-primary flex-shrink-0" />
                  <span className="text-gray-700">{value}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Get Started
              </a>
              <a href="#services" className="btn-outline">
                Our Services
              </a>
            </div>
          </motion.div>

          {/* Right Content - Image/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="h-96 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <FaHeart className="text-6xl text-primary mx-auto mb-4" />
                  <p className="text-secondary font-medium">Add your team/office image</p>
                  <p className="text-gray-500 text-sm mt-2">/public/images/about.jpg</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-4xl font-bold text-primary">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </motion.div>

            {/* Happy Clients Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -top-4 -right-4 bg-primary text-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-4xl font-bold">100+</div>
              <div className="text-white/80">Happy Clients</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Serving Across Karnataka</h3>
          <p className="text-lg mb-6 opacity-90">
            We proudly deliver our premium gifting solutions throughout
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white/20 rounded-full font-semibold backdrop-blur-sm">
              Bengaluru
            </span>
            <span className="px-6 py-3 bg-white/20 rounded-full font-semibold backdrop-blur-sm">
              Kolar
            </span>
            <span className="px-6 py-3 bg-white/20 rounded-full font-semibold backdrop-blur-sm">
              & Surrounding Areas
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
