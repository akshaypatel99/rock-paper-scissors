import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.css';

type ModalProps = {
	showModal: boolean;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ showModal, setShowModal }: ModalProps) {
	const ref: any = useRef(null);

	useEffect(() => {
		if (showModal) {
			ref.current?.showModal();
		} else {
			ref.current?.close();
		}
	}, [showModal]);

	return (
		<dialog ref={ref} className={styles.modal}>
			<header className={styles.modal_header}>
				<h2 className={styles.modal_title}>Rules</h2>
				<button
					className={styles.modal_close}
					onClick={() => setShowModal(!showModal)}>
					<img src='/images/icon-close.svg' alt='' />
					<span className='sr-only'>Close Modal</span>
				</button>
			</header>
			<img
				className={styles.modal_img}
				src='/images/image-rules.svg'
				alt='Rock beats scissors, scissors beats paper, paper beats rock'
			/>
		</dialog>
	);
}
