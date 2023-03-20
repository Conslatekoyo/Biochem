import React from 'react'
import Modal from '@mui/material/Modal'
import './MessageModal.css'

const MessageModal = ({ open, setOpen }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
        <div className='modal'>MessageModal</div>

        {/* <button onClick={() => setOpen(false)}>Close</button> */}
    </Modal>
  )
}

export default MessageModal
