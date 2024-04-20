import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { IoIosAddCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function ChannelModel() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="warning" className="button-2 "style={{marginRight:"10px"}} onClick={handleShow}>
                Channels
            </Button>

            <Modal show={show} className="text-danger " onHide={handleClose}>
                <Modal.Header closeButton className="bg-light">
                    <Modal.Title className="text-danger">Channels</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                 <div className='d-flex flex-column'>
                        <input
                            placeholder="Enter a new channel name"
                            className="w-100 mt-3 mb-3 my-3 mb-3"
                        //   value={val.newPassword}
                        //   onChange={(e) => setVal({ ...val, newPassword: e.target.value })}
                        ></input>
                        <div className='mb-4 mt-2'> <Link to="" className='button-6 '>DSA</Link> </div>
                        <div className='mb-4'> <Link to="" className='button-6'>WEB</Link></div>
                        <div className='mb-4'> <Link to="" className='button-6'>JAVA</Link></div>
                        <div className='mb-4'> <Link to="" className='button-6'>AI</Link></div>
                        <div className='mb-4'> <Link to="" className='button-6'>SORA AI</Link></div>
                        <div className='mb-4'> <Link to="" className='button-6'>Free Talk</Link></div>
                        <div className='mb-4'> <Link to="" className='button-6'>Memes</Link></div>
                 </div>
                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                    {/* <Button variant="warning">
                        Join Team
                    </Button> */}
                    <Button variant="primary" >
                        Create A New Channel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
  )
}