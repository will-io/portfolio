import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { siteMetadata } from "../../gatsby-config"

const query = graphql`
{
  site {
    siteMetadata {
      twitterUsername
      siteTitle: title
      siteUrl
      image
      siteDesc: description
      author
    }
  }
}
`

const SEO = ({title, description}) => {
  const {site} = useStaticQuery(query)
  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{lang:"en"}} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
    </Helmet>
  )
}

export default SEO
