import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const updateQueryString = e => {
    const searchValue = e.target.value;
    if (searchValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: searchValue });
  };
  // filter
  // const visibleDogs = dogs.filter(dog => dog.includes(dogId))

  return (
    <div>
      <input type="text" value={searchQuery} onChange={updateQueryString} />
      <button>Search</button>
    </div>
  );
};
