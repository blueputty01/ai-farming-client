import { useEffect, useState } from 'react';
import { SearchRes } from '../../shared/api';
import Server from '../../shared/api';
import Item from './Item';
import { Search } from 'react-router-dom';

export default function Browse() {
  const s = new Server();

  const [results, setResults] = useState([] as SearchRes[]);

  const Items = results.map((d: SearchRes) => {
    return (
      <Item
        key={d.farmId.toString()}
        image={d.imgBase64}
        price={d.itemPrice}
        desc={d.productDescription}
      ></Item>
    );
  });

  const search = (input: string) => {
    s.search(input);
  };

  // function SearchButton() {
  //   return (
  //     <button
  //       onClick={search}
  //       className="transition-colors duration-150 btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
  //       type="button"
  //       id="button-addon2"
  //     >
  //       <svg
  //         aria-hidden="true"
  //         focusable="false"
  //         data-prefix="fas"
  //         data-icon="search"
  //         className="w-4"
  //         role="img"
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 512 512"
  //       >
  //         <path
  //           fill="currentColor"
  //           d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
  //         ></path>
  //       </svg>
  //     </button>
  //   );
  // }

  function Search() {
    // const getInput = (event: ) => {
    //   const input = event.target.value;
    //   search(input);
    // };

    return (
      <div className="input-group relative flex items-stretch w-full mb-4">
        <form onSubmit={search}>
          <input
            type="text"
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          ></input>
        </form>
      </div>
    );
  }
  return (
    <div className="flex justify-center pt-10">
      <div className="mb-3 xl:w-96">
        <Search></Search>
        {Items}
      </div>
    </div>
  );
}
function handleChange(event: Event | undefined) {
  throw new Error('Function not implemented.');
}
