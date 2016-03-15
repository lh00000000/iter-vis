import React from 'react'
import $ from 'jquery'
import d3 from 'd3'
import ReactFauxDOM from 'react-faux-dom'

export default class App extends React.Component {

    render() {
   
        var list = ReactFauxDOM.createElement('ul')
        d3.select(list)
            .selectAll('li')
            .data(this.props.data) // 1, 2, 3...
            .enter()
            .append('li')
            .text(function (d) {
              return d
            })
        return (
            <div>
                <h1>hi</h1>
                {list.toReact()}
            </div>
        )
    }
}
