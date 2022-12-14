import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage  } from "gatsby-plugin-image"
import { Link } from "gatsby"



import Carousel from 'react-bootstrap/Carousel';

export default function carousel() {
  
  return (
    <StaticQuery
      query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___title], order: DESC }) {
          nodes {
            excerpt
            fields {
              slug
            }
            frontmatter {
                title
                excerpt
                featuredImage {
                  childImageSharp {
                    gatsbyImageData(
                      width: 500
                      blurredOptions: {width: 100}
                      placeholder: BLURRED
                      transformOptions: {cropFocus: CENTER}
                      aspectRatio: 0.7
                    )
                  }
                }
                imageExcerpt
                date
            }
          }
        }
      }
      `}
      render={data => {
        const posts = data.allMarkdownRemark.nodes
        console.log(posts)
        return(

        <Carousel>
          
            <Carousel.Item>
              <Link to={posts[0].fields.slug} itemProp="url">
                <figure>
                  <GatsbyImage className="d-block w-100" image={getImage(posts[0].frontmatter.featuredImage)} alt={posts[0].frontmatter.title} />
                </figure>
                <Carousel.Caption>
                  <span className="carousel-title" itemProp="headline">{posts[0].frontmatter.title}</span>
                </Carousel.Caption>
                </Link>
            </Carousel.Item>
         

        <Carousel.Item>
        <Link to={posts[1].fields.slug} itemProp="url">
        <GatsbyImage className="d-block w-100" image={getImage(posts[1].frontmatter.featuredImage)} alt={posts[1].frontmatter.title} />
          <Carousel.Caption>
            <span className="carousel-title" itemProp="headline">{posts[1].frontmatter.title}</span>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
        <Link to={posts[2].fields.slug} itemProp="url">
        <GatsbyImage className="d-block w-100" image={getImage(posts[2].frontmatter.featuredImage)} alt={posts[2].frontmatter.title[1]} />
          <Carousel.Caption>
            <span className="carousel-title" itemProp="headline">{posts[2].frontmatter.title}</span>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>
        
      </Carousel>
      )}
    }
    />
  )
}
