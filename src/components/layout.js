/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// const PageDefault = styled.div `
//   width: 100%;
//   position: relative;
// `
// const ImageBackdrop = styled.div `
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 800px; // or 100vh
//   background: url("${bgImage}");
//   background-size: cover;
//   background-attachment: fixed;
//   background-repeat: no-repeat;
//   background-position: center;
//
// `
// const Foreground = styled.div `
//   height: 600px; // or 100% to cover whole background
//   position: relative;
//   padding: 2rem; // this can be added to children instead
//   clip-path: polygon(0 0, 100% 0%, 100% 48%, 0 76%);
//   background: rbga(0, 0, 0, 0.5);
// `
//
// const HeaderWrapper = styled.div`
//   background: url("${bgImage}");
//   background-size: cover;
//   background-attachment: fixed;
//   background-repeat: no-repeat;
//   background-position: center;
//   // background: #d3d3d3;
//   margin-bottom: 0.45rem;
//   h1 {
//     img {
//       height: 80px;
//     }
//   }
// `;
//
// background image is fixed/parallax and has smoked overlay. divs on top of it are transparent. 
