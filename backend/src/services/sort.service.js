/**
 * sort:
 * - "date"     → by date (newest first)
 * - "quantity" → by quantity (desc)
 * - "name"     → by customerName (A–Z)
 */
function applySort(data, sortKey) {
    if (!sortKey) return data;
  
    const sorted = [...data];
  
    switch (sortKey) {
      case "date":
        return sorted.sort((a, b) => {
          const da = new Date(a.date);
          const db = new Date(b.date);
          return db - da; // newest first
        });
  
      case "quantity":
        return sorted.sort(
          (a, b) => Number(b.quantity || 0) - Number(a.quantity || 0)
        );
  
      case "name":
        return sorted.sort((a, b) =>
          (a.customerName || "").localeCompare(b.customerName || "")
        );
  
      default:
        return data;
    }
  }
  
  module.exports = applySort;
  