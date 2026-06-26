import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/ImageSlider.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = ({ images, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images?.length, interval]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return <div className={styles.sliderContainer}><div className="imageFallback"></div></div>;
  }

  return (
    <div className={styles.sliderContainer}>
      <AnimatePresence mode="wait">
        {images[currentIndex].match(/\.(mp4|webm|ogg)$/i) ? (
          <motion.video
            key={currentIndex}
            src={images[currentIndex]}
            autoPlay
            muted
            loop
            playsInline
            className={styles.slideImage}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className={styles.slideImage}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button className={`${styles.navButton} ${styles.prevButton}`} onClick={goToPrev}>
            <ChevronLeft size={24} />
          </button>
          <button className={`${styles.navButton} ${styles.nextButton}`} onClick={goToNext}>
            <ChevronRight size={24} />
          </button>

          <div className={styles.dotsContainer}>
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
                onClick={() => setSlide(idx)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
