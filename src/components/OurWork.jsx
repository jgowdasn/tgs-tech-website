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
      title: 'Choco & Dry Fruits Hampers',
      client: 'Leading IT Company',
      items: '500+ Gift Boxes',
      description: 'Premium chocolate and dry fruit gift boxes for employee appreciation and client gifting.',
      deliverables: ['Chocolates', 'Dry Fruits', 'Custom Packaging', 'Brand Labels'],
      image: '/images/work/work-1.webp',
    },
    {
      id: 2,
      title: 'Blossom Treasury Collection',
      client: 'Private Family',
      items: '1000+ Gift Sets',
      description: 'Elegant floral-themed gift hampers for a grand wedding celebration.',
      deliverables: ['Curated Hampers', 'Dry Fruit Boxes', 'Custom Packaging', 'Traditional Items'],
      image: '/images/work/work-2.webp',
    },
    {
      id: 3,
      title: 'Small Wonders Gift Sets',
      client: 'International School',
      items: '800+ Gifts',
      description: 'Compact yet delightful gift sets for academic events and celebrations.',
      deliverables: ['Mini Hampers', 'Treat Boxes', 'Custom Labels', 'Gift Vouchers'],
      image: '/images/work/work-3.webp',
    },
    {
      id: 4,
      title: 'Trail Mix Hamper Collection',
      client: 'Banking Institution',
      items: '2000+ Hampers',
      description: 'Healthy trail mix hampers for Diwali corporate gifting to employees and clients.',
      deliverables: ['Trail Mixes', 'Dry Fruits', 'Energy Bars', 'Custom Boxes'],
      image: '/images/work/work-4.webp',
    },
    {
      id: 5,
      title: 'Double Decker Hampers',
      client: 'FMCG Company',
      items: '3000+ Items',
      description: 'Grand double-decker hampers packed with premium festive goodies for brand launches.',
      deliverables: ['Chocolates', 'Dry Fruits', 'Gourmet Snacks', 'Custom Branding'],
      image: '/images/work/work-5.webp',
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
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <span className="text-xs opacity-80">{project.client}</span>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className="text-xs mt-1 opacity-90">{project.items}</p>
                    </div>
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
