import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Home.css'


const Home = () => {

    const [courses,setCourses] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (

        <div>
            <div className='hero-bg'>
            <img src="/src/img/hero-1.png" alt="" />
       <div>
       <h3 className='text-title'>Let’s Started</h3>
         <p className='text-p'>Learning Skills & Upgrade Your Life</p>
       </div>
        </div>
        <div className='mt-5'>
            <p className='course-p '>OUR COURSE CATEGORIES</p>
            <h3 className='course-text'>Explore Top Categories</h3>
            <div>
            <CardGroup className='m-3 p-3'>
      <Card>
        <Card.Body>
          <Card.Title>Web Development</Card.Title>
          <img src="https://angfuzsoft.com/wordpress/acadu/wp-content/uploads/2022/09/category_1_1.svg" alt="" />
          <Card.Text>
          Globally maintain magnetic process with model foster data after ubiuitous architectures
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Digital Marketing</Card.Title>
          <img src="https://angfuzsoft.com/wordpress/acadu/wp-content/uploads/2022/09/category_1_2.svg" alt="" />
          <Card.Text>
          Globally maintain magnetic process with model foster data after ubiuitous architectures
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>UI/UX Design</Card.Title>
          <img src="https://angfuzsoft.com/wordpress/acadu/wp-content/uploads/2022/09/category_1_3.svg" alt="" />
          <Card.Text>
          Globally maintain magnetic process with model foster data after ubiuitous architectures
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
            </div>
        </div>
        <div>
            <h3>All Courses {courses.length}</h3>
        {
            courses.map(course => <button  className='mt-5 gap-3 mb-3 p-2 ms-3 bg-white course-name-btn'
            key={course.id}
            ><Link to={`/course/${course.id}`} className=' course-name'>{course.course_name}</Link></button>)
        }
       </div>
        </div>
        
    );
};

export default Home;