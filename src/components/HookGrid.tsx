import { Hook } from '@/types/hook';
import HookCard from './HookCard';

interface HookGridProps {
  hooks: Hook[];
}

export default function HookGrid({ hooks }: HookGridProps) {
  if (hooks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          No hooks found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hooks.map((hook) => (
        <HookCard key={hook.id} hook={hook} />
      ))}
    </div>
  );
}
