import { useState } from 'react';
import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

const SearchFormStyle = styled.div`
  display: flex;
  gap: 4px;
`;

export default function SearchForm() {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <SearchFormStyle>
      <TextField
        id="search-input"
        data-testid="search-input"
        label="input"
        variant="standard"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <Button
        id="search-button"
        data-testid="search-button"
        variant="contained"
        disabled={!searchText.trim()}
      >
        Search
      </Button>
    </SearchFormStyle>
  );
}
