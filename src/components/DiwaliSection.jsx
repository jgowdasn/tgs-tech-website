import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import { FaWhatsapp, FaGift, FaTruck, FaPalette, FaBoxOpen } from 'react-icons/fa';

/* ── Canvas fireworks ── */
const FireworksCanvas = () => {
  const canvasRef = useRef(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width = canvas.offsetWidth;
    const H = canvas.height = canvas.offsetHeight;

    const colors = ['#FFD700','#FF6B6B','#4ECDC4','#FF9F43','#EE5A24','#A29BFE','#FD79A8','#00CEC9'];
    let particles = [];
    let rockets = [];

    function spawnRocket() {
      const side = Math.random();
      let rx, ry, tx, ty, spd;
      const col = colors[Math.floor(Math.random() * colors.length)];
      if (side < 0.5) {
        // from bottom
        rx = Math.random() * W; ry = H;
        tx = rx + (Math.random() - 0.5) * 200;
        ty = H * 0.15 + Math.random() * H * 0.35;
        spd = 3 + Math.random() * 2;
      } else if (side < 0.75) {
        // from left
        rx = 0; ry = H * 0.5 + Math.random() * H * 0.4;
        tx = W * 0.2 + Math.random() * W * 0.3;
        ty = H * 0.15 + Math.random() * H * 0.3;
        spd = 3 + Math.random() * 2;
      } else {
        // from right
        rx = W; ry = H * 0.5 + Math.random() * H * 0.4;
        tx = W * 0.5 + Math.random() * W * 0.3;
        ty = H * 0.15 + Math.random() * H * 0.3;
        spd = 3 + Math.random() * 2;
      }
      rockets.push({ x: rx, y: ry, targetX: tx, targetY: ty, speed: spd, color: col, trail: [] });
    }

    function explode(x, y, color) {
      const count = 40 + Math.floor(Math.random() * 30);
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
        const speed = 1.5 + Math.random() * 3;
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.012 + Math.random() * 0.01,
          color,
          size: 2 + Math.random() * 2,
        });
      }
    }

    let lastSpawn = 0;
    function animate(time) {
      ctx.clearRect(0, 0, W, H);

      if (time - lastSpawn > 800 + Math.random() * 1200) {
        spawnRocket();
        lastSpawn = time;
      }

      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.trail.push({ x: r.x, y: r.y });
        if (r.trail.length > 8) r.trail.shift();
        const dx = r.targetX - r.x, dy = r.targetY - r.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 0) { r.x += (dx / dist) * r.speed; r.y += (dy / dist) * r.speed; }

        r.trail.forEach((t, ti) => {
          ctx.beginPath();
          ctx.arc(t.x, t.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = r.color;
          ctx.globalAlpha = ti / r.trail.length * 0.6;
          ctx.fill();
        });
        ctx.globalAlpha = 1;

        ctx.beginPath();
        ctx.arc(r.x, r.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = r.color;
        ctx.shadowColor = r.color;
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (dist < r.speed * 2) {
          explode(r.x, r.y, r.color);
          rockets.splice(i, 1);
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.03;
        p.vx *= 0.99;
        p.life -= p.decay;

        if (p.life <= 0) { particles.splice(i, 1); continue; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }

      requestAnimationFrame(animate);
    }
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => draw(), [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 5 }}
    />
  );
};

/* ── Balloons ── */
const BALLOON_TAGS = ['🪔 Diwali','30% Off','🎁 Gifts','Sale!','🎆 Fest','Order Now','Premium','🪔 Joy','Hampers','Celebrate'];
const BALLOON_COLORS = ['#FF6B6B','#FFD93D','#6BCB77','#4D96FF','#FF6B9D','#C084FC','#FB923C','#2DD4BF','#FF6B6B','#FFD93D'];
const BALLOONS = [
  { left: -1, delay: 0, dur: 16, size: 52 },
  { left: 2, delay: 4, dur: 18, size: 46 },
  { left: 5, delay: 8, dur: 15, size: 50 },
  { left: 92, delay: 2, dur: 17, size: 50 },
  { left: 95, delay: 6, dur: 15, size: 46 },
  { left: 98, delay: 10, dur: 18, size: 52 },
  { left: -2, delay: 12, dur: 16, size: 48 },
  { left: 96, delay: 14, dur: 17, size: 44 },
  { left: 3, delay: 16, dur: 15, size: 50 },
  { left: 94, delay: 18, dur: 16, size: 48 },
].map((b, i) => ({ ...b, color: BALLOON_COLORS[i], tag: BALLOON_TAGS[i] }));

