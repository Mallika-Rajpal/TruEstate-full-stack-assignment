const { getSalesData } = require("../utils/loadData");
const applySearch = require("./search.service");
const applyFilters = require("./filter.service");
const applySort = require("./sort.service");
const paginate = require("./pagination.service");

/**
 * Orchestrates search → filters → sort → pagination
 */
function getSalesList({ search, filters, sort, page, limit }) {
  const all = getSalesData();

  // 1) Search
  let result = applySearch(all, search);

  // 2) Filters
  result = applyFilters(result, filters);

  // 3) Sort
  result = applySort(result, sort);

  // 4) Pagination
  const paginated = paginate(result, page, limit);

  return paginated;
}

module.exports = { getSalesList };
