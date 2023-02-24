import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app'

import './styles/commonStyle.scss'

const root = createRoot(document.getElementById('root'));
root.render(<App />);