import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Tour from "./Tour"
import Title from "../Title"
export default class TourList extends Component {
  state = {
    tours: [],
    sortedTours: [],
  }

  componentDidMount() {
    this.setState({
      tours: this.props.tours.nodes,
      sortedTours: this.props.tours.nodes,
    })
  }
  render() {
    return (
      <section className={styles.tours}>
        <Title title="our" subtitle="tours" />
        <div className={styles.center}>
          {this.state.sortedTours.map(tour => {
            return <Tour key={tour.contentful_id} tour={tour} />
          })}
        </div>
      </section>
    )
  }
}
