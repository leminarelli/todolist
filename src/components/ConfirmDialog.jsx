import React from 'react'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import '../assets/css/index.css'

const propTypes = {
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
	onCancel: PropTypes.func.isRequired,
	onConfirm: PropTypes.func.isRequired,
};

function ConfirmDialog(props) {
	const dialogActions = [
		<FlatButton
			label="Cancelar"
			className="confirm-dialog"
			onClick={props.onCancel}
		/>,
		<FlatButton
			label="Confirmar"
			backgroundColor="#80C8B5"
			hoverColor="#FF583D"
			className="confirm-dialog"
			onClick={props.onConfirm}
		/>,
	];

	return (
		<div>
			<Dialog
				title={props.title}
				actions={dialogActions}
				modal={true}
				open={props.open}
			>
				{props.message}
			</Dialog>
		</div>
	);
}
ConfirmDialog.propTypes = propTypes;

export default ConfirmDialog;