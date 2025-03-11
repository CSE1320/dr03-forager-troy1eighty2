import styles from "./MushroomList.module.css";
import MushroomCard from "./MushroomCard.jsx";
function MushroomList() {

  return <>
    <div className={styles.container}>
      <h1 className={styles.header}>Similar Matches</h1>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <MushroomCard name={"Paddy Straw"} match={90} dangerous={false} image={"/paddyStraw.png"}></MushroomCard>
        </li>
        <li className={styles.listItem}>
          <MushroomCard name={"Destroying Angel"} match={80} dangerous={true} image={"/destroyingAngel.png"}></MushroomCard>
        </li>
        <li className={styles.listItem}>
          <MushroomCard name={"False Death Cap"} match={70} dangerous={true} image={"/falseDeathCap.png"}></MushroomCard>
        </li>
        <li className={styles.listItem}>
          <MushroomCard name={"Puffball"} match={60} dangerous={false} image={"/puffball.png"}></MushroomCard>
        </li>
      </ul>
    </div>
  </>
}
export default MushroomList;
