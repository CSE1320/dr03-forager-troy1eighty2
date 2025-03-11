import styles from "./MushroomCardB.module.css"
function MushroomCardB({ name, match, dangerous, image }) {
  return <>
    <div className={styles.container}>
      <img className={styles.photo} src={image} >
      </img>
      {dangerous ?
        <div className={styles.header}>
          <img className={styles.skull} src="/skull.svg"></img>
          <div className={styles.percentage}>
            <img src="/famicons_warning-outline.png" />
            <p>{`${match}% Match`}</p>
          </div>
        </div> : null
      }

      <p className={styles.name}>{name}</p>
    </div>
  </>

}
export default MushroomCardB;
