import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'HR Director',
      company: 'Tech Solutions Pvt Ltd',
      rating: 5,
      text: 'TGS Gifts has been our go-to partner for employee recognition programs. The quality of products and timely delivery is exceptional. Highly recommended!',
      color: 'from-blue-400 to-indigo-500',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Event Manager',
      company: 'Grand Events',
      rating: 5,
      text: 'We ordered wedding return gifts for over 800 guests and the team delivered beautifully. The customization options and attention to detail were outstanding.',
      color: 'from-pink-400 to-rose-500',
    },
    {
      id: 3,
      name: 'Dr. Suresh Reddy',
      position: 'Principal',
      company: 'Global International School',
      rating: 5,
      text: 'For our annual day celebrations, TGS Gifts provided excellent prizes and mementos. The students and parents loved the quality. Will definitely order again.',
      color: 'from-green-400 to-emerald-500',
    },
    {
      id: 4,
      name: 'Anita Patel',
      position: 'Marketing Head',
      company: 'Consumer Brands Inc',
      rating: 5,
      text: 'The promotional merchandise for our product launch was perfect. Great quality, competitive pricing, and the team was very professional throughout.',
      color: 'from-purple-400 to-violet-500',
    },
    {
      id: 5,
      name: 'Mohammed Farooq',
      position: 'Business Owner',
      company: 'Farooq Enterprises',
      rating: 5,
      text: 'Been ordering corporate gifts from TGS for 5 years now. Consistent quality and reliable service. They understand our brand requirements perfectly.',
      color: 'from-orange-400 to-amber-500',
    },
    {
      id: 6,
      name: 'Lakshmi Narayanan',
      position: 'Family',
      company: 'Wedding Client',
      rating: 5,
      text: 'The return gifts for my daughter\'s wedding were absolutely beautiful. Everyone appreciated the elegant packaging and premium quality. Thank you TGS!',
      color: 'from-cyan-400 to-teal-500',
    },
  ];

  const topClients = [
    'Tech Solutions', 'Global School', 'Consumer Brands', 'City Hospital',
    'Metro Bank', 'Fashion Hub', 'Auto World', 'Food Corp'
  ];

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-slate-800 to-secondary">
        {/* Animated Amoeba Blobs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 opacity-20"
          style={{ background: 'linear-gradient(135deg, #e63946, transparent)' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] opacity-10"
          style={{ background: 'linear-gradient(135deg, #f4a261, transparent)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            borderRadius: ['70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%'],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />

        {/* Floating Bubbles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full blur-sm"
          animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-accent rounded-full blur-sm"
          animate={{ opacity: [0.3, 0.8, 0.3], scale: [1.5, 1, 1.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path fill="#f9fafb" d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,70 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>

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
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-accent font-semibold rounded-full text-sm mb-4"
          >
            What They Say
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Top Satisfied <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Customers</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join hundreds of happy customers who trust us for their gifting needs.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative bg-white rounded-3xl p-8 h-full shadow-2xl overflow-hidden"
                >
                  {/* Decorative Blob */}
                  <motion.div
                    className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${testimonial.color} rounded-full opacity-20`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  {/* Quote Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <FaQuoteLeft className="text-xl text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <FaStar className="text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-8 text-sm uppercase tracking-wider">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center gap-4">
            {topClients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/20 transition-all"
              >
                <span className="text-white font-medium">{client}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path fill="#f9fafb" d="M0,40 Q360,100 720,60 T1440,40 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
