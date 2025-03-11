
import styles from "./MushroomCard.module.css";

function MushroomCard({ name, match, dangerous, image }) {
  // ✅ Function to determine color based on match percentage
  const matchColor = () => {
    if (match > 89) return styles.green; // Green if over 89%
    if (match > 70) return styles.red;   // Red if over 70%
    return styles.gray;                  // Gray otherwise
  };

  return (
    <div className={styles.container}>
      <img className={styles.photo} src={image} alt={`${name} mushroom`} />

      {match ? (
        <div className={`${styles.percentage} ${matchColor()}`}>
          {`${match}%`}
        </div>
      ) : null}

      {dangerous ? (
        <div className={styles.warn}>
          <img src="/warn.png" className={styles.warnImage} alt="Warning" />
        </div>
      ) : null}

      <p className={styles.name}>{name}</p>
    </div>
  );
}

export default MushroomCard;
