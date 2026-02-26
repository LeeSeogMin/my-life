'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const categories = [
  { key: 'research', label: '연구' },
  { key: 'lectures', label: '강의' },
];

export default function CategoryTabs() {
  const searchParams = useSearchParams();
  const current = searchParams.get('category') || 'research';

  return (
    <div className="flex gap-2">
      {categories.map((cat) => (
        <Link
          key={cat.key}
          href={`/community?category=${cat.key}`}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
            current === cat.key
              ? 'bg-gray-900 text-white'
              : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
          }`}
        >
          {cat.label}
        </Link>
      ))}
    </div>
  );
}
