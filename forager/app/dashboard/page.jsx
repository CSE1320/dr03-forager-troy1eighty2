"use client";
import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import MushroomCard from '@/components/MushroomCard';
import styles from "../../styles/Dashboard.module.css";
import Search from "../../components/Search.jsx";
import FilterSettings from "../../components/FilterSettings";
import Pill from "../../components/Pill";
import { useState, useEffect } from "react";
import data from "../../data/mushrooms.js";
import Link from 'next/link';
import { useFavorites } from "../context/FavoritesContext";

export default function DashboardPage() {
  const { favorites } = useFavorites();
  const [filters, setFilters] = useState([]);
  const [filtersToggle, setFiltersToggle] = useState(false);
  const [mushrooms, setMushrooms] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredMushrooms, setFilteredMushrooms] = useState([]);

  // Function to toggle filters
  const handleSetFilters = (name) => {
    setFilters((prevFilters) =>
      prevFilters.includes(name)
        ? prevFilters.filter((filter) => filter !== name)
        : [...prevFilters, name]
    );
  };

  // Handle search input change
  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  // Filter mushrooms based on search input
  useEffect(() => {
    const filtered = mushrooms.filter((mushroom) =>
      mushroom.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMushrooms(filtered);
  }, [search, mushrooms]);

  // Initialize mushrooms from data
  useEffect(() => {
    setMushrooms(data);
    setFilteredMushrooms(data);
  }, []);

  return (
    <div className={styles.container}>
      {/* Filter settings overlay */}
      <div className={styles.pilllist} style={filtersToggle ? { display: "flex" } : { display: "none" }}>
        <FilterSettings setFiltersToggle={setFiltersToggle} handleSetFilters={handleSetFilters} filters={filters} />
      </div>

      {/* Header */}
      <div className={styles.header}>
        <img src="/dashboard_mushroom.png" className={styles.dashboardMushroom} />
        <img src="/iphoneStatus.png" className={styles.status} />
        <div className={styles.title}>
          <h2 className={styles.h2}>Hi,</h2>
          <div className={styles.titleSecondLine}>
            <h1 className={styles.h1}>Chantelle!</h1>
            <img className={styles.profilePicture} src="/profile.png" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={styles.main}>
        <div className={styles.searchBar}>
          <Search setFiltersToggle={setFiltersToggle} handleOnChange={handleOnChange} search={search} />
        </div>

        <h2 className={styles.collectionHeader}>My Collection</h2>

        {/* Filters */}
        <div className={styles.filters}>
          {filters.map((item, index) => (
            <Pill key={index} pillName={item} handleSetFilters={handleSetFilters} filters={filters} />
          ))}
        </div>

        {/* Gallery */}
        <div className={styles.gallery}>
          {/* If 'Favorites' is selected, show only favorites */}
          {filters.includes("Favorites") ? (
            favorites.length > 0 ? (
              favorites.map((item, index) => (
                <Link className={styles.mushroom} key={index} href="/mushroom">
                  <MushroomCard name={item.name} match={null} dangerous={item.dangerous} image={item.image} />
                </Link>
              ))
            ) : (
              <p className={styles.noResults}>No favorites found.</p>
            )
          ) : (
            filteredMushrooms.length > 0 ? (
              filteredMushrooms.map((item, index) => (
                <Link className={styles.mushroom} key={index} href="/mushroom">
                  <MushroomCard name={item.name} match={null} dangerous={item.dangerous} image={item.url} />
                </Link>
              ))
            ) : (
              <p className={styles.noResults}>No mushrooms found.</p>
            )
          )}
        </div>
      </div>

      <NavBar />
    </div>
  );
}

