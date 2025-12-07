function paginate(data, page = 1, limit = 10) {
    const total = data.length;
    const validLimit = limit > 0 ? limit : 10;
    let currentPage = page > 0 ? page : 1;
  
    const totalPages = Math.max(1, Math.ceil(total / validLimit));
    if (currentPage > totalPages) currentPage = totalPages;
  
    const start = (currentPage - 1) * validLimit;
    const slice = data.slice(start, start + validLimit);
  
    return {
      total,
      page: currentPage,
      totalPages,
      limit: validLimit,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
      data: slice
    };
  }
  
  module.exports = paginate;
  