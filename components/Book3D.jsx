import React from 'react';
import styles from './Book3D.module.css';

const Book3D = ({ className = '', hovered = false, falling = false }) => {
  // Page size: nearly as large as the book
  const pageWidth = 48;
  const pageHeight = 32;
  // Animation configs for flip effect (flip sideways on click)
  const flipDuration = 0.8; // seconds
  const coverOpenDelay = 0.5; // seconds
  const pageAnims = [
    // White
    falling
      ? {
          transform: 'rotateY(100deg)',
          opacity: 0.7,
          transition: `transform ${flipDuration}s ${coverOpenDelay}s, opacity ${flipDuration}s ${coverOpenDelay}s`,
        }
      : {
          transform: 'rotateY(0deg)',
          opacity: 1,
          transition: `transform 0.5s 0.1s, opacity 0.5s 0.1s`,
        },
    // Green
    falling
      ? {
          transform: 'rotateY(100deg)',
          opacity: 0.7,
          transition: `transform ${flipDuration}s ${coverOpenDelay + 0.12}s, opacity ${flipDuration}s ${coverOpenDelay + 0.12}s`,
        }
      : {
          transform: 'rotateY(0deg)',
          opacity: 1,
          transition: `transform 0.5s 0.18s, opacity 0.5s 0.18s`,
        },
    // Pink
    falling
      ? {
          transform: 'rotateY(100deg)',
          opacity: 0.7,
          transition: `transform ${flipDuration}s ${coverOpenDelay + 0.24}s, opacity ${flipDuration}s ${coverOpenDelay + 0.24}s`,
        }
      : {
          transform: 'rotateY(0deg)',
          opacity: 1,
          transition: `transform 0.5s 0.26s, opacity 0.5s 0.26s`,
        },
  ];
  return (
    <div className={`${styles.book3d} ${className}`}>
      <div className={styles.spine} />
      <div className={styles.back} />
      <div className={styles.pages}>
        <div
          className={`${styles.page} ${styles.white}`}
          style={{
            width: pageWidth,
            height: pageHeight,
            left: 0,
            top: 2,
            zIndex: 3,
            ...pageAnims[0],
            transformOrigin: 'left center',
          }}
        />
        <div
          className={`${styles.page} ${styles.blue}`}
          style={{
            width: pageWidth,
            height: pageHeight,
            left: 0,
            top: 8,
            zIndex: 2,
            ...pageAnims[1],
            transformOrigin: 'left center',
          }}
        />
        <div
          className={`${styles.page} ${styles.red}`}
          style={{
            width: pageWidth,
            height: pageHeight,
            left: 0,
            top: 14,
            zIndex: 1,
            ...pageAnims[2],
            transformOrigin: 'left center',
          }}
        />
      </div>
      <div
        className={styles.front}
        style={{
          transform: hovered ? 'rotateY(-120deg)' : 'rotateY(0deg)',
          zIndex: 10,
          transition: 'transform 0.9s',
        }}
      />
    </div>
  );
};

export default Book3D; 