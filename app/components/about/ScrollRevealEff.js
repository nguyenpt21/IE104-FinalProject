// components/ScrollRevealEffect.js
"use client";

import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function ScrollRevealEffect() {
  useEffect(() => {
    ScrollReveal().reveal('.left-element', {
      origin: 'left',
      distance: '40px',
      duration: 1000,
      delay: 50,
      reset: true,
    });

    ScrollReveal().reveal('.right-element', {
      origin: 'right',
      distance: '40px',
      duration: 1000,
      delay: 50,
      reset: true,
    });

    
  }, []);

  return null;
}