import * as React from "react"
import { Layout } from "../components/layout"
import { Showcase } from "../components/showcase"

const IndexPage = () => (
  <Layout>

    <section className="hero">
      <div className="hero-body has-background-primary"/>
    </section>

    <Showcase/>
  </Layout>
)

export default IndexPage
