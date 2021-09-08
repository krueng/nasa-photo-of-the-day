import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY } from '../constants';
import axios from 'axios';


export default function Display(props) {
    const { title, imgUrl, description } = props;
    const [details, setDetails] = useState([])

    useEffect(() => {
        axios
            .get(`${BASE_URL}${API_KEY}`)
            .then(res => {
                setDetails(res.data);
            })
            .catch(err => console.error('Display.js: ', err))
    }, [])

    return (
        <div>
            <p><strong>{details.date}: {details.title}</strong></p>
            <div className='item'>
                <img src={details.url} alt={details.title} />
                <div className='caption'>
                   <p> {details.explanation}</p>
                </div>
            </div>
        </div>
    )
}