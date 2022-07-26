import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"


const IndexPage = () => {
  return (<>
    <Helmet>
      <title>Тестовое задание</title>
    </Helmet>
    <div style={{margin: 20}}>
      <ul>
        <li><Link to="/page-1">Page 1</Link></li>
        <li><Link to="/page-2">Page 2</Link></li>
      </ul>
    </div>
  </>)
}

export default IndexPage
