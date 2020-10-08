import React from 'react';
import Counter from './Counter';
import Link from './Link';
import LinkGen from './ComplicatedStringGenerator';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Counter increment={setCount} count={count} />
        <Link url="https://reactjs.org" className="App-link" variant="regular">
          Learn TypeScript
        </Link>
        <LinkGen
          crop="fill"
          font={{
            size: 100,
            weight: 200,
          }}
          height={100}
          width={200}
        />
      </header>
    </div>
  );
}

export default App;
