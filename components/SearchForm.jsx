import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import styles from "@/styles/SearchForm.module.css";

const SearchForm = () => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [department, setDepartment] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`/search?description=${description}&location=${location}&department=${department}`);
    
  };
  
  return (
    <div className={styles.formContainer}>
      
      <form className={styles.form} onSubmit={handleSubmit}>

      <h4>Session ID</h4>
        <div className={styles.input}>
                1029290
        </div>
        <h4>Data</h4>
        <select 
          value={location}
          onChange={(e) => setDate(e.target.value)}
          className={styles.input}
        >
          <option value="" disabled>Select Date</option>
          <option value="">Date 1</option>
          <option value="2">Date 2</option>
          <option value="3">Date 3</option>
        </select>

        <h4>Department</h4>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className={styles.input}
        >
          <option value="" disabled>e.g. Grocery</option>
          <option value="department1">Department 1</option>
          <option value="department2">Department 2</option>
          <option value="department3">Department 3</option>
        </select>
        
        <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className={styles.input}
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;