import Container from './components/Container';
import { Input } from './components/ui/input.tsx';
import { Button } from './components/ui/button.tsx';
import Answer from './components/Answer.tsx';
import Studies from './components/Studies.tsx';
import { useState } from 'react';
//dummy data
import { studies, studiesAmount, answerContent } from './dummyData.json';

function App() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      //Fetch data
      console.log('Fetching data...');
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(error);
    }
    console.log('Form submitted');
    setIsLoading(false);
  };

  return (
    <>
      <Container>
        <h1 className="text-primary text-h1 text-center">Win My Argument</h1>
        <form onSubmit={handleFormSubmit} className="flex flex-col items-center gap-4">
          <Input
            onChange={handleSearchInput}
            value={searchInput}
            type="text"
            placeholder="Search for a topic"
          />
          <Button type="submit" className="" variant="default">
            {isLoading ? 'Loading...' : 'Search'}
          </Button>
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
