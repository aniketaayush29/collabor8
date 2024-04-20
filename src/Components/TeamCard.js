import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ChannelModel from './ChannelModel'
import UserModel from './UserModel'

export default function TeamCard({team}) {
  return (
      <>
          <Card className='my-3 p-3 ms-2 rounded bg-dark text-light'>
              {/* <Link to={`/product/`}> */}
                  {/* <Card.Img className='card-image' style={{ height: "300px" }} src={product.images[0]} /> */}
              {/* </Link> */}
              <Card.Body>

                  
                      <Card.Title as='p' className='name-label fs-3 '>
                          <strong>{team?.name}</strong>
                          <p className='fs-5'>Admin: {team?.admin?.name}</p>

                      </Card.Title>
                      {/* <p style={{ fontFamily: "'Gluten', sans-serif" }}>{product?.description}</p> */}
                  
                  <Card.Text as='h3' className='text-success ' style={{ fontSize: "13px", fontWeight: "bold" }}>Teamcode : <span className='text-light'>{team?.teamCode}</span></Card.Text>
                  <div className='d-flex flex-wrap '>
                      
                         
                              <ChannelModel list={team?.channels} team={team}/>
                              <UserModel list={team?.users} team={team}/>
                  </div>
              </Card.Body>
          </Card>
      </>
  )
}
