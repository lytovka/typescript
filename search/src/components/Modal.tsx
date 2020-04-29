import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ICountry } from '../interfaces/country';

import '../styles/modal.css';

type ModalProps = {
    flag: boolean,
    closeModal(event: React.MouseEvent): void,
    selectedCountry: ICountry | null
}

const Modal: React.FC<ModalProps> = ({ flag, closeModal, selectedCountry }) => {

    if (flag && selectedCountry) {
        return (
            <React.Fragment>
                <div className="modal">
                    <div className="modal-overlay">
                        <CSSTransition in={flag} timeout={2000} unmountOnExit classNames="my-modal">
                            <div className="modal-window">
                                <div className="modal-header">
                                    <span className="modal-title">Modal Title</span>
                                    <span className="modal-close" onClick={(e) => closeModal(e)}>&times;</span>
                                </div>
                                <div className="modal-body">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores?</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores?</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores?</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores?</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores?</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores?</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores?</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores?</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores?</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores?</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores?</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores?</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores?</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores?</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores?</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores?</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores?</p>
                                </div>
                                <div className="modal-footer">
                                    <button>OK</button>
                                    <button>Cancel</button>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    else {
        return <></>
    }
}

export default Modal;