'use client';

export default function CommunityError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">문제가 발생했습니다</h2>
      <p className="text-gray-500">페이지를 불러오는 중 오류가 발생했습니다.</p>
      <button
        onClick={reset}
        className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
      >
        다시 시도
      </button>
    </div>
  );
}
