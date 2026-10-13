import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';
import { FaWhatsapp, FaGift, FaTruck, FaPalette, FaBoxOpen } from 'react-icons/fa';

const WHATSAPP = '917892359479';

const products = [
  { id: 1, name: 'Mini Red Box', image: '/images/diwali/mini-red-box.webp', mrp: 599, offer: 449, tier: 'budget' },
  { id: 2, name: 'Keepsake Mini', image: '/images/diwali/keepsake-mini.webp', mrp: 699, offer: 499, tier: 'budget' },
  { id: 3, name: 'Trail Mix Box of 3', image: '/images/diwali/trail-mix-3.webp', mrp: 799, offer: 599, tier: 'budget' },
  { id: 4, name: 'Choco Box', image: '/images/diwali/choco-box.webp', mrp: 899, offer: 699, tier: 'budget' },
  { id: 5, name: 'The Nutty Box', image: '/images/diwali/nutty-box.webp', mrp: 1299, offer: 999, tier: 'classic' },
  { id: 6, name: 'Drive u Nut Box', image: '/images/diwali/drive-u-nut.webp', mrp: 1299, offer: 999, tier: 'classic' },
  { id: 7, name: 'Festive Gift Box', image: '/images/diwali/festive-gift-box.webp', mrp: 1499, offer: 1199, tier: 'classic' },
  { id: 8, name: 'Date a Nut', image: '/images/diwali/date-a-nut.webp', mrp: 1599, offer: 1249, tier: 'classic' },
  { id: 9, name: 'Celebration Hamper', image: '/images/diwali/celebration-hamper.webp', mrp: 2499, offer: 1899, tier: 'premium' },
  { id: 10, name: 'The Chic Box', image: '/images/diwali/chic-box.webp', mrp: 2699, offer: 1999, tier: 'premium' },
  { id: 11, name: 'Peach Hamper', image: '/images/diwali/peach-hamper.webp', mrp: 2499, offer: 1899, tier: 'premium' },
  { id: 12, name: 'Duplex Hamper', image: '/images/diwali/duplex-hamper.webp', mrp: 2999, offer: 2299, tier: 'premium' },
  { id: 13, name: 'Signature Hamper', image: '/images/diwali/signature-hamper.webp', mrp: 3999, offer: 2999, tier: 'grand' },
  { id: 14, name: 'Something Copper', image: '/images/diwali/something-copper.webp', mrp: 4499, offer: 3499, tier: 'grand' },
  { id: 15, name: 'Grande Hamper', image: '/images/diwali/grande-hamper.webp', mrp: 5499, offer: 4299, tier: 'grand' },
  { id: 16, name: 'Artisan Hamper', image: '/images/diwali/artisan-hamper.webp', mrp: 6999, offer: 5499, tier: 'grand' },
];

const tiers = [
  { id: 'all', label: 'All Hampers' },
  { id: 'budget', label: 'Budget Friendly' },
  { id: 'classic', label: 'Classic' },
  { id: 'premium', label: 'Premium' },
  { id: 'grand', label: 'Grand' },
];

const highlights = [
  { icon: <FaTruck />, text: 'Free Delivery on Bulk Orders' },
  { icon: <FaPalette />, text: 'Custom Branding Available' },
  { icon: <FaBoxOpen />, text: 'Corporate Bulk Discounts' },
  { icon: <FaGift />, text: 'Personalized Gift Messages' },
];

const Sparkle = ({ style }) => (
  <motion.div
    className="absolute w-1 h-1 bg-yellow-300 rounded-full"
    style={style}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
    }}
    transition={{
      duration: 2 + Math.random() * 2,
      repeat: Infinity,
      delay: Math.random() * 3,
    }}
  />
);

const BURST_PARTICLES = Array.from({ length: 10 }, (_, i) => {
  const angle = (i / 10) * Math.PI * 2;
  const dist = 50 + (i % 3) * 20;
  return { dx: Math.cos(angle) * dist, dy: Math.sin(angle) * dist };
});

const Firework = ({ x, delay, color, loop = 6 }) => (
  <div className="absolute pointer-events-none" style={{ left: x, bottom: '30%' }}>
    {/* Rising trail */}
    <motion.div
      className="w-1 h-1 rounded-full absolute"
      style={{ background: color, boxShadow: `0 0 8px 2px ${color}` }}
      animate={{
        y: [0, -80, -150],
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.3],
      }}
      transition={{ duration: 1, delay, repeat: Infinity, repeatDelay: loop }}
    />
    {/* Burst */}
    {BURST_PARTICLES.map((p, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full"
        style={{ background: color, boxShadow: `0 0 6px 2px ${color}` }}
        animate={{
          x: [0, 0, p.dx, p.dx * 1.2],
          y: [0, -150, -150 + p.dy, -150 + p.dy + 20],
          opacity: [0, 0, 1, 0],
          scale: [0, 0, 1, 0],
        }}
        transition={{ duration: 2.5, delay: delay + 0.9, repeat: Infinity, repeatDelay: loop }}
      />
    ))}
  </div>
);

