interface StudyType {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  abstract: string;
}

export default function Study({ study }: { study: StudyType }) {
  const { title, authors, journal, year, abstract } = study;
  return (
    <div className="p-4 bg-background-accent rounded-md border border-border hover:border-border-hover transition-colors">
      <h3 className="text-primary font-medium text-lg mb-2">{title}</h3>
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3 text-sm">
        <p className="text-text-muted">{authors}</p>
        <span className="text-text-muted">·</span>
        <p className="text-text-muted">{journal}</p>
        <span className="text-text-muted">·</span>
        <p className="text-text-muted">{year}</p>
      </div>
      <p className="text-text-default text-sm leading-relaxed">{abstract}</p>
    </div>
  );
}
