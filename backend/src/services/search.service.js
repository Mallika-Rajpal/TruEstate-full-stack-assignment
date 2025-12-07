/**
 * Full-text search on:
 * - customerName
 * - phoneNumber
 * Case-insensitive, substring match.
 */
function applySearch(data, query) {
  if (!query) return data;

  const q = String(query).toLowerCase();

  return data.filter((item) => {
    const name = (item.customerName || "").toLowerCase();
    const phone = (item.phoneNumber || "").toLowerCase();
    return name.includes(q) || phone.includes(q);
  });
}

module.exports = applySearch;
