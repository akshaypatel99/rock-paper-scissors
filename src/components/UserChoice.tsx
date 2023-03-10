import styles from './UserChoice.module.css';
import Shape from './Shape';

export default function UserChoice() {
	return (
		<div className={styles.choice_container}>
			<div className={styles.choice_wrapper_paper}>
				<Shape shapeOption='paper' isPick={false} />
			</div>
			<div className={styles.choice_wrapper_rock}>
				<Shape shapeOption='rock' isPick={false} />
			</div>
			<div className={styles.choice_wrapper_scissors}>
				<Shape shapeOption='scissors' isPick={false} />
			</div>
		</div>
	);
}
