import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, image: metaImage, title, pathname }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                siteMetadata {
                    title
                    description
                    author
                    siteUrl
                    metaImage
                }
                }
            }
            `
    )

    const metaDescription = description || site.siteMetadata.description
    // prettier-ignore
    const image = metaImage && metaImage.src ? `${site.siteMetadata.siteUrl}${metaImage.src}` : null
    const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null

    return (
        <Helmet defer={false}>
            {/* General tags */}
            <title>
                {site.siteMetadata.title}
            </title>
            <meta name="description" content={metaDescription} />
            <meta name="image" content={image} />
            <link rel="canonical" href={canonical} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={canonical} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={image} />
            {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={site.siteMetadata.author} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    )
}


export default SEO
