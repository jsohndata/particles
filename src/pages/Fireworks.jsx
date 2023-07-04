import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import ParticlesOptions from '../data/fireworks.json';
import AppLayout from '../layouts/AppLayout';

export default function FireWorks() {
  const particlesInit = useCallback(
    main => {loadFull(main)}, []
  );

  return (
    <AppLayout>
      <Particles
          options={ParticlesOptions}
          init={particlesInit} />
      <h1>Happy 4<sup>th</sup>!</h1>
    </AppLayout>
  );
};