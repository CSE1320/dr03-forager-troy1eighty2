"use client";
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import styles from "../../styles/Mushroom.module.css"
import MushroomCardB from '@/components/MushroomCardB';
import MushroomList from '@/components/MushroomList';
import Message from '@/components/Message';
import { useState } from 'react';
import { useFavorites } from "../context/FavoritesContext";

export default function MushroomPage() {
  const [disclaimerShown, setDisclaimerShown] = useState(true);
  const { favorites, addFavorite } = useFavorites();

  const handleAddFavorites = () => {
    addFavorite({
      name: "Death Cap",
      scientific: "Amanita phalloides",
      image: "/deathCap.png",
    });
    console.log("Added to favorites:", favorites);
  };

  return (
    <div className={styles.container}>
      <div className={styles.blur} style={disclaimerShown ? { display: "flex" } : { display: "none" }}>
        <div className={styles.attention}>
          <button className={styles.exit} onClick={() => setDisclaimerShown(false)}>
            <img src="/X.png" />
          </button>
          <Message />
        </div>
      </div>
      <div className={styles.header}>
        <img src="/iphoneStatus.png" className={styles.status} />
        <div className={styles.title}>Match Results</div>
        <Link href="/dashboard" className={styles.back}><img src="/back.png" /></Link>
      </div>
      <div className={styles.content}>
        <div className={styles.reportError}>
          <p className={styles.notWhatYou}>Not what you expected?</p>
          <button className={styles.reportButton}>
            <p>Report Error</p>
            <img src="/forward.png" />
          </button>
        </div>
        <div className={styles.WARNING}>
          <div className={styles.warningHeader}>
            <img src='/famicons_warning-outline.png' /> WARNING
          </div>
          <p>This is a toxic species, proceed with caution.</p>
        </div>
        <Link href="/comparison" className={styles.compare}>{`Compare >`}</Link>
        <div className={styles.mushroomCard}>
          <MushroomCardB match={97} dangerous={true} image="/deathCap.png" />
        </div>
        <div className={styles.addToFavorites}>
          <div className={styles.name}>
            <p className={styles.common}>Death Cap</p>
            <i className={styles.scientific}>Amanita phalloides</i>
          </div>
          <button onClick={handleAddFavorites}>
            <img src='/add.png' />
          </button>
        </div>
        <div className={styles.fastFacts}>
          <p className={styles.factsHeader}>Fast Facts</p>
          <ul className={styles.facts}>
            <li className={styles.factsItem}>Cap Diameter: 5-15cm</li>
            <li className={styles.factsItem}>Gill Color: White</li>
            <li className={styles.factsItem}>Stem Color: White</li>
            <li className={styles.factsItem}>Habitat: Temperate regions</li>
          </ul>
        </div>
        <div className={styles.details}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <MushroomList />
      </div>

      <NavBar />
    </div>
  );
}

