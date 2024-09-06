import React, { useEffect } from 'react';
import Modal from 'react-modal';
import {
  deletePayment,
  getPaymentById,
} from '../../app/actions/payment.actions';
import AppointmentEditModal from '../AppointmentEditModal';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import PaymentEditModal from '../PaymentEditModal';

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

Modal.setAppElement('div');

function PaymentTable({ payments }) {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [paymentList, setPaymentList] = React.useState(payments);

  useEffect(() => {
    setPaymentList(payments);
  }, [payments]);
  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const filterPayments = (searchWord) => {
    let newArray = payments.filter(function (el) {
      return el.appointmentId.toLowerCase().includes(searchWord.toLowerCase());
    });
    setPaymentList(newArray);
  };

  return (
    <div>
      <h1>PAYMENT HISTORY</h1>
      <input
        type='text'
        onChange={(e) => filterPayments(e.target.value)}
        name='search'
        placeholder='search...'
        className='form-control'
      />
      <table className='table table-striped table-hover mt-2'>
        <thead>
          <tr>
            <th scope='col'>#</th>

            <th scope='col'>Payment Date</th>
            <th scope='col'>Reference</th>
            <th scope='col'>Amount (LKR)</th>
            <th scope='col'>Status</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {paymentList &&
            paymentList.map((payment, key) => {
              return (
                <tr key={payment._id}>
                  <th scope='row'>{++key}</th>

                  <td>
                    {payment.createdAt &&
                      moment(payment.createdAt).format('MMMM Do YYYY')}
                  </td>
                  <td>{payment.appointmentId}</td>
                  <td>{payment.paymentAmount}</td>
                  <td>
                    {payment.status === 'PENDING' && (
                      <span className='text-warning'>{payment.status}</span>
                    )}
                    {payment.status === 'REJECTED' && (
                      <span className='text-danger'>{payment.status}</span>
                    )}
                    {payment.status === 'SUCCESS' && (
                      <span className='text-success'>{payment.status}</span>
                    )}
                  </td>
                  <td>
                    <div className='dropdown'>
                      <button
                        className='btn btn-secondary dropdown-toggle'
                        type='button'
                        id='dropdownMenuButton1'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        Action
                      </button>
                      <ul
                        className='dropdown-menu'
                        aria-labelledby='dropdownMenuButton1'
                      >
                        <li>
                          <button
                            className='dropdown-item btn btn-primary'
                            onClick={() => {
                              dispatch(getPaymentById(payment._id));
                              openModal();
                            }}
                          >
                            EDIT
                          </button>
                        </li>
                        <li>
                          <button
                            className='dropdown-item btn btn-danger'
                            onClick={() => dispatch(deletePayment(payment._id))}
                          >
                            DELETE
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <h2 className='text-center'>EDIT PAYMENT</h2>
        <div className='p-5'>
          <PaymentEditModal closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
}

export default PaymentTable;
