// import React, { Component } from "react"
// import DataManager from '../../module/DataManager'

// export default class ToReadShelf extends Component {

//   state = {
//     toReadShelf: []
//   }

//   state = {
//     readShelf: []
//   }
//   componentDidMount() {
//     const newState = {}
//     DataManager.getAll("volumes", this.credentials.id)
//       .then(readShelf => {
//         newState.readShelf = readShelf
//       })
//       .then(() =>
//         this.setState(newState))
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <section>
//           this.state.events.map(events =>
//         <div key="{volumes.items.id">
//             {volumes.items.volumeInfo.imageLinks.thumbnail}
//           </div>
//           <div>
//             {volumes.items.volumeInfo.title}
//           </div>
//           <div>
//             {volumes.items.volumeInfo.authors}
//           </div>
//           <div>
//             {volumes.items.volumeInfo.description}
//           </div>
//         </section>
//       </React.Fragment>

//     )
//   }
// }