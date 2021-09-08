import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
export const NewsItem= (props) => {
    
 return( props.props.media.map(url=>{

    return (
      <Col  xs={12} sm={4} md={3}>
        <div key={url.toString()} >
            <Card className='mt-3'>
  <Card.Header>{props.props.byline}</Card.Header>
  <Card.Body>
    
    <Image src={url["media-metadata"][2].url} thumbnail ></Image>
    <Card.Title>{props.props.title}</Card.Title>
    <Card.Text>
      {props.props.abstract}
    </Card.Text>
    
    <Button href={props.props.url} variant="primary">Read More</Button>
    <br></br>
    {props.props.published_date}
  </Card.Body>
</Card>
        </div>
        </Col>
    )  }))
}
