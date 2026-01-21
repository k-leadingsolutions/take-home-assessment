export const applyFilters = (data, filters = {}) => {
  let filtered = [...data];
  
  Object.keys(filters).forEach(key => {
    const value = filters[key];
    
    if (value !== undefined && value !== null && value !== '') {
      filtered = filtered.filter(item => {
        const itemValue = item[key];
        
        if (typeof itemValue === 'string') {
          return itemValue.toLowerCase().includes(value.toString().toLowerCase());
        }
        
        if (typeof itemValue === 'number') {
          return itemValue === parseFloat(value);
        }
        
        if (Array.isArray(itemValue)) {
          return itemValue.includes(value);
        }
        
        return itemValue === value;
      });
    }
  });
  
  return filtered;
};

export const applySort = (data, sortField = 'id', order = 'asc') => {
  if (!sortField) return data;
  
  return [...data].sort((a, b) => {
    let aValue = a[sortField];
    let bValue = b[sortField];
    
    if (aValue === undefined || aValue === null) return 1;
    if (bValue === undefined || bValue === null) return -1;
    
    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }
    
    if (aValue < bValue) {
      return order === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
};
