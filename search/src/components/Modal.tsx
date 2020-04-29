import React from 'react';
import { ICountry } from '../interfaces/country';

import '../styles/modal.css';

type ModalProps = {
    hide: boolean,
    closeModal(event: React.MouseEvent): void,
    selectedCountry: ICountry | null
}

const Modal: React.FC<ModalProps> = ({ hide, closeModal, selectedCountry }) => {

    return (
        <React.Fragment>
            <div className="modal">
                <div className={`modal-overlay ${hide ? 'modal-overlay-hide' : 'modal-overlay-show'}`}>
                    <div className={`modal-window ${hide ? 'modal-hide' : 'modal-show'}`}>
                        <div className="modal-header">
                            <span className="modal-title">Modal Title</span>
                            <span className="modal-close" onClick={(e) => closeModal(e)}>&times;</span>
                        </div>
                        <div className="modal-body">

                        </div>
                        <div className="modal-footer">
                            <button>OK</button>
                            <button>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Modal;