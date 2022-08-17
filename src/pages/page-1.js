import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Advantages from "../components/advantages"
import * as flex from '../styles/flex.module.css'

const FirstPage = () => (
    <Layout>
        <Helmet>
            <title>Тестовое задание Flex Page-1</title>
        </Helmet>
        <Advantages styles={flex} />
    </Layout>
)

export default FirstPage
