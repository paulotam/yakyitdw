import React, { Component } from 'react'
import styles from './styles.js'

class Zone extends Component {

	render() {

		const zoneStyle = styles.zone
		const zipCode = this.props.currentZone.zipCodes[0]

		return(
			<div style={zoneStyle.container}>
				<h2 style={zoneStyle.header}>
					<a style={zoneStyle.title} href="#">{this.props.currentZone.name}</a>
				</h2>
				<span>{zipCode}</span><br />
				<span>{this.props.currentZone.numComments} comments</span>
			</div>
		)
	}
}

export default Zone