"use client";
import styles from "../styles/Search.module.css"
import { useEffect, useState } from "react"
function Search({ setFiltersToggle, handleOnChange, search }) {


  return <>
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <img src="/search.svg" className={styles.magnifyingGlass} />
        <input className={styles.search} type="text" value={search} placeholder="Search for a mushroom" onChange={handleOnChange} />
      </div>
      <button >
        <img src="/filter_icon.svg" className={styles.filter} onClick={() => setFiltersToggle(true)} />
      </button>

    </div>
  </>
}
export default Search
