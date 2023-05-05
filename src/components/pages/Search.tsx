import React from 'react';
import SimpleTemplate from '../templates/SimpleTemplate';
import HeaderSearch from '../organisms/HeaderSearch';
import {ResultSearch} from '../organisms/ResultSearch';

const Search = () => {
  return (
    <SimpleTemplate>
      <HeaderSearch />
      <ResultSearch />
    </SimpleTemplate>
  );
};

export default Search;
