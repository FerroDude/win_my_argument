interface AnswerProps {
  answer: string;
  studiesAmount: number;
}

export default function Answer({ answer, studiesAmount }: AnswerProps) {
  return (
    <div className="h-auto px-4 py-3 bg-background-accent rounded-md border ">
      <h2 className="text-primary text-h4 pb-2">AI-Generated Answer</h2>
      {answer}
      <p className="text-text-muted pt-3">Generated from {studiesAmount} research papers</p>
    </div>
  );
}
