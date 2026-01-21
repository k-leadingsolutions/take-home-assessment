export const paginate = (data, page = 1, limit = 10) => {
  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  
  const startIndex = (pageNum - 1) * limitNum;
  const endIndex = startIndex + limitNum;
  
  const paginatedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / limitNum);
  
  return {
    data: paginatedData,
    pagination: {
      page: pageNum,
      limit: limitNum,
      total: data.length,
      totalPages,
      hasNext: pageNum < totalPages,
      hasPrev: pageNum > 1
    }
  };
};
