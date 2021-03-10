import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Layout } from "../components/layout"
import { Showcase } from "../components/showcase"

const IndexPage = () => (
  <Layout>
    <div className="hero bg-primary">
      <div className="hero-body">
      </div>
    </div>

    <Showcase/>
  </Layout>
)

export default IndexPage
