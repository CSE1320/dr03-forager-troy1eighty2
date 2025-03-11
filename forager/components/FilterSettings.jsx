import styles from "./FilterSettings.module.css"
import PillList from "./PillList"
function FilterSettings({ setFiltersToggle, handleSetFilters, filters }) {

  return <>
    <div className={styles.container}>
      <h2 className={styles.filterHeader}>FILTER</h2>
      <button className={styles.exit}><img src="/X.svg" className={styles.exitImage} onClick={() => setFiltersToggle(false)} /></button>
      <div className={styles.content}>
        <PillList header={"Tags"} options={["Favorites", "Recent"]} handleSetFilters={handleSetFilters} filters={filters}></PillList>
        <PillList header={"Regions"} options={["Texas", "North America", "South America", "Asia", "Europe", "Africa"]} handleSetFilters={handleSetFilters} filters={filters}></PillList>
        <PillList header={"Category"} options={["Poisonous", "Medicinal", "Mythical", "Good for Broths"]} handleSetFilters={handleSetFilters} filters={filters}></PillList>
      </div>
    </div>
  </>
}
export default FilterSettings
