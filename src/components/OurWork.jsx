import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaBuilding, FaUsers, FaCalendar, FaCheckCircle } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OurWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      id: 1,
      title: 'Tech Startup Employee Kits',
      client: 'Leading IT Company',
      items: '500+ Welcome Kits',
      description: 'Complete onboarding kits including branded t-shirts, backpacks, notebooks, and tech accessories.',
      deliverables: ['Custom T-Shirts', 'Laptop Bags', 'Notebooks', 'Wireless Earbuds'],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 2,
      title: 'Grand Wedding Return Gifts',
      client: 'Private Family',
      items: '1000+ Gift Sets',
      description: 'Elegant return gift sets for a traditional South Indian wedding with custom packaging.',
      deliverables: ['Silver Items', 'Dry Fruit Boxes', 'Custom Packaging', 'Traditional Items'],
      color: 'from-pink-500 to-rose-600',
    },
    {
      id: 3,
      title: 'Annual Day Celebration',
      client: 'International School',
      items: '800+ Prizes',
      description: 'Complete prize distribution items for annual day including trophies and medals.',
      deliverables: ['Trophies', 'Medals', 'Certificate Holders', 'Gift Vouchers'],
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 4,
      title: 'Diwali Corporate Hampers',
      client: 'Banking Institution',
      items: '2000+ Hampers',
      description: 'Premium Diwali gift hampers for employees and valued clients.',
      deliverables: ['Dry Fruits', 'Chocolates', 'Diyas', 'Sweets'],
      color: 'from-orange-500 to-amber-600',
    },
    {
      id: 5,
      title: 'Brand Launch Merchandise',
      client: 'FMCG Company',
      items: '3000+ Items',
      description: 'Complete branded merchandise for new product launch events.',
      deliverables: ['T-Shirts', 'Caps', 'Mugs', 'Tote Bags'],
      color: 'from-purple-500 to-violet-600',
    },
  ];

  const stats = [
    { icon: <FaBuilding />, number: '100+', label: 'Corporate Clients' },
    { icon: <FaUsers />, number: '1000+', label: 'Products Delivered' },
    { icon: <FaCalendar />, number: '5+', label: 'Years Experience' },
    { icon: <FaCheckCircle />, number: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="our-work" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-lg">Portfolio</span>
          <h2 className="section-title mt-2">Our Work</h2>
          <p className="section-subtitle">
            Take a look at some of our recent projects and see the quality we deliver.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl text-primary mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full border border-gray-100">
                  {/* Project Header */}
                  <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                    <span className="text-sm opacity-80">{project.client}</span>
                    <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                    <p className="text-sm mt-2 opacity-90">{project.items}</p>
                  </div>

                  {/* Project Body */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-secondary mb-2">Deliverables:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.deliverables.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-gray-600 mb-4">Want to see your project here?</p>
          <a href="#contact" className="btn-primary">
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OurWork;
