// Import React to resolve 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface CoverageArea {
  name: string;
  regions: string[];
}