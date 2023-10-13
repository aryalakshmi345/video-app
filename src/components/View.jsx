import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI'

function View({uploadVideoServerRespones}) {
  const [removeVideoServerResponse, setRemoveVideoServerResponse] = useState(false)
  const [allVideos, setAllVideos] = useState([])
  const getAllUploadedVideos = async ()=>{
    //make api call getAllVideos
    const {data} = await getAllVideos()
    setAllVideos(data)
  }

  useEffect(()=>{
    getAllUploadedVideos()
    setRemoveVideoServerResponse(false)
  },[uploadVideoServerRespones, removeVideoServerResponse])
  console.log(allVideos);
  return (
    <>
    <Row>
      {
        allVideos?.length>0?
        allVideos?.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard  setremoveVideoServerResponse={setRemoveVideoServerResponse} displayData = {video}/>
      </Col>
        ))
        :
        <p className='fw-bolder fs-5 text-danger'>Nothing To Display</p>
      }
    </Row>
    </>
  )
}

export default View