import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseItem.css'

const CourseItem = ({id,title,img,text}) => {

  return (
    <div>
    <Card>
    <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {text}
        </Card.Text>
        <Button variant="primary">
          <Link to={`/course/${id}`} className='buy-btn'>خرید دوره</Link>
        </Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CourseItem

