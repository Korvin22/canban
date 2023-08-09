
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css';

function Card() {

	return (
		<section className={styles.card}>
          <h2 className={styles.card__title}>Title Title</h2>
          <button className={styles.card__button_task}> + Создать подзадачу</button> 
		</section>
	);
}

export default Card;
