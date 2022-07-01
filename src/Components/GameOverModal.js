import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';



function GameOverModal({resetGame, toggleModal, setToggleModal, level}) {
 // const  [highScore, setHighScore] = useState([]);
 const handleToggleModal = () => {
  setToggleModal(!toggleModal);
 }
  return (
    <div className='d-flex align-items-center h-100'>
      <Modal
          show={toggleModal}
          onHide={handleToggleModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-styles'>
            <div>
              <span>You Reached Level {level}</span>
            </div>
            <div className='d-flex justify-content-center'>
              <span>LeaderBoard</span>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={setToggleModal(!toggleModal)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => resetGame}>Try Again</Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
}


export default GameOverModal;

