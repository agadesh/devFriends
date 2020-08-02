import React from 'react';

const SearchBox = ({ onSearch }) => {
  return (
    <div>
      <input onChange={onSearch} type='search' placeholder='Search Devs' className='ma3 pa2 ba bw1 br2 b--navy shadow-5 bg-light-blue f4 navy b tc w-50' />
    </div>
  );
};

export default SearchBox;
