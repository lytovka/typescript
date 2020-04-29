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
                            <span className="modal-title">{selectedCountry!.name}</span>
                            <span className="modal-close" onClick={(e) => closeModal(e)}>&times;</span>
                        </div>
                        <div className="modal-body">
                            <div className="modal-body-container">
                                <div className="modal-body-container-item">
                                    <p><span>Capital: </span>{selectedCountry!.capital}</p>
                                </div>
                                <div className="modal-body-container-item">
                                    <p><span>Population: </span>{selectedCountry!.population}</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <p><a href={`https://en.wikipedia.org/wiki/${selectedCountry!.name}`}>Wiki page</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Modal;