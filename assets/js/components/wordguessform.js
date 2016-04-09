import React from 'react'
import { render } from 'react-dom'

class WordGuessForm extends React.Component {

	constructor(props) {
	  	super(props);
	  	this.state = {guessedWord: ""}
  	}

	handleGuessChange(e) {
		this.setState({guessedWord: e.target.value})
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onGuessSubmit(this.state.guessedWord);
		this.setState({guessedWord: ""});
		
	}

	render() {
		return (
			<div className="guessForm">
				<p>This is the users Word Guess</p>
				<form className="guessForm" onSubmit={this.handleSubmit.bind(this)}>
                	<input type="text" placeholder="Guess a word" value={this.state.guessedWord} onChange={this.handleGuessChange.bind(this)} />
                	<input type="submit" value="Post" />
                </form>
			</div>
		)
	}
}

export default WordGuessForm