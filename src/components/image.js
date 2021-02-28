import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 */

const Image = () => {
  const data = useStaticQuery(graphql`
      query {
        imagePortrait: file(relativePath: { eq: "portrait.png" }) {
          childImageSharp {
            fluid(maxWidth: 488) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }

    `)

    return (
      <Img fluid={data.imagePortrait.childImageSharp.fluid} />
    )
}

export default Image
