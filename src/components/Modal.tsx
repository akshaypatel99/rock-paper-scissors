import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.css';
import { useGameData } from '../context/GameState';

export type ModalProps = {
	showModal: boolean;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ showModal, setShowModal }: ModalProps) {
	const [state, dispatch] = useGameData();
	const ref: any = useRef(null);

	useEffect(() => {
		function handleEscapeModal(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				setShowModal(!showModal);
			}
			return;
		}

		window.addEventListener('keydown', handleEscapeModal);

		if (showModal) {
			ref.current?.showModal();
		} else {
			ref.current?.close();
		}

		return () => window.removeEventListener('keydown', handleEscapeModal);
	}, [showModal]);

	return (
		<dialog ref={ref} className={styles.modal}>
			<section className={styles.modal_container}>
				<h2 className={styles.modal_title}>Rules</h2>
				<button
					className={styles.modal_close}
					onClick={() => setShowModal(!showModal)}>
					<img src='/images/icon-close.svg' alt='' />
					<span className='sr-only'>Close Modal</span>
				</button>

				<img
					className={styles.modal_img}
					src={
						state.mode === 'classic'
							? '/images/image-rules.svg'
							: '/images/image-rules-bonus.svg'
					}
					alt='Rock beats scissors, scissors beats paper, paper beats rock'
				/>
			</section>
		</dialog>
	);
}
