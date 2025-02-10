import { useState } from 'react';
import { getSearch } from './api/searchApi';
import SearchForm from './component/searchForm';
import SearchList from './component/searchList';

function App() {
  const [searchItems, setSearchItems] = useState<string[]>([]);
  const onSearch = async (query: string) => {
    const { items } = await getSearch({ query });
    setSearchItems(items);
  };

  return (
    <>
      <SearchForm onSearch={onSearch} />
      <SearchList items={searchItems} />
    </>
  );
}

export default App;
