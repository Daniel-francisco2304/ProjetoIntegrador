// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={style.modalOverlay}>
      <div style={style.modalContent}>
        <button style={style.modalClose} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

  const style = {
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "#00000099",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    modalContent: {
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      width: "400px",
      maxWidth: "90%",
      position: "relative",
    },
    modalClose: {
      position: "absolute",
      top: 10,
      right: 10,
      background: "crimson",
      color: "white",
      border: "none",
      borderRadius: "50%",
      width: 25,
      height: 25,
      cursor: "pointer",
    },
  };