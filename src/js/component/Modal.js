import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


export const Modal = props => {
	const { store, actions } = useContext(Context);

	
	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Estas Seguro?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>Warning: La eliminacion será permanente</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary">
							Cancelar
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							onClick={() => actions.getDelete(store.id)}>
							Eliminar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	index: PropTypes.number
};

Modal.defaultProps = {
	show: false,
	onClose: null
};
