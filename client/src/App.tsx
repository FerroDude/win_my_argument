import Container from './components/Container';
import { Input } from './components/ui/input.tsx';

function App() {
  return (
    <>
      <Container>
        <h1 className="text-primary text-h1 pb-8">Win My Argument</h1>
        <Input type="text" placeholder="Search for a topic" />
      </Container>
    </>
  );
}

export default App;
