import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Advantages from "../components/advantages"
import * as gridTemplateAreas from '../styles/grid-template-areas.module.css'

const ThirdPage = () => (
    <Layout>
        <Helmet>
            <title>Тестовое задание Grid Template Areas Page-3</title>
        </Helmet>
        <Advantages styles={gridTemplateAreas} />
    </Layout>
)

export default ThirdPage
