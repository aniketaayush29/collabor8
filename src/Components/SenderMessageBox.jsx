import React, { useState } from 'react'

export default function SenderMessageBox({msg}) {
    const date = new Date(msg.createdAt)

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const formattedDate = ` ${hours}:${minutes} | ${day}-${month}-${year}`;

 console.log(msg);
  return (
      <div className="message-feed media left">
          <div className="pull-left">
          </div>
          <div className="media-body  mt-1">
              <div className="mf-content msg-container" >
                  <p className='text-warning'>{msg.sender?.name}</p>
                  {msg.content}
              <small className="mf-date msg_time"><i className="fa fa-clock-o "></i> {formattedDate}</small>
              </div>
          </div>
             <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" className="img-avatar box-send-img" />
          
      </div>
  )
}
