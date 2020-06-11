import React from "react";

class Alert extends React.Component {
	AlertDiv = (el) => {
		this.div = el;
	};

	render() {
		const { alert, clearAlert } = this.props;

		return (
			alert !== null && (
				<div
					className={`alert alert-${alert.type}`}
					onClick={clearAlert}
					style={{ cursor: "pointer" }}
					ref={this.AlertDiv}
				>
					<i className="fas fa-info-circle" /> {alert.msg}
				</div>
			)
		);
	}
}

export default Alert;
