import styles from "./Pill.module.css"
function Pill({ pillName, handleSetFilters, filters }) {

  return <>
    <button className={styles.container} onClick={() => handleSetFilters(pillName)} style={filters.includes(pillName) ? { backgroundColor: "#579076" } : { backgroundColor: "#D9D9D9" }}>
      {pillName}
    </button>
  </>
}
export default Pill
