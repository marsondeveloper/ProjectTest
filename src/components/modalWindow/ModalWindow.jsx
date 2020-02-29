import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import './Modal.css';
import {NavLink} from "react-router-dom";


const Modal = (props) => {
    debugger
    return (
        <>
            {props.isOpen &&
            <div className='modalOverlay'>
                <div className='modalWindow'>
                    <div className='modalHeader'>
                        <div className='modalTitle'>{props.title}</div>
                    </div>
                    <div className='modalBody'>
                        {props.children}
                    </div>
                    <div className='modalFooter'>
                        <NavLink to={'/result'}>
                            <button className='btn'>Да</button>
                        </NavLink>
                        <button className='btn' onClick={props.setIsCloseModal}>Нет</button>
                    </div>
                </div>
            </div>
            }
        </>
    )
};

Modal.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

Modal.defaultProps = {
    title: "Каждый не отвеченный ответ считается неправильным, Вы уверены что хотите продолжить?",
    children: "Хорошо подумайте!"
};


export default Modal;
