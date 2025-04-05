import styles from "./friendBox.module.css";
import { useState } from "react";
function chatBox() {
  return (
    <>
      <aside className={`${styles.asideContainer}`}>
        <h1 className={styles.status}>Online</h1>

        <div className={styles.friends}>
          <img
            src="https://img.freepik.com/free-vector/creative-nerd-logo-template_23-2149218771.jpg?ga=GA1.1.1391464815.1739253387&semt=ais_hybrid"
            alt=""
          />
          <h1 className={styles.friendName}>MY NEIGGBOR</h1>
        </div>

        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search friend" />
          <button>
            <img
              src="https://img.freepik.com/premium-vector/blue-magnifying-glass-is-shown-blue-circle_809378-238.jpg?ga=GA1.1.1391464815.1739253387&semt=ais_hybrid"
              alt=""
            />
          </button>
        </div>
      </aside>
    </>
  );
}
export default chatBox;
