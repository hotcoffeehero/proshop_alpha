import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords}/>
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to ProShop',
    description: 'You want the cool stuff that we sell.',
    content: 'electronics, cheap electronics, buy electronics, new phones, iphone'
}

export default Meta
