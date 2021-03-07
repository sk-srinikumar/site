import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import './layout.css'
import '../css/typography.css'
import Year from '../components/year'


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
            fontFamily: 'Inter',
          }}
        >
          {children}
        </div>
        <div class="copyright">
            &copy; Srinivasan Kumaresan <Year /> 
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
