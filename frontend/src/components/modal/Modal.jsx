import "./modal.css";
import PropTypes from "prop-types";
// import { useRef } from "react";
import ReactPortal from "../ReactPortal";
// import { CSSTransition } from "react-transition-group";

function Modal({ children, isOpen, handleClose, classes }) {
  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="modal-root">
      <div className={`modal ${classes}`} onClick={handleClose}>
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
  classes: PropTypes.string,
};

export default Modal;
