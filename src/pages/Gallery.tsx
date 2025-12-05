import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();

  const [images] = useState([
    { id: 1, url: "/gallery/img1.jpg" },
    { id: 2, url: "/gallery/img2.jpg" },
    { id: 3, url: "/gallery/img16.jpg" },
    { id: 4, url: "/gallery/img28.jpg" },
    { id: 5, url: "/gallery/img40.jpg" },
    { id: 6, url: "/gallery/img52.jpg" },
    { id: 7, url: "/gallery/img64.jpg" },
    { id: 8, url: "/gallery/img76.jpg" },
    { id: 9, url: "/gallery/img88.jpg" },
    { id: 10, url: "/gallery/img100.jpg" },
    { id: 11, url: "/gallery/img112.jpg" },
    { id: 12, url: "/gallery/img124.jpg" },
    { id: 13, url: "/gallery/0B2A0561.jpeg" },
    { id: 14, url: "/gallery/0B2A0603.jpeg" },
    { id: 15, url: "/gallery/0B2A0640.jpeg" },
    { id: 16, url: "/gallery/0B2A6650.jpeg" },
    { id: 17, url: "/gallery/0B2A6685.jpeg" },
    { id: 18, url: "/gallery/0B2A6772.jpeg" },
  ]);

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary font-semibold mb-6 hover:underline hover:opacity-80"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>
      </div>

      {/* Header */}
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold text-primary mb-2">Gallery</h1>
        <p className="text-gray-700">Moments we cherish — Walkers Club Visakhapatnam</p>
      </section>

      {/* Google Photos Style Auto Grid without crop */}
      <div className="container mx-auto px-4 pb-16">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img) => (
            <motion.img
              key={img.id}
              src={img.url}
              onClick={() => setSelectedImg(img.url)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="
                w-full mb-4 rounded-xl shadow-md cursor-pointer 
                hover:shadow-xl transition-all duration-300 
                break-inside-avoid
              "
              loading="lazy"
              style={{ objectFit: "contain" }} // keeps original resolution
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Modal Preview */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="
              fixed inset-0 bg-black/90 backdrop-blur-md 
              flex items-center justify-center z-50
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={selectedImg}
              className="max-w-[95%] max-h-[90%] rounded-xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />

            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white hover:text-red-400 transition"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
