import { useScrollProgress } from '../hooks/useScrollProgress';

export const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div
      className="progress-bar"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
};
