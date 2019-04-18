import React from 'react'

const ProductOption = props => (
        <label>
            Pick your {props.option.displayName}:
            <select value={props.option.displayName}>
                {props.option.values.map(value => {
                    console.log("Entered");
                    // Return the element. Also pass key
                    return (<option value={value.label}>{value.label}</option>)
                })}
            </select>
        </label>
);

export default ProductOption

