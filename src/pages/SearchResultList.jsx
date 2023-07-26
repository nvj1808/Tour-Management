
import React,  { useState } from 'react';

import CommonSection from './../shared/CommonSection';
import { Container,Row,Col } from 'reactstrap';

import { useLocation } from 'react-router-dom';

import TourCard from './../shared/TourCard';

const SearchResultList = () => {

const location = useLocation();
console.log(location)

const [data] = useState(location.state);

  return (
    <>
    <CommonSection title={"Tour Search Result"}/>
    <section>
      <Container>
         <Row>    
          {data.length === 0 ? <h4 className='text-center'>Sorry No tour found</h4>
          : data.map(tour => <Col lg='3' className='mb-4'><TourCard tour={tour} /></Col>)}
        </Row>
      </Container>
    </section>
    </>
  );
};

export default SearchResultList;