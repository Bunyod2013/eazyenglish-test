"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4 text-center">
      <h2 className="text-2xl font-bold">Xatolik yuz berdi</h2>
      <p className="text-sm text-gray-500 max-w-md">{error.message}</p>
      <button
        onClick={reset}
        className="rounded-lg bg-[#58CC02] px-6 py-2 text-white font-medium"
      >
        Qayta urinish
      </button>
    </div>
  );
}
