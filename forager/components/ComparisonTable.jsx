import styles from "./ComparisonTable.module.css"
function ComparisonTable() {
  return <>
    <div className={styles.container}>
      <div className={styles.column}>
        <ul className={styles.list}>
          <li>
            <input name="shape" type="text" className={styles.input} placeholder="Flat" />
            <img src="/inputX.png" className={styles.img} />
          </li>
          <li>
            <input name="color" type="text" className={styles.input} placeholder="Brown" />
            <img src="/inputX.png" className={styles.img} />
          </li>
          <li>
            <input name="texture" type="text" className={styles.input} placeholder="Smooth" />
            <img src="/inputX.png" className={styles.img} />
          </li>
          <li>
            <input name="type" type="text" className={styles.input} placeholder="Free" />
            <img src="/inputX.png" className={styles.img} />
          </li>
          <li>
            <input name="colors" type="text" className={styles.input} placeholder="White" />
            <img src="/inputX.png" className={styles.img} />
          </li>
          <li>
            <input name="shapes" type="text" className={styles.input} placeholder="Slender" />
            <img src="/inputX.png" className={styles.img} />
          </li>
          <li>
            <input name="stemColors" type="text" className={styles.input} placeholder="White" />
            <img src="/inputX.png" className={styles.img} />
          </li>
          <li>
            <input name="ring" type="text" className={styles.input} placeholder="Absent" />
            <img src="/inputX.png" className={styles.img} />
          </li>
          <li>
            <input name="habitat" type="text" className={styles.input} placeholder="?" />
            <img src="/inputX.png" className={styles.img} />
          </li>
        </ul>
      </div>
      <div className={`${styles.column} ${styles.columnCenter}`}>
        <ul className={styles.list}>
          <li>
            Cap Shape
          </li>
          <li>
            Cap Color
          </li>
          <li>
            Cap Texture
          </li>
          <li>
            Gills Type
          </li>
          <li>
            Gills Color
          </li>
          <li>
            Stem Shape
          </li>
          <li>
            Stem Color
          </li>
          <li>
            Stem Ring
          </li>
          <li>
            Habitat
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <ul className={styles.list}>
          <li>
            Flat
          </li>
          <li>
            Yellow
          </li>
          <li>
            Smooth
          </li>
          <li>
            Free
          </li>
          <li>
            White
          </li>
          <li>
            Slender
          </li>
          <li>
            White
          </li>
          <li>
            Absent
          </li>
          <li>
            Near oak/ beech
          </li>
        </ul>
      </div>
    </div >
  </>


}
export default ComparisonTable;
