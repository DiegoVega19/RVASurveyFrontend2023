import React from 'react'
import Aside from './Aside'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

const All = (props) => {
    const { children } = props;
    return (
        <div id="wrapper">
            <Aside />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Header />
                    {children}
                </div>
                <Footer />
            </div>
        </div>

    )
}

export default All
