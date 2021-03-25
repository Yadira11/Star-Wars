import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PersonCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col-md-10" style={{ width: "24rem", float: "left" }}>
			<div className="card mb-2">
				<img
					src="https://images.unsplash.com/photo-1586136194012-35ceaddbd773?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.textGender}</p>
					<p className="card-text">{props.textEyeC}</p>
					<p className="card-text">{props.textHairC}</p>
					<p className="card-text">{props.textMass}</p>
					<Link to="singleProper">
						<p className="btn btn-primary"> boton</p>
					</Link>
					<Link onClick={() => actions.addFavorite(props.title, "persona")}>
						<button type="button" className="btn btn-outline-warning">
							<i className="far fa-heart" />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
PersonCard.propTypes = {
	title: PropTypes.string,
	textGender: PropTypes.string,
	textEyeC: PropTypes.string,
	textHairC: PropTypes.string,
	textMass: PropTypes.string
};
