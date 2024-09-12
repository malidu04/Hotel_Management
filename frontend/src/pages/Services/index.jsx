import React from 'react';
import DryImage from '../../assets/dry-cleaning.jpg';
import ConcierImage from '../../assets/ConciergeServices.jpg';
import RoomImage from '../../assets/RoomService.jpeg';
import SpaImage from '../../assets/Spa_Wellness.jpg';
import ServiceViewModal from '../../components/ServiceViewModal';
import Modal from 'react-modal';
Modal.setAppElement('div');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Services() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalTitle, setModelTitle] = React.useState('');
  const [modalContent, setModelContent] = React.useState('');

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className='container mt-5 mb-5'>
      <h1>Our Services</h1>
      <hr />
      <div class='container'>
        <div class='row mb-4'>
          <div class='col-md-6 col-lg-6'>
            <div
              class='position-relative'
              onClick={() => {
                setModelTitle('Spa and Wellness');
                setModelContent(
                  'Provides relaxation and wellness services, including massages, saunas, and fitness facilities for guests looking to unwind during their stay.'
                );
                openModal();
              }}
            >
              <img src={SpaImage} class='img-fluid square-img' alt='...' />
              <div class='position-absolute top-50 start-50 translate-middle text-center'>
                <span class='text-black fs-1 fw-bold'>SPA AND WELLNESS</span>
              </div>
            </div>
          </div>
          <div class='col-md-6 col-lg-6'>
            <div
              class='position-relative'
              onClick={() => {
                setModelTitle('Laundry and Dry Cleaning');
                setModelContent(
                  'Offers laundry and dry cleaning services to guests, ensuring their clothes are cleaned and returned in a timely manner.'
                );
                openModal();
              }}
            >
              <img
                src={DryImage}
                class='img-fluid square-img'
                alt='...'
              />
              <div class='position-absolute top-50 start-50 translate-middle text-center'>
                <span class='text-black fs-1 fw-bold'>LAUNDRY AND DRY CLEANING</span>
              </div>
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='col-md-6 col-lg-6'>
            <div
              class='position-relative'
              onClick={() => {
                setModelTitle('Concierge Services');
                setModelContent(
                  ' Assists guests with booking activities, arranging transportation, and providing local information and recommendations.'
                );
                openModal();
              }}
            >
              <img
                src={ConcierImage}
                class='img-fluid square-img'
                alt='...'
              />
              <div class='position-absolute top-50 start-50 translate-middle text-center'>
                <span class='text-white fs-1 fw-bold'>CONCIERGE SERVICES</span>
              </div>
            </div>
          </div>
          <div class='col-md-6 col-lg-6'>
            <div
              class='position-relative'
              onClick={() => {
                setModelTitle('Room Service');
                setModelContent(
                  'Guests can order food, beverages, and other amenities directly to their rooms.'
                );
                openModal();
              }}
            >
              <img
                src={RoomImage}
                class='img-fluid square-img'
                alt='...'
              />
              <div class='position-absolute top-50 start-50 translate-middle text-center'>
                <span class='text-white fs-1 fw-bold'>ROOM SERVICE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <div className='container'>
          <ServiceViewModal
            closeModal={closeModal}
            modalContent={modalContent}
            modalTitle={modalTitle}
          />
        </div>
      </Modal>
    </div>
  );
}

export default Services;
