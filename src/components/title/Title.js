import React from 'react';
import './Title.css';

const Title = ({title1, title2, title3}) => {
    return (
    <div className='title d-flex align-items-center gap-2'>
        <h2><span>{title1}</span> {title2} {title3}</h2>
        <div className='line'></div>
    </div>
    )
}

export default Title
