import React from 'react'
import { Link } from "react-router-dom";
import styles from './icon.module.css';

const Icon = () => {
  return (
    <div className={styles.divImg}>
       <Link to={'/'}>
        <img  src={"https://www.freelogovectors.net/wp-content/uploads/2020/09/mercado-libre-logo.png"} className={styles.imgIcon}>
        </img>
       </Link>
    </div>
  )
}

export default Icon;