import React, { useState } from 'react';
import styles from './Folder3D.module.css';

const Folder3D = ({
  className = '',
  scale = 1,
  speed = '0.3s',
  flapAngle = '0deg',
  magnetX = '0px',
  magnetY = '0px',
}) => {
  const [hovered, setHovered] = useState(false);

  // Paper configs: all papers slide up from under the top flap, with slight horizontal offsets
  const paperConfigs = [
    // Red: slides up, slightly left
    {
      width: 54,
      height: 16,
      left: 8,
      top: 30,
      bg: styles.red,
      z: 2,
      rotate: -8,
      slide: hovered
        ? 'translate(-16px, -60px) scale(1.08) rotate(-12deg)'
        : 'translate(0, 0) scale(1) rotate(-8deg)',
    },
    // Blue: slides up, center
    {
      width: 62,
      height: 18,
      left: 14,
      top: 22,
      bg: styles.blue,
      z: 3,
      rotate: 2,
      slide: hovered
        ? 'translate(0, -64px) scale(1.08) rotate(2deg)'
        : 'translate(0, 0) scale(1) rotate(2deg)',
    },
    // White: slides up, slightly right
    {
      width: 66,
      height: 20,
      left: 22,
      top: 14,
      bg: styles.white,
      z: 4,
      rotate: 7,
      slide: hovered
        ? 'translate(16px, -60px) scale(1.08) rotate(12deg)'
        : 'translate(0, 0) scale(1) rotate(7deg)',
    },
  ];

  return (
    <div
      className={`${styles.folder3d} ${className}`}
      style={{
        '--folder-scale': scale,
        '--folder-speed': speed,
        '--flap-angle': hovered ? '60deg' : flapAngle,
        '--magnet-x': magnetX,
        '--magnet-y': magnetY,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.folderBack} />
      {paperConfigs.map((cfg, i) => (
        <div
          key={i}
          className={`${styles.folderPaper} ${cfg.bg}`}
          style={{
            width: cfg.width,
            height: cfg.height,
            left: cfg.left,
            top: cfg.top,
            zIndex: cfg.z,
            transform: cfg.slide,
            boxShadow: hovered
              ? `0 6px 16px ${i === 0 ? '#e01a1a55' : i === 1 ? '#1310e555' : '#fff8'}`
              : undefined,
            border: '1px solid #e2e2e2',
            transition: `transform ${speed}, box-shadow ${speed}`,
          }}
        />
      ))}
      <div className={styles.folderFlap}>
        <div className={styles.tab} />
      </div>
    </div>
  );
};

export default Folder3D; 