import React from 'react';

import styles from './TableComponent.module.css';

export default function TableComponent({data, setProjectDetails}) {
  return (
    <ul className={styles.list}>
      {data.map((project) => (
        <li
          className={styles.item}
          key={project.id}
          onClick={() => setProjectDetails(project)}>
          <img className={styles.img} src={project.photo} alt="Фото проекту" />
          <span>{project.name}</span>
        </li>
      ))}
    </ul>
  );
}
