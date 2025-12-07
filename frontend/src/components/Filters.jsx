// src/components/Filters.jsx
export default function Filters({ params, update }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl border">
      {/* Gender */}
      <select
        value={params.gender}
        onChange={(e) => update("gender", e.target.value)}
        className="border rounded-lg px-3 py-2 text-sm"
      >
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      {/* Region */}
      <input
        type="text"
        placeholder="Customer Region"
        value={params.region}
        onChange={(e) => update("region", e.target.value)}
        className="border rounded-lg px-3 py-2 text-sm"
      />

      {/* Product Category */}
      <input
        type="text"
        placeholder="Product Category"
        value={params.category}
        onChange={(e) => update("category", e.target.value)}
        className="border rounded-lg px-3 py-2 text-sm"
      />

      {/* Payment Method */}
      <input
        type="text"
        placeholder="Payment Method"
        value={params.payment}
        onChange={(e) => update("payment", e.target.value)}
        className="border rounded-lg px-3 py-2 text-sm"
      />

      {/* Tags */}
      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={params.tags}
        onChange={(e) => update("tags", e.target.value)}
        className="border rounded-lg px-3 py-2 text-sm"
      />

      {/* Age range */}
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Age min"
          value={params.ageMin}
          onChange={(e) => update("ageMin", e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm w-1/2"
        />
        <input
          type="number"
          placeholder="Age max"
          value={params.ageMax}
          onChange={(e) => update("ageMax", e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm w-1/2"
        />
      </div>

      {/* Date range */}
      <div className="flex gap-2">
        <input
          type="date"
          value={params.startDate}
          onChange={(e) => update("startDate", e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm w-1/2"
        />
        <input
          type="date"
          value={params.endDate}
          onChange={(e) => update("endDate", e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm w-1/2"
        />
      </div>
    </div>
  );
}
