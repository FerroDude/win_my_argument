

function App() {
  const testeFunc = () => {
    console.log('Teste');
  };

  return (
    <>
      <h1>Teste APP component</h1>
      <button onClick={testeFunc}>Console log teste</button>
    </>
  );
}

export default App;
