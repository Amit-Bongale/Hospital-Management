import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Routers/Router';
import { SpeedInsights } from "@vercel/speed-insights/react"


function App() {
  return (
    <BrowserRouter>
      <Router/>
      <SpeedInsights />

    </BrowserRouter>
  );
}

export default App;
