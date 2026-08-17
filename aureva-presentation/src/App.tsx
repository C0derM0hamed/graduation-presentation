/**
 * AUREVA Presentation — Application Root
 *
 * Imports all styles in the correct cascade order,
 * then renders the PresentationShell.
 */

import React from 'react';
import PresentationShell from './presentation/components/PresentationShell/PresentationShell';

// Design system — must load first
import './presentation/styles/variables.css';
import './presentation/styles/animations.css';
import './presentation/styles/presentation.css';

const App: React.FC = () => {
  return <PresentationShell />;
};

export default App;
