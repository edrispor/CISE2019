import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        constructor(props) {
            super(props);
            this.state = {
              tools: [],
              trees: [],
              maintenance: [],
              items: []
            };
          }

          componentDidMount() {
            this.getTools();
            this.getTrees();
            this.getMaintenance();
            this.getItems();
          }
        
          getTools = _ => {
            fetch("/tools")
              .then(response => response.json())
              .then(response => this.setState({ tools: response.data }))
              .catch(err => console.error(err));
          };
        
          getTrees = _ => {
            fetch("/trees")
              .then(response => response.json())
              .then(response => this.setState({ trees: response.data }))
              .catch(err => console.error(err));
          };
        
          getMaintenance = _ => {
            fetch("/garden_main")
              .then(response => response.json())
              .then(response => this.setState({ maintenance: response.data }))
              .catch(err => console.error(err));
          };
        
          getItems = _ => {
            fetch("/items")
              .then(response => response.json())
              .then(response => this.setState({ items: response.data }))
              .catch(err => console.error(err));
          };
        sortNumber(array,condition)
        {

        }
        sortWord(array, condition)
        {
            
        }

        return (
            <div>
                
            </div>
        )
    }
}
