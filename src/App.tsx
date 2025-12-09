import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/thema.css';

export function App() {
  return (
    <>
      <Heading>Chronos Pomodoro</Heading>
      <div>
        <h2>Timer</h2>
        <p>00:00</p>
      </div>
      <div>
        <h2>Controls</h2>
        <button>Start</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
    </>
  );
}
