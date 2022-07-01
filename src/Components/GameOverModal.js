import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function GameOverModal({ level, showGameOverModal, handleClose, resetGame }) {
  return (
    <div className="d-flex align-items-center">
      <Modal
        show={showGameOverModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-styles">
          <div className="d-flex justify-content-center">
            <span>You Reached Level {level}</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => resetGame()}>
            Try Again
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default GameOverModal;
