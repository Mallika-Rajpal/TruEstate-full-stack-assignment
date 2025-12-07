const { getSalesList } = require("../services/sales.service");

/**
 * GET /api/sales
 * Supports query params:
 * - search
 * - page
 * - sort (date | quantity | name)
 * - gender, region, category, payment, tags
 * - ageMin, ageMax
 * - startDate, endDate
 */
exports.getSales = (req, res) => {
  try {
    const {
      search = "",
      page = "1",
      sort = "",
      gender,
      region,
      category,
      payment,
      tags,
      ageMin,
      ageMax,
      startDate,
      endDate
    } = req.query;

    const filters = {
      gender: toArray(gender),
      region: toArray(region),
      category: toArray(category),
      payment: toArray(payment),
      tags: toArray(tags),
      ageMin: ageMin ? Number(ageMin) : null,
      ageMax: ageMax ? Number(ageMax) : null,
      startDate: startDate || null,
      endDate: endDate || null
    };

    const pageNumber = Number(page) || 1;

    const result = getSalesList({
      search,
      filters,
      sort,
      page: pageNumber,
      limit: 10
    });

    res.json(result);
  } catch (err) {
    console.error("Error in getSales:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Convert query param to array:
 * - "a,b,c" → ["a","b","c"]
 * - ["a","b"] (already array) → same
 */
function toArray(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.filter(Boolean);
  return String(value)
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);
}
