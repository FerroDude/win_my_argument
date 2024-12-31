import Container from './components/Container';
import { Input } from './components/ui/input.tsx';
import Answer from './components/Answer.tsx';

function App() {
  const studiesAmount = 25;
  const answerContent =
    "The answer to your question is that the sky is blue because of the way the Earth's atmosphere scatters sunlight. The short answer is that blue light is scattered in all directions by the gasses in the Earth's atmosphere. The blue color of the sky is due to Rayleigh scattering. As light moves through the atmosphere, most of the longer wavelengths pass straight through. Little of the red, orange and yellow light is affected by the air. However, much of the shorter wavelength light is absorbed by the gas molecules. The absorbed blue light is then radiated in different directions. It gets scattered all around the sky. Whichever direction you look, some of this scattered blue light reaches you. Since you see the blue light from everywhere overhead, the sky looks blue.";
  return (
    <>
      <Container>
        <h1 className="text-primary text-h1 ">Win My Argument</h1>
        <div className="bg-background-secondary  w-auto h-auto py-5 px-5 rounded-md flex flex-col justify-center content-center gap-10">
          <Input type="text" placeholder="Search for a topic" />
          <Answer studiesAmount={studiesAmount} content={answerContent} />
        </div>
      </Container>
    </>
  );
}

export default App;
