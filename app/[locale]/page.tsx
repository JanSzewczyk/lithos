import * as React from "react";

import {
  LandingAnatomy,
  LandingFeatures,
  LandingHero,
  LandingMission,
  LandingProcess,
  LandingSignup
} from "~/components/landing";
import { LandingFooter } from "~/components/layout/landing-footer";
import { LandingNav } from "~/components/layout/landing-nav";

export default function HomePage() {
  return (
    <main className="bg-cement min-h-screen">
      <LandingNav />
      <LandingHero />
      <LandingAnatomy />
      <LandingMission />
      <LandingProcess />
      <LandingFeatures />
      <LandingSignup />
      <LandingFooter />
    </main>
  );
}
