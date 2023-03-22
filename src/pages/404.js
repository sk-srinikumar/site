import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h2>Not found</h2>
    <p>This page doesn't exist anymore.</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default NotFoundPage
