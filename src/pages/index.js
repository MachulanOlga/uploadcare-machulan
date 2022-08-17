import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (<>
    <Helmet>
      <title>Тестовое задание</title>
    </Helmet>
    <div style={{margin: 20}}>
      <ul>
        <li><Link to="/page-1">Flex</Link></li>
        <li><Link to="/page-2">Grid</Link></li>
        <li><Link to="/page-3">Grid Template Areas</Link></li>
      </ul>
    </div>
  </>)
}

export default IndexPage
