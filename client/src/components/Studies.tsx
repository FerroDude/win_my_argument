import Study from './Study';

interface Study {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  abstract: string;
}

interface Studies {
  studies: Study[];
}

export default function Studies({ studies }: Studies) {
  return (
    <div className="bg-background-secondary w-auto py-6 px-6 rounded-md">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-primary text-h4">Studies</h2>
        <span className="px-2.5 py-0.5 text-sm rounded-full bg-background-accent text-text-muted">
          {studies.length}
        </span>
      </div>
      <div className="flex flex-col gap-6">
        {studies.map(study => (
          <Study key={study.id} study={study} />
        ))}
      </div>
    </div>
  );
}
