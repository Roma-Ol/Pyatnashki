import React from 'react'
import  { createRoot }  from 'react-dom/client';
import Pyatnashki from './src/Pyatnashki.tsx'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Pyatnashki/>);