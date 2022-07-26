import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Advantages from "../components/advantages"
import * as grid from '../styles/grid.module.css'

const SecondPage = () => (
    <Layout>
        <Helmet>
            <title>Тестовое задание Page-2</title>     
        </Helmet>
        <Advantages styles={grid} />
    </Layout>
)

export default SecondPage
