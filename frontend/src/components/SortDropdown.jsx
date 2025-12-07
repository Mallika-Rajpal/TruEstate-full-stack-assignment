// src/components/SortDropdown.jsx
export default function SortDropdown({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500">Sort:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded-lg px-3 py-2 text-sm"
      >
        <option value="">None</option>
        <option value="date">Date (Newest First)</option>
        <option value="quantity">Quantity</option>
        <option value="name">Customer Name (A–Z)</option>
      </select>
    </div>
  );
}
