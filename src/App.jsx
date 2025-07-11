import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Uncomment the following lines to test the escheck variable 이것도 에러 뜨나.

  // try {
  //   const [escheck, setEscheck] = useState(0); // 권한 Test
  // } catch (error) {
  //   console.error("Error using escheck variable:", error);
  //   console.log("Checker!");
  // }
  // 통과되야지 이제.

  // 새로 추가됨.

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        너 적용 되 냐 ?<h1>테스트</h1>
        <div>
          ddd<h3>zzz</h3>
          <h2>ddd</h2>
        </div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
