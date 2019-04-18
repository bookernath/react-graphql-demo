import React from 'react'
import ProductOption from './ProductOption'
import ResponsiveImage from './ResponsiveImage'

const Product = props => (

    <div className="card" style={{ width: "18rem" }}>
        { console.log(props) }
        <ResponsiveImage image={props.product.images[0]} />
        <div className="card-body">
            <h5 className="card-title">{props.product.name}</h5>
            <p className="card-text">{
                new Intl.NumberFormat(navigator.language, {
                style: 'currency',
                currency: props.product.prices.price.currencyCode
            }).format(props.product.prices.price.value)
            }</p>
            {props.product.options.map(option => {
                return (<ProductOption option={option} />)
            })}
            <a href={props.product.path} className="btn btn-primary">Read More</a>
        </div>
    </div>
);

export default Product
