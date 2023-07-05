import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import ParticlesOptions from '../data/shadow.json';
import AppLayout from '../layouts/AppLayout';

export default function Shadow() {
  const particlesInit = useCallback(
    main => {loadFull(main)}, []
  );

  return (
    <AppLayout>
      <Particles
          options={ParticlesOptions}
          init={particlesInit} />
      <h1>Click Particles</h1>
    </AppLayout>
  );
};
