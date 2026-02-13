import React from 'react';

interface ResponsiveImageProps {
  src: string;
  webp: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * ResponsiveImage Component
 * Automatically serves WebP to modern browsers, falls back to JPEG
 * Includes lazy loading for performance
 */
export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  webp,
  alt,
  className = '',
  loading = 'lazy',
}) => {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
      />
    </picture>
  );
};

export default ResponsiveImage;
