// components/Container.tsx
interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col justify-center content-center gap-10 max-w-7xl mx-auto py-10 px-10">
      {children}
    </div>
  );
}
