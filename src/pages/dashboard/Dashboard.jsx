import React from 'react';
import styles from '@/styles/Dashboard.module.css';

function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.columnWrapper}>
        <h2 className={styles.title}>Submitted</h2>
        <div className={styles.column}></div>
      </div>
      <div className={styles.columnWrapper}>
        <h2 className={styles.title}>Processing</h2>
        <div className={styles.column}></div>
      </div>
      <div className={styles.columnWrapper}>
        <h2 className={styles.title}>Completed</h2>
        <div className={styles.column}></div>
      </div>
      <div className={styles.columnWrapper}>
        <h2 className={styles.title}>View</h2>
        <div className={styles.column}></div>
      </div>
    </div>
  );
}

export default Dashboard;