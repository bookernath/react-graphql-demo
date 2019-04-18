import React from 'react'

const ResponsiveImage = props => {
    if (props.image) {
        const small = props.image.url200;
        const medium = props.image.url400;
        const large = props.image.url800;
        const xlarge = props.image.url1200;

        return (
            <img className="card-img-top" src={small} srcSet={`${small} 200w, ${medium} 400w, ${large} 800w, ${xlarge} 1200w`} alt={props.image.altText}/>
        );
    } else {
        return '';
    }
};

export default ResponsiveImage