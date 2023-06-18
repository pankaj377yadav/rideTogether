import BasicMenu from '@/components/MenuDropdown'
import Map from '@/components/Map'

import React from 'react'
import styles from '../../styles/users.module.css'
const Users = () => {
  return (
    <div>
      <div className={styles.basicMenu}>
      <BasicMenu/>
      </div>

      <Map/>
      </div>
  )
}

export default Users