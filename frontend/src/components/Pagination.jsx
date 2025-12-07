// src/components/Pagination.jsx
export default function Pagination({ meta, onPageChange }) {
  if (!meta || meta.total === 0) return null;

  return (
    <div className="flex justify-between items-center mt-4 text-sm">
      <button
        disabled={!meta.hasPrevPage}
        onClick={() => onPageChange(meta.page - 1)}
        className="px-3 py-2 border rounded-lg disabled:bg-gray-200 disabled:text-gray-400"
      >
        Previous
      </button>

      <span className="text-gray-700">
        Page {meta.page} of {meta.totalPages} • {meta.total} records
      </span>

      <button
        disabled={!meta.hasNextPage}
        onClick={() => onPageChange(meta.page + 1)}
        className="px-3 py-2 border rounded-lg disabled:bg-gray-200 disabled:text-gray-400"
      >
        Next
      </button>
    </div>
  );
}
