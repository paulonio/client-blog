'use client';

import React, { FC, useEffect, useRef } from 'react';

interface MapProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
}

const Map: FC<MapProps> = ({ center, zoom }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
      });
    }
  });

  return <div ref={mapRef} id="map" />;
};

export default Map;
