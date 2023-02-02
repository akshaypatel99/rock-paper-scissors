import { ModalProps } from './Modal';

export default function ModalButton({ showModal, setShowModal }: ModalProps) {
	return (
		<button className='button rules' onClick={() => setShowModal(!showModal)}>
			Rules
		</button>
	);
}
