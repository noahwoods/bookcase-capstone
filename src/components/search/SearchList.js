
import React, { Component } from "react"




export default class SearchList extends Component {

  render() {
    return (
      <section className="searchList">
        {
          this.props.selectedShow.map(show => {
            return (<div className="poster-Group" key={show.apiID}>
              <div>
                <img className="poster-Image" src={`https://image.tmdb.org/t/p/w300${show.image}`} alt="tv-poster" />
              </div>
              <div>
            <SearchModal {...this.props} show={show} />
            </div>
            </div>
            )
          }
          )
        }
      </section>
    )
  }