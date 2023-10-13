import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addtoHistory, deletetVideo } from '../services/allAPI';

function VideoCard({displayData, setremoveVideoServerResponse, insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    // make api call http://localhost:4000/history
    const {caption, embedLink} = displayData
    let today = new Date()
    let timestamp = new Intl.DateTimeFormat('en-US', {year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    let videoDetails = {
      caption,embedLink,timestamp
    }
    await addtoHistory(videoDetails)

  }

  // deleting a video
  const removeVideo = async(id)=>{
    // make api call
    const responce = await deletetVideo(id)
    setremoveVideoServerResponse(true)
  }

 

  const dragStarted = (e,id)=>{
    console.log('Drag started id:',id);
    e.dataTransfer.setData("videoId",id)
  }


  return (
    <> 
     <Card className='mb-3' draggable   onDragStart={(e)=>dragStarted(e,displayData?.id)}>
      <Card.Img onClick={handleShow} height={'230px'} variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayData.caption}</h6>
         {insideCategory?"": <button onClick={()=>removeVideo(displayData?.id)} className='btn' ><i className="fa-solid fa-trash text-danger"></i></button>}
        </Card.Title>
      </Card.Body>
    </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width={"100%" }height="523" src={`${displayData?.embedLink}?autoplay=1`} title={displayData?.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Modal.Body>
      </Modal>
    
    </>
  )
}

export default VideoCard