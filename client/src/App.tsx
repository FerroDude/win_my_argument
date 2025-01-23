import Container from './components/Container';
import { Input } from './components/ui/input.tsx';
import { useRef } from 'react';
import Answer from './components/Answer.tsx';
import Studies from './components/Studies.tsx';
import { useState } from 'react';
//dummy data
import { studies, studiesAmount, answerContent } from './dummyData.json';

function App() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      console.log('Form submitted');
    }
  };

  return (
    <>
      <Container>
        <h1 className="text-primary text-h1 text-center">Win My Argument</h1>
        <form
          ref={formRef}
          onSubmit={handleFormSubmit}
          className="flex flex-col items-center gap-4"
        >
          <Input
            formRef={formRef}
            onChange={handleSearchInput}
            value={searchInput}
            type="text"
            placeholder="Search for a topic"
            isLoading={isLoading}
          />
        </form>
        <div className="bg-background-secondary  w-auto h-auto py-5 px-5 rounded-md flex flex-col justify-center content-center gap-10">
          <Answer studiesAmount={studiesAmount} answer={answerContent} />
        </div>
        <Studies studies={studies} />
      </Container>
    </>
  );
}

export default App;
