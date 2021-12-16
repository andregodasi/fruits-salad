import React, { useState, useEffect } from "react";

export default function FruitsSaladWithHook({ fruits }) {
  const [list, setList] = useState([...fruits]);
  const [listSearch, setListSearch] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setListSearch([...list]);
  }, [list]);

  useEffect(() => {
    setListSearch(search ? list.filter((text) => text.includes(search)) : list);
  }, [list, search]);

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function handleAddFruit(e) {
    e.preventDefault();
    setList([...list, search]);
    setSearch("");
  }

  return (
    <div>
      <h1>Salada de frutas 🥗</h1>
      <input value={search} onChange={handleSearchChange} />
      {listSearch.length <= 0 && (
        <button type="button" onClick={handleAddFruit}>
          Adicionar fruta
        </button>
      )}
      <ul>
        {listSearch.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
