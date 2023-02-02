import Shape from './Shape';
import styles from './Pick.module.css';

export default function Pick({
	title,
	shape,
	isWinner,
}: {
	title: string;
	shape: string;
	isWinner: boolean;
}) {
	return (
		<div className={styles.pick}>
			<p className={styles.title}>{title}</p>
			<Shape shapeOption={shape} isPick={true} isWinner={isWinner} />
		</div>
	);
}
