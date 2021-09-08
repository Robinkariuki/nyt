import React from 'react'
import { NewsItem } from "./newsItem";
import Container from 'react-bootstrap/Container'
export const NewsList = () => {
    return (
        <div>
            <Container>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            </Container>
        </div>
    )
}
