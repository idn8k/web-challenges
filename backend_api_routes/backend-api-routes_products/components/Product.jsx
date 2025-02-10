import React from 'react'

export default function Product({ name, description }) {
    return (
        <div>
            <h3>{name}</h3>
            <h6>{description}</h6>
        </div>
    )
}
