import React from 'react';
import API from '../utils/API';
import ResultItem from "../components/ResultItem.js";

export default class Results extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(props) {
    }

    componentDidUpdate(props) {
    }

    render() {

        return (
            <div className="jumbotron results row">
                <h4>Quotes</h4>
                <hr />
                {this.props.results.map((item, index) => {
                    return <ResultItem quote={item.text} id={item._id} key={index} />
                })}
            </div>
        );
    }
}