import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/home/About"
import Services from "../components/home/Services"
export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="continue exploring"
        info="Dolor tempor magna no sea sadipscing aliquyam aliquyam dolore tempor.."
      >
        <Link to="/tours" className="btn-white">
          Explore Tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)
