import React from 'react'
import { NewsItem } from "./newsItem";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
export const NewsList = (props) => {

    const listItems = props.props.map(article =>
  

 
    <NewsItem key={article.id} props={article} />
    
   
  );


    return (
        <div>
            <Container className='mt-3'>
                <Row>
           {listItems}
           </Row>
            </Container>
        </div>
    )
}
