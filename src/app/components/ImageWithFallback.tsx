"use client";

import { useState } from "react";
import Image from "next/image";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
  imageClassName?: string;
  fallbackClassName?: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

export function ImageWithFallback({
  src,
  alt,
  fallback,
  className = "",
  imageClassName = "",
  fallbackClassName = "",
  priority = false,
  width = 240,
  height = 120,
}: Readonly<ImageWithFallbackProps>) {
  const [hasError, setHasError] = useState(false);

  return (
    <span className={className}>
      {hasError ? (
        <span className={fallbackClassName}>{fallback}</span>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={imageClassName}
          priority={priority}
          onError={() => setHasError(true)}
        />
      )}
    </span>
  );
}
