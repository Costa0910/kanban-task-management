import "./modal.css";
import PropTypes from "prop-types";
// import { useRef } from "react";
import ReactPortal from "../ReactPortal";
// import { CSSTransition } from "react-transition-group";

function Modal({ children, isOpen, handleClose }) {
  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="modal-root">
      <div className="modal" onClick={handleClose}>
        {/* <button onClick={handleClose} className="close-btn">
          Close
        </button> */}
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </ReactPortal>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
