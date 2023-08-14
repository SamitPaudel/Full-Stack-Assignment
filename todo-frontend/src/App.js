import React, { Component } from "react"

const todoItems = [
  {
    id: 1,
    title: "Nature walk in the park",
    description: "Visit the park with my friends",
    due_date: "13 Aug 2023",
    completed: true
  },

  {
    id: 2,
    title: "Visit",
    description: "Got to my aunt's place",
    due_date: "13 Aug 2023",
    completed: true
  },
];

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {todoItems};
    };

    render() {
      return (
        <main className="content">
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <ul className="list-group list-group-flush">
              {this.state.todoItems.map(item => (
              <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <span>{item.due_date}</span>
              </div>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      )
    }
  }

export default App;
