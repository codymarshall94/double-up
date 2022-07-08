import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { AiFillStar } from "react-icons/ai";

function GameOverModal({
  highScores,
  level,
  showGameOverModal,
  handleClose,
  resetGame,
}) 
{

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
          <div className=" container d-flex flex-column justify-content-center">
            <div className="modal-item">
              <span>You Reached Level {level}</span>
            </div>
            { highScores && highScores.length !==0 ? <div className="modal-item">
              <span>
                {level < highScores[0].score
                  ? null
                  : `New High Score ${highScores[0].score}`}
              </span>
            </div> : null }
            
            <div className="container d-flex justify-content-center flex-column w-50">
              <span className="pb-3 text-center"><AiFillStar />High Scores</span>
              {highScores && highScores.length !==0 ? <ol type="1">
                {highScores.map((item, index) => (
                  <li key={index}>{item.score}</li>
                ))}
              </ol> : "No High Scores"}
              
            </div>
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
