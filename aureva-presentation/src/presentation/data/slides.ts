/**
 * AUREVA Presentation — Slide Registry
 *
 * ALL slides are imported EAGERLY (direct static import) to eliminate
 * the Suspense/lazy-load blank-slide flash that occurs when React.lazy
 * chunks haven't been fetched yet on first navigation.
 * 
 * Since this is a presentation, eagerly bundling ensures smooth transitions
 * and instantaneous rendering across the entire deck.
 */

import { SlideConfig } from '../types';

// ── Eager imports — Slides 1–19 ─────────────────────────────────────────────
import Slide01Aureva              from '../slides/Slide01Aureva';
import Slide02ClinicalOrigin      from '../slides/Slide02ClinicalOrigin';
import Slide03ClinicalPartnership from '../slides/Slide03ClinicalPartnership';
import Slide04TheProblem          from '../slides/Slide04TheProblem';
import Slide05ClinicalPicture     from '../slides/Slide05ClinicalPicture';
import Slide06WhyAureva           from '../slides/Slide06WhyAureva';
import Slide07UsersCustomers      from '../slides/Slide07UsersCustomers';
import Slide08BusinessModel       from '../slides/Slide08BusinessModel';
import Slide09EgyptianMarket      from '../slides/Slide09EgyptianMarket';
import Slide10UnderTheHood        from '../slides/Slide10UnderTheHood';
import Slide11TechStack         from '../slides/Slide11TechStack';
import Slide12AiPrediction        from '../slides/Slide12AiPrediction';
import Slide13PredictionExplanation from '../slides/Slide13PredictionExplanation';
import Slide14ClinicalRag         from '../slides/Slide14ClinicalRag';
import Slide15GroundedGeneration  from '../slides/Slide15GroundedGeneration';
import Slide16Security            from '../slides/Slide16Security';
import Slide17LiveDemo            from '../slides/Slide17LiveDemo';
import Slide18ThankYou            from '../slides/Slide18ThankYou';

const slides: SlideConfig[] = [
  {
    id: 1,
    slug: 'aureva',
    title: 'AUREVA',
    section: 'intro',
    transition: 'hero-reveal',
    component: Slide01Aureva,
  },
  {
    id: 2,
    slug: 'clinical-origin',
    title: 'Clinical Origin',
    section: 'clinical',
    component: Slide02ClinicalOrigin,
  },
  {
    id: 3,
    slug: 'clinical-partnership',
    title: 'Clinical Partnership',
    section: 'clinical',
    component: Slide03ClinicalPartnership,
  },
  {
    id: 4,
    slug: 'the-problem',
    title: 'The Problem',
    section: 'clinical',
    component: Slide04TheProblem,
  },
  {
    id: 5,
    slug: 'the-clinical-picture',
    title: 'The Clinical Picture',
    section: 'clinical',
    component: Slide05ClinicalPicture,
  },
  {
    id: 6,
    slug: 'why-aureva',
    title: 'Why AUREVA',
    section: 'clinical',
    component: Slide06WhyAureva,
  },
  {
    id: 7,
    slug: 'users-customers',
    title: 'Users & Customers',
    section: 'business',
    component: Slide07UsersCustomers,
  },
  {
    id: 8,
    slug: 'business-model',
    title: 'Business Model',
    section: 'business',
    component: Slide08BusinessModel,
  },
  {
    id: 9,
    slug: 'entering-egyptian-market',
    title: 'Entering the Egyptian Market',
    section: 'business',
    component: Slide09EgyptianMarket,
  },
  {
    id: 10,
    slug: 'under-the-hood',
    title: 'Now, Under the Hood',
    section: 'technical',
    transition: 'slide-horizontal',
    component: Slide10UnderTheHood,
  },
  {
    id: 11,
    slug: 'tech-stack',
    title: 'Technology Stack',
    section: 'technical',
    component: Slide11TechStack,
  },
  {
    id: 12,
    slug: 'ai-prediction',
    title: 'AI-Powered Prediction',
    section: 'technical',
    component: Slide12AiPrediction,
  },
  {
    id: 13,
    slug: 'prediction-explanation',
    title: 'From Prediction to Explanation',
    section: 'technical',
    component: Slide13PredictionExplanation,
  },
  {
    id: 14,
    slug: 'clinical-rag-pipeline',
    title: 'Clinical RAG Pipeline',
    section: 'technical',
    component: Slide14ClinicalRag,
  },
  {
    id: 15,
    slug: 'grounded-generation',
    title: 'Grounded Clinical Generation',
    section: 'technical',
    component: Slide15GroundedGeneration,
  },
  {
    id: 16,
    slug: 'platform-security',
    title: 'Clinical-Grade Security',
    section: 'technical',
    component: Slide16Security,
  },
  {
    id: 17,
    slug: 'live-demo',
    title: 'Live Demonstration',
    section: 'closing',
    transition: 'hero-reveal',
    component: Slide17LiveDemo,
  },
  {
    id: 18,
    slug: 'thank-you',
    title: 'Thank You',
    section: 'closing',
    transition: 'hero-reveal',
    component: Slide18ThankYou,
  },
];

export default slides;