const Diya = ({ className }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{ opacity: [0.6, 1, 0.6] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    <div className="relative">
      <div className="w-3 h-4 bg-gradient-to-t from-yellow-500 via-orange-400 to-yellow-200 rounded-full blur-[1px]" />
      <div className="w-5 h-2 bg-amber-700 rounded-full -mt-1 mx-auto" style={{ marginLeft: '-1px' }} />
    </div>
  </motion.div>
);

const DiwaliSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [activeTier, setActiveTier] = useState('all');

  const filtered = useMemo(
    () => activeTier === 'all' ? products : products.filter(p => p.tier === activeTier),
    [activeTier]
  );

  const orderOnWhatsApp = (product) => {
    const msg = encodeURIComponent(
      `Hi! I'm interested in the *${product.name}* (Diwali Special @ ₹${product.offer}). Please share more details.`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
  };

  const bulkEnquiry = () => {
    const msg = encodeURIComponent(
      "Hi! I'm interested in bulk Diwali hamper orders for corporate gifting. Please share the catalog and bulk pricing."
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
  };

  const sparkles = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    })), []
  );

  return (
    <section
      id="diwali"
      className="relative py-20 overflow-hidden"
      ref={ref}
      style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #2d0a1e 40%, #1a0f0a 70%, #1a0a2e 100%)' }}
    >
      {/* Fireworks */}
      <Firework x="5%" delay={0} color="#FFD700" loop={7} />
      <Firework x="20%" delay={3} color="#FF6B6B" loop={8} />
      <Firework x="40%" delay={1.5} color="#4ECDC4" loop={6} />
      <Firework x="60%" delay={4.5} color="#FF6B6B" loop={7} />
      <Firework x="78%" delay={2} color="#FFD700" loop={8} />
      <Firework x="93%" delay={0.5} color="#4ECDC4" loop={6} />

      {/* Sparkle field */}
      {sparkles.map((s, i) => <Sparkle key={i} style={s} />)}

      {/* Decorative diyas */}
      <Diya className="top-20 left-[10%] hidden md:block" />
      <Diya className="top-32 right-[8%] hidden md:block" />
      <Diya className="bottom-40 left-[20%] hidden md:block" />
      <Diya className="bottom-28 right-[15%] hidden md:block" />

      {/* Warm glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 px-5 py-2 rounded-full mb-5"
          >
            <span className="text-amber-400 text-sm font-semibold tracking-wide uppercase">
              ✦ Deepawali Special 2026 ✦
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Festival of </span>
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Lights
            </span>
          </h2>

          <p className="text-amber-200/70 text-lg md:text-xl max-w-2xl mx-auto mb-3 italic">
            "May this Diwali illuminate your life with joy, prosperity, and the warmth of togetherness"
          </p>

          <p className="text-gray-300 text-base max-w-xl mx-auto">
            Curated gift hampers crafted with love — premium dry fruits, chocolates, and festive treats. Perfect for corporate gifting, family, and friends.
          </p>
        </motion.div>

        {/* Offer banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <div className="relative bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 rounded-2xl p-[1px]">
            <div className="bg-gradient-to-r from-amber-950/90 via-orange-950/90 to-red-950/90 rounded-2xl px-6 py-4 text-center backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <span className="text-2xl">🪔</span>
                <div>
                  <span className="text-amber-300 font-bold text-lg">Early Bird Offer — Up to 30% Off</span>
                  <span className="block text-amber-200/70 text-sm">Order now for guaranteed Diwali delivery</span>
                </div>
                <span className="text-2xl">🪔</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tier filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
        >
          {tiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setActiveTier(tier.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTier === tier.id
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30'
                  : 'bg-white/5 text-amber-200/70 border border-amber-500/20 hover:bg-white/10 hover:text-amber-200'
              }`}
            >
              {tier.label}
            </button>
          ))}
        </motion.div>

        {/* Product grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/10 to-white/5 border border-amber-500/10 hover:border-amber-500/40 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Discount badge */}
              <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">
                {Math.round((1 - product.offer / product.mrp) * 100)}% OFF
              </div>

              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-3 md:p-4">
                <h3 className="text-white font-semibold text-sm md:text-base mb-2 truncate">
                  {product.name}
                </h3>

                {/* Pricing */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-amber-400 font-bold text-lg">₹{product.offer.toLocaleString()}</span>
                  <span className="text-gray-500 text-sm line-through">₹{product.mrp.toLocaleString()}</span>
                </div>

                {/* WhatsApp CTA */}
                <button
                  onClick={() => orderOnWhatsApp(product)}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30"
                >
                  <FaWhatsapp className="text-base" />
                  <span className="hidden sm:inline">Order on</span> WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 mb-10"
        >
          {highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-amber-500/10">
              <span className="text-amber-400 text-lg">{h.icon}</span>
              <span className="text-amber-200/80 text-sm font-medium">{h.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Bulk CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-red-600/20" />
          <div className="relative border border-amber-500/20 rounded-2xl px-6 py-8 md:py-10 text-center backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Corporate & Bulk Orders?
            </h3>
            <p className="text-amber-200/70 mb-6 max-w-lg mx-auto">
              Get exclusive volume discounts on 50+ hampers. Custom branding, personalized messages, and doorstep delivery across India.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={bulkEnquiry}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
                Get Bulk Quote on WhatsApp
              </button>
              <a
                href="tel:+917892359479"
                className="text-amber-300 hover:text-amber-200 font-medium transition-colors"
              >
                or call +91 78923 59479
              </a>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-amber-200/40 italic text-sm mt-10"
        >
          "Happiness is best when shared — spread the light this Deepawali" 🪔
        </motion.p>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full h-auto" preserveAspectRatio="none">
          <path fill="#f9fafb" d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
};

export default DiwaliSection;
