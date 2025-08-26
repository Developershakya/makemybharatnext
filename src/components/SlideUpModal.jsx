"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

export default function SlideUpModal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Fullscreen Modal */}
          <motion.div
            className="fixed inset-0 bg-white z-50 my-scroll overflow-y-auto"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Close Button */}
      
              {/* <button
            
                className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300"
              >
                Close
              </button> */}
                        <button
                            onClick={onClose}
                          className="flex items-center p-3"
                        >
                          <FiArrowLeft className="text-gray-500 text-2xl" />
                        </button>
      
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
