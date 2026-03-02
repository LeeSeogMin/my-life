'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const categories = [
  { key: 'research', label: '연구' },
  { key: 'nlp', label: '딥러닝자연어처리' },
  { key: 'web', label: '웹프로그래밍' },
  { key: 'planning', label: '기획분석' },
  { key: 'data', label: '데이터사이언스' },
  { key: 'survey', label: '사회조사분석' },
  { key: 'agent', label: 'AI에이전트' },
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
