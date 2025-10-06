'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import HookGrid from '@/components/HookGrid';
import { Category } from '@/types/hook';
import hooksData from '@/data/hooks.json';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const filteredHooks = useMemo(() => {
    if (selectedCategory === 'All') {
      return hooksData;
    }
    return hooksData.filter(hook => hook.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <HookGrid hooks={filteredHooks} />
      </main>
    </div>
  );
}