const Balloon = ({ b }) => (
  <div
    className="absolute pointer-events-none"
    style={{
      left: `${b.left}%`,
      bottom: '-80px',
      zIndex: 5,
      animation: `balloonRise ${b.dur}s ${b.delay}s ease-in-out infinite`,
    }}
  >
    <div style={{ animation: `balloonSway ${2.5 + (b.size % 3) * 0.5}s ease-in-out infinite alternate` }}>
      {/* Balloon body */}
      <div style={{
        width: b.size,
        height: b.size * 1.25,
        background: `radial-gradient(circle at 35% 28%, ${b.color}ee, ${b.color}bb, ${b.color})`,
        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
        boxShadow: `inset -5px -5px 12px rgba(0,0,0,0.25), 0 0 20px ${b.color}55`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: '14%', left: '20%',
          width: '32%', height: '28%',
          background: 'rgba(255,255,255,0.35)',
          borderRadius: '50%', transform: 'rotate(-30deg)',
        }} />
        <span style={{
          fontSize: Math.max(9, b.size * 0.2),
          fontWeight: 800, color: '#fff',
          textShadow: '0 1px 3px rgba(0,0,0,0.5)',
          lineHeight: 1.1, textAlign: 'center',
          padding: '0 4px', position: 'relative', zIndex: 1,
        }}>{b.tag}</span>
      </div>
      {/* Knot + string */}
      <div style={{ width: 8, height: 8, background: b.color, borderRadius: '50%', margin: '-3px auto 0', filter: 'brightness(0.65)' }} />
      <div style={{ width: 1.5, height: 40, background: 'rgba(255,255,255,0.4)', margin: '0 auto', borderRadius: 1 }} />
    </div>
  </div>
);

const BalloonField = () => (
  <>
    {BALLOONS.map((b, i) => <Balloon key={i} b={b} />)}
    <style>{`
      @keyframes balloonRise {
        0% { transform: translateY(0); opacity: 0; }
        3% { opacity: 1; }
        88% { opacity: 1; }
        100% { transform: translateY(-130vh); opacity: 0; }
      }
      @keyframes balloonSway {
        from { transform: translateX(-20px) rotate(-4deg); }
        to { transform: translateX(20px) rotate(4deg); }
      }
    `}</style>
  </>
);

/* ── Confetti / Air Busters ── */
const CONFETTI_PIECES = Array.from({ length: 40 }, (_, i) => ({
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 4 + Math.random() * 4,
  color: ['#FFD700','#FF6B6B','#4ECDC4','#FF9F43','#A29BFE','#FD79A8','#00CEC9','#6BCB77'][i % 8],
  size: 4 + Math.random() * 6,
  drift: -30 + Math.random() * 60,
  shape: i % 3,
}));

const ConfettiField = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 5 }}>
    {CONFETTI_PIECES.map((c, i) => (
      <div
        key={i}
        className="absolute"
        style={{
          left: `${c.left}%`,
          top: '-10px',
          animation: `confettiFall ${c.duration}s ${c.delay}s linear infinite`,
          '--drift': `${c.drift}px`,
        }}
      >
        <div style={{
          width: c.size,
          height: c.shape === 2 ? c.size : c.size * (c.shape === 0 ? 1.5 : 0.5),
          background: c.color,
          borderRadius: c.shape === 1 ? '50%' : c.shape === 2 ? '2px' : '1px',
          animation: `confettiSpin ${1 + Math.random()}s linear infinite`,
          opacity: 0.8,
        }} />
      </div>
    ))}
    <style>{`
      @keyframes confettiFall {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(100vh) translateX(var(--drift)); opacity: 0; }
      }
      @keyframes confettiSpin {
        from { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(0.5); }
        to { transform: rotate(360deg) scale(1); }
      }
    `}</style>
  </div>
);

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

  return (
    <section
      id="diwali"
      className="relative py-20"
      ref={ref}
      style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #2d0a1e 40%, #1a0f0a 70%, #1a0a2e 100%)' }}
    >
      {/* Canvas fireworks */}
      <FireworksCanvas />

      {/* Balloons with tags */}
      <BalloonField />

      {/* Confetti / Air busters */}
      <ConfettiField />

      {/* Warm glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 20 }}>

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
