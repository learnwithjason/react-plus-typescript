import React from 'react';

interface ComplexConfig {
  /**
   * the width of the image
   */
  width: number;
  height: number;
  crop: 'fill' | 'thumb';
  font: {
    /**
     * @default "arial"
     */
    family?: string;
    size: number;
    weight: number;
  };
}

const LinkGen = ({
  width,
  height,
  crop,
  font: { family = 'arial', size, weight },
}: ComplexConfig) => {
  return (
    <pre style={{ textAlign: 'left' }}>
      {JSON.stringify({ width, height, crop, family, size, weight }, null, 2)}
    </pre>
  );
};

export default LinkGen;
