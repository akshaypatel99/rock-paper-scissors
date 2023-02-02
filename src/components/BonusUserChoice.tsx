import styles from './BonusUserChoice.module.css';
import Shape from './Shape';

export default function BonusUserChoice() {
	return (
		<div className={styles.choice_container}>
			<div className={styles.choice_wrapper_spock}>
				<Shape shapeOption='spock' isPick={false} isBonus={true} />
			</div>
			<div className={styles.choice_wrapper_lizard}>
				<Shape shapeOption='lizard' isPick={false} isBonus={true} />
			</div>
			<div className={styles.choice_wrapper_scissors}>
				<Shape shapeOption='scissors' isPick={false} isBonus={true} />
			</div>
			<div className={styles.choice_wrapper_rock}>
				<Shape shapeOption='rock' isPick={false} isBonus={true} />
			</div>
			<div className={styles.choice_wrapper_paper}>
				<Shape shapeOption='paper' isPick={false} isBonus={true} />
			</div>
		</div>
	);
}
