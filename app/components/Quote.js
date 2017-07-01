
import React from 'react';
import API from '../utils/API';
import Results from "./Results.js";

export default class Quote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: " ",
            results: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getQuote = this.getQuote.bind(this);
    }

    componentWillMount() {
        this.refreshQuotesFromServer();
    }

    getQuote(event) {
        this.setState({
            quote: event.target.value
        });
    }

    handleSubmit(event) {
        API.saveQuote(this.state.quote.trim());
        this.refreshQuotesFromServer();
    }

    refreshQuotesFromServer() {
        API.getQuotes().then(results => {

            var quoteArray = [];

            for (var key in results.data) {
                quoteArray.push(results.data[key]);
            }

            this.setState({
                results: quoteArray
            });
        });
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {

        return (
            <div className="jumbotron">
                <form >
                    <div className="form-group">
                        <label>New Quote</label>
                        <input value={this.state.quote} type="text" className="form-control" name="quote" placeholder="type here" id="quote" required onChange={this.getQuote}></input>
                    </div>
                    <button type="button" className="btn btn-lg btn-primary" onClick={this.handleSubmit} >Submit</button>
                </form>
                <hr />
                <div className="jumbotron">
                    <Results results={this.state.results} />
                </div>
            </div>
        );
    }
}