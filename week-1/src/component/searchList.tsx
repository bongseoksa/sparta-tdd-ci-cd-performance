import React from 'react';

const SearchList = ({ items }: { items: string[] }) => {
  return (
    <ol>
      {items.map((item, index) => (
        <li key={index} data-testid="item">
          {item}
        </li>
      ))}
    </ol>
  );
};

export default SearchList;
