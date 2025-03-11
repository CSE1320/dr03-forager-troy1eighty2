import NavBar from '../../components/NavBar';
import MushroomCardB from '@/components/MushroomCardB';
import styles from "../../styles/MushroomComparisonPage.module.css"
import Link from 'next/link';
import ComparisonTable from '@/components/ComparisonTable';

export default function MushroomComparisonPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="/iphoneStatus.png" className={styles.status} />
        <div className={styles.title}>
          Compare
        </div>
        <Link href="/mushroom" className={styles.back}><img src="/back.png" /></Link>
      </div>
      <div className={styles.content}>
        <div className={styles.WARNING}>
          <div className={styles.warningHeader}><img src='/famicons_warning-outline.png'></img>WARNING</div>
          <p >This is a toxic species, proceed with caution.</p>
        </div>
        <div className={styles.photoCards}>
          <MushroomCardB name="Your Photo" dangerous={false} image="/yourPhoto.jpg"></MushroomCardB>
          <MushroomCardB name="Death Cap" match={97} dangerous={true} image="/deathCap.png"></MushroomCardB>
        </div>
        <div className={styles.table}>
          <ComparisonTable></ComparisonTable>
        </div>
      </div>

      <NavBar />
    </div>
  );
}
