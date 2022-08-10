import React from 'react'
import { Header } from "./partials/header.comp"
import { Footer } from "./partials/Footer.comp"

export const DefaultLayout = () => {
  return (
    <div>
        <div className="defaul-layout">
            <div className="header">
                <Header/>
            </div>

            <div className="main">
                main page content
            </div>

            <div className="footer">
                <Footer/>
            </div>
       
        </div>
    </div>
  )
}
