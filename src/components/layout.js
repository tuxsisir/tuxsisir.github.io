/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Nav from './nav'
import './layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className='container mx-auto'>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className='grid md:grid-cols-4 gap-4 sm:grid-cols-none'>
          <div className='md:col-span-1 p-2' >
            <Nav />
            <footer className='text-xs'>
              <div>Designed By Sisir Ghimire Chettri</div>
              <div>
                Copyright SGC &copy; {new Date().getFullYear()}
              </div>
              <div>
                Built with <a href='https://www.gatsbyjs.org'>Gatsby</a>, <a href='https://www.gatsbyjs.org'>Tailwind</a>
              </div>
            </footer>
          </div>
          <div className='md:col-span-3 p-2' >
            <main className='mb-auto'>{children}</main>
          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
