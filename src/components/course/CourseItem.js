import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseItem = ({title,img,text}) => {
  return (
    <div>
    <Card>
    <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {text}
        </Card.Text>
        <Button variant="primary">خرید دوره</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CourseItem

