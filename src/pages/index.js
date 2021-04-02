import * as React from "react"
import { Layout } from "../components/layout"
import { Showcase } from "../components/showcase"
import { Hobbies } from "../components/hobbies"

const IndexPage = () => (
  <Layout>
    <Showcase/>
    <Hobbies/>
  </Layout>
)

export default IndexPage
