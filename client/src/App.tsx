import Container from './components/Container';
import { Input } from './components/ui/input.tsx';
import Answer from './components/Answer.tsx';
import Studies from './components/Studies.tsx';

function App() {
  // Dummy data
  const studiesAmount = 26;
  const answerContent =
    "The answer to your question is that the sky is blue because of the way the Earth's atmosphere scatters sunlight. The short answer is that blue light is scattered in all directions by the gasses in the Earth's atmosphere. The blue color of the sky is due to Rayleigh scattering. As light moves through the atmosphere, most of the longer wavelengths pass straight through. Little of the red, orange and yellow light is affected by the air. However, much of the shorter wavelength light is absorbed by the gas molecules. The absorbed blue light is then radiated in different directions. It gets scattered all around the sky. Whichever direction you look, some of this scattered blue light reaches you. Since you see the blue light from everywhere overhead, the sky looks blue.";
  const studies = [
    {
      id: '1',
      title: 'The Impact of Climate Change on Global Biodiversity',
      authors: 'Sarah Johnson, Michael Chen, Robert Williams',
      journal: 'Nature Climate Research',
      year: '2023',
      abstract:
        'This comprehensive study examines the effects of rising global temperatures on biodiversity across different ecosystems. Our findings indicate a significant decline in species diversity in tropical regions, with cascading effects on ecosystem stability. The research highlights urgent need for conservation efforts.',
    },
    {
      id: '2',
      title: 'Neural Networks in Early Cancer Detection',
      authors: 'David Martinez, Emily Wong',
      journal: 'Medical AI Quarterly',
      year: '2024',
      abstract:
        'We present a novel deep learning approach for early cancer detection using minimal invasive biomarkers. The proposed neural network architecture achieved 94% accuracy in identifying early-stage tumors, significantly improving upon existing methods. Implementation in clinical settings shows promising results for preventive care.',
    },
    {
      id: '3',
      title: 'Quantum Computing: Breaking RSA Encryption',
      authors: 'Alex Thompson, Lisa Kumar, James Wilson',
      journal: 'Quantum Computing Review',
      year: '2024',
      abstract:
        'This paper demonstrates theoretical vulnerabilities in current RSA encryption methods against quantum computing attacks. We propose several potential solutions for quantum-resistant cryptography and evaluate their practical implementation challenges in existing systems.',
    },
    {
      id: '4',
      title: "Social Media's Effect on Adolescent Mental Health",
      authors: 'Rachel Anderson, Mark Sullivan',
      journal: 'Journal of Digital Psychology',
      year: '2023',
      abstract:
        'A longitudinal study examining the relationship between social media usage and mental health outcomes in adolescents aged 13-18. Results indicate a strong correlation between excessive platform use and increased anxiety levels, while suggesting protective factors through monitored usage and digital literacy education.',
    },
  ];

  // End of dummy data
  return (
    <>
      <Container>
        <h1 className="text-primary text-h1 text-center">Win My Argument</h1>
        <div className="bg-background-secondary  w-auto h-auto py-5 px-5 rounded-md flex flex-col justify-center content-center gap-10">
          <Input type="text" placeholder="Search for a topic" />

          <Answer studiesAmount={studiesAmount} answer={answerContent} />
        </div>
        <Studies studies={studies} />
      </Container>
    </>
  );
}

export default App;
