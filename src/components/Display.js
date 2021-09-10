import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY } from '../constants';
import axios from 'axios';
import styled from 'styled-components'
import  theme from '../theme';

const StyledDisplay = styled.div`
    vertical-align: top;
    display: inline-block;
  /* To horizontally center images and caption */
    text-align: center;
  /* The width of the container also implies margin around the images. */

img {
  background-color: grey;
}
.caption {
    /* Make the caption a block so it occupies its own line. */
  width: 0;
  min-width: 100%;
  display: block;
  text-align: justify;
}
a {
  text-decoration: none;
}
@media ${theme.breakpoints.tablet}{
    img {
        width: 90%;
    }
}
@media ${theme.breakpoints.mobile}{
    img {
        width: 80%;
    }
}
`

const getDate = window.location.href.split('&date=')[1] ?? ''; //if result is null or undefined set to empty

export default function Display(props) {
    const [details, setDetails] = useState([])

    useEffect(() => {
        axios
            .get(`${BASE_URL}?api_key=${API_KEY}&date=${getDate}`)
            .then(res => {
                setDetails(res.data);
            })
            .catch(err => console.error('Display.js: ', err))
    }, [])
    
    return (
        <div>
            <h2>{details.title}</h2>
            <StyledDisplay>
                <a href={details.hdurl} target="_blank" rel="noopener noreferrer"><img src={details.url} alt={details.title} /></a>
                <div className='caption'>
                    <p> {details.explanation} - <strong>{details.date}</strong></p>
                </div>
            </StyledDisplay>
        </div>
    )
}