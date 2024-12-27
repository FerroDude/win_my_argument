import { Button } from "@/components/ui/button"

function App() {
  const testeFunc = () => {
    console.log('Teste');
  };

  return (
    <>
      <h1>Teste APP component</h1>
     
      <Button variant="default" size="default" onClick={testeFunc}>Teste Button</Button>
    </>

  );
}

export default App;
