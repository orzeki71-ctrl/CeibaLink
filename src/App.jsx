import { motion } from "framer-motion";
import { Instagram, MessageCircle, MapPin, Home } from "lucide-react";

export default function LaCeibaLinks() {
  const links = [
    {
      name: "WhatsApp",
      url: "https://wa.link/l2youx",
      gradient: "from-green-500 to-emerald-600",
      icon: <MessageCircle className="w-6 h-6" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/laceibamex/",
      gradient: "from-pink-500 via-purple-500 to-yellow-500",
      icon: <Instagram className="w-6 h-6" />,
    },
    {
      name: "Airbnb",
      url: "https://www.airbnb.mx/users/profile/1465736983228143913",
      gradient: "from-rose-500 to-red-600",
      icon: <Home className="w-6 h-6" />,
    },
    {
      name: "Booking",
      url: "https://www.booking.com/hotel/mx/la-ceiba-ciudad-de-mexico.es-mx.html",
      gradient: "from-blue-500 to-indigo-600",
      icon: <Home className="w-6 h-6" />,
    },
    {
      name: "HostelWorld",
      url: "https://www.spanish.hostelworld.com/pwa/hosteldetails.php/La-Ceiba-Hostel/Mexico-City/337444",
      gradient: "from-orange-500 to-red-500",
      icon: <Home className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b2e2b] via-[#0e3b36] to-[#071f1d] text-white flex flex-col items-center px-4 pb-10">
      {/* Logo */}
      <motion.img
        src="/ceiba-logo-s.png"
        alt="La Ceiba Hostel"
        className="w-36 h-36 mt-10 mb-4 drop-shadow-xl"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <h1 className="text-3xl font-semibold tracking-wide mb-2">La Ceiba Hostel</h1>
      <p className="text-sm text-emerald-200 mb-8 text-center max-w-xs">
       🌍 Comunidad viajera, ✨ Diversión & 🌴buenas vibras
      </p>

      {/* Links */}
      <div className="w-full max-w-md space-y-4">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 bg-gradient-to-r ${link.gradient} py-4 rounded-full shadow-lg text-lg font-medium backdrop-blur-md`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="bg-white/20 p-2 rounded-full">{link.icon}</span>
            {link.name}
          </motion.a>
        ))}
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.link/l2youx"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-xl"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>

      <footer className="mt-12 text-xs text-emerald-300 opacity-80">
        © {new Date().getFullYear()} La Ceiba Hostel · CDMX
      </footer>
    </div>
  );
}
