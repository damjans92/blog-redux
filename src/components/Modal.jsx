import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { FaWindowClose } from "react-icons/fa";

const modalStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  borderRadius: "3px",
  padding: "50px",
  zIndex: 1000,
};

const overlayStyles = {
  position: "fixed",
  inset: "0 0 0 0",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 1000,
};

function Modal({ children, show, onClose }) {
  if (!show) return null;

  return ReactDOM.createPortal(
    <>
      <div style={overlayStyles} className="overlay" />
      <div style={modalStyles} className="modal-content">
        <span onClick={onClose} className="close-modal-btn">
          <FaWindowClose size={30} />
        </span>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
