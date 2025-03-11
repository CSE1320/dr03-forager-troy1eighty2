import Link from "next/link";
import styles from "../../styles/PhotoSearch.module.css"
function PhotoSearch() {

  return <>


    <div className={styles.container}>
      <img className={styles.img} src="/PhotoSearch.png" alt="sample capture of a mushroom" />
      <Link href="/dashboard" className={styles.button}></Link>
      <Link href="/mushroom" className={styles.buttonMushroom}></Link>

    </div>

  </>
}
export default PhotoSearch;
