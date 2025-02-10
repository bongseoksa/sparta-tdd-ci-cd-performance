import { MouseEventHandler, useState } from 'react';
import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

const SearchFormStyle = styled.div`
  display: flex;
  gap: 4px;
`;

export default function SearchForm({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <SearchFormStyle>
      <TextField
        id="search-input"
        label="input"
        variant="standard"
        value={searchText}
        inputProps={{
          'data-testid': 'search-input',
        }}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <Button
        id="search-button"
        data-testid="search-button"
        variant="contained"
        disabled={!searchText.trim()}
        onClick={() => onSearch(searchText)}
      >
        Search
      </Button>
    </SearchFormStyle>
  );
}
