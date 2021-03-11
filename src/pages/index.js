import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Layout } from "../components/layout"
import { Showcase } from "../components/showcase"

const IndexPage = () => (
  <Layout>
    <Showcase/>
  </Layout>
)

export default IndexPage
