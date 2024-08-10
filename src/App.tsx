import { FormEvent, useState } from 'react';
import Modal from './UI/Modal';
import Input from './UI/Input';

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showCountDown, setShowCountDown] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const start = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    closeModal();
  };

  return (
    <main>
      <Modal onClose={closeModal} show={showModal}>
        <div className='modal-header'>
          <h4 className='modal-title'>Enter Your Name</h4>
        </div>
        <div className='modal-body'>
          <form onSubmit={start}>
            <Input label='name' id='name'></Input>
            <button className='button'>Start</button>
          </form>
        </div>
      </Modal>
    </main>
  );
}

export default App;
