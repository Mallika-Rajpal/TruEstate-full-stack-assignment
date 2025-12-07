// src/components/SalesTable.jsx
const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2,
});

export default function SalesTable({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No results found. Try adjusting filters or search.
      </div>
    );
  }

  return (
    <div className="overflow-auto border rounded-xl">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Customer</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Region</th>
            <th className="p-2 border">Product</th>
            <th className="p-2 border">Quantity</th>
            <th className="p-2 border">Final Amount</th>
            <th className="p-2 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="p-2 border">{row.customerName}</td>
              <td className="p-2 border">{row.phoneNumber}</td>
              <td className="p-2 border">{row.customerRegion}</td>
              <td className="p-2 border">{row.productName}</td>
              <td className="p-2 border text-right">{row.quantity}</td>
              <td className="p-2 border text-right">
                {currency.format(row.finalAmount ?? 0)}
              </td>
              <td className="p-2 border">{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
