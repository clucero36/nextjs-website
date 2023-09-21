import React from 'react';
import styles from './projectcard.module.css';
import Image from 'next/image';

export default function ProjectCard({name, description, src, link, git}) {
  return (
    <>
      {
        git === '#' ? (
          <div className={styles.card}>
            <Image 
              className={styles.image}
              src={src}
              width={320}
              height={200}
              alt='project image'
            />
            <div className={styles.container}>
              <div>{name}</div>
              <div>{description}</div>
              <div style={{display: 'flex', justifyContent: 'space-around'}} >
                <a href={link} target="_blank">Live</a>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.card}>
            <Image 
              className={styles.image}
              src={src}
              width={320}
              height={200}
              alt='project image'
            />
            <div className={styles.container}>
              <div>{name}</div>
              <div>{description}</div>
              <div className={styles.links}>
                <a href={link} target="_blank">Live</a>
                <a href={git} target="_blank">Git</a>
              </div>
            </div>
          </div>
        )
      }
    </>
    
  )
}
