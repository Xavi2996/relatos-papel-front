import { useState } from 'react';

const useSearch = (items, key) => {
  const [searchTerm, setSearchTerm] = useState('');

  console.log(items, key);
  console.log(searchTerm);

  const filteredItems = items.filter(item =>
    item[key].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    searchTerm,
    setSearchTerm,
    filteredItems,
  };
};

export default useSearch;