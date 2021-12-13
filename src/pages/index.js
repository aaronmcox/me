import * as React from "react"
import { Layout } from "../components/layout"
import { Showcase } from "../components/showcase"
import { Hobbies } from "../components/hobbies"
import { Skills } from "../components/skills"

const IndexPage = () => (
  <Layout>
    <Showcase/>
    <Hobbies/>
    <Skills />
  </Layout>
)

export default IndexPage
