import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY } from '../constants';
import axios from 'axios';
import styled from 'styled-components'
import  theme from '../theme';
import moment from 'moment';

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

// let year = document.getElementById('year');
// let month = document.getElementById('month');
// let days = document.getElementById('days');

// month.addEventListener('change', function(event) {
//     // do calculations here to find out how many days in month
//     let dateString = month + "-" + year;
//     let dayLength = moment(dateString, "MM-YYYY").daysInMonth();

//     // wipe out all of the days
//     days.innerHTML = "";

//     // add back all the days.
//     for(let g = 1; g < dayLength + 1; g++) {
//         let option = document.createElement('option');
//         option.value = g;
//         days.appendChild(option);
//     }
// });

export default function Display(props) {
    // const { title, imgUrl, description } = props;
    const [details, setDetails] = useState([])

    useEffect(() => {
        axios
            .get(`${BASE_URL}?api_key=${API_KEY}`)
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