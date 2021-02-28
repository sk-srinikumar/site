import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import './layout.css'
import Copyright from '../components/copyright.js'
import { Helmet } from 'react-helmet'

<Helmet title="foo bar" defer={false} />

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
            paddingTop: '60px',
            fontFamily: 'Inter'
          }}
        >
          {children}
        </div>
        <Copyright />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
