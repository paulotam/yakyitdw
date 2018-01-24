import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import styles from './styles.js'

class Comments extends Component {
	
	constructor() {
		super()
		this.state = {
			comment: {
				username: '', 
				body: '',
				timestamp: ''
			},
			list: [
				// { username:'Username 1', body: 'This is the sample text A.', timestamp: '10:30' },
				// { username:'Username 2', body: 'This is the sample text B.', timestamp: '11:00' },
				// { username:'Username 3', body: 'This is the sample text C.', timestamp: '11:30' },
				// { username:'Username 4', body: 'This is the sample text D.', timestamp: '12:00' }
			]

		}
	}

	updateUsername(event) {
		console.log('updateUsername:' + event.target.value )

		//this.state.comment['username'] = event.target.value
		//Wrong do not mutate the state, you should create a copy and then update and reset it.

		let updatedComment = Object.assign({}, this.state.comment)
		updatedComment['username'] = event.target.value
		
		this.setState({
			comment: updatedComment
		})

	}

	updateBody(event) {
		console.log('updateBody:' + event.target.value )

		let updatedComment = Object.assign({}, this.state.comment)
		updatedComment['body'] = event.target.value

		this.setState({
			comment: updatedComment
		})

	}

	updateTimestamp(event) {
		console.log('updateTimestamp:' + event.target.value )

		let updatedComment = Object.assign({}, this.state.comment)
		updatedComment['timestamp'] = event.target.value

		this.setState({
			comment: updatedComment
		})

	}

	submitComment() {
		console.log('submitComment:' + JSON.stringify(this.state.comment) )

		let updatedList = Object.assign([], this.state.list)
		updatedList.push(this.state.comment)

		this.setState({
			list: updatedList
		})

	}

	render() {
		const commentList = this.state.list.map((comment, i)=>{
			return (
				<li key={i}><Comment currentComment={comment} /></li>
			)
		})

		return (
			<div>
				<h2>Comments: Zone 1</h2>
				<div style={styles.comment.commentsBox}>
					<ul style={styles.comment.commentsList}>
						{commentList}
					</ul>

					<input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username"  /><br />
					<input onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder="Comment"  /><br />
					<input onChange={this.updateTimestamp.bind(this)} className="form-control" type="text" placeholder="Timestamp"  /><br />
					<button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
				</div>
				
			</div>
		)
	}

}

export default Comments