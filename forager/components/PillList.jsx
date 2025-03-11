import styles from "./PillList.module.css"
import Pill from "./Pill"
function PillList({ header, options, handleSetFilters, filters }) {

  return <>
    <div className={styles.container}>
      <h1 className={styles.tagsHeader}>{header}</h1>
      <ul className={styles.pills}>
        {options.map((item, index) =>
          <Pill pillName={item} key={index} handleSetFilters={handleSetFilters} filters={filters}></Pill>
        )}
      </ul>
    </div>
  </>
}
export default PillList
