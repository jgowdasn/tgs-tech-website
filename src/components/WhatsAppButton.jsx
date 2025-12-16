import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number
  const whatsappNumber = '919876543210'; // Format: country code + number without +
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in your gifting services. Please provide more information."
  );

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulse Animation Ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />

      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors">
        <FaWhatsapp className="text-white text-3xl" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg opacity-0 hover:opacity-100 pointer-events-none whitespace-nowrap">
        <span className="text-gray-700 font-medium">Chat with us!</span>
        {/* Arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-white" />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
