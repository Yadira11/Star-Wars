import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const PlanetCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col-md-10" style={{ width: "22rem", float: "left" }}>
			<div className="card mb-2">
				<img
					src="https://image.freepik.com/vector-gratis/planeta-tierra-neon_73458-795.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.population}</p>
					<p className="card-text">{props.climate}</p>
					<p className="card-text">{props.gravity}</p>

					<Link to={`/vistaplanetcard/${props.position}`}>
						<p className="btn btn-primary"> Boton</p>
					</Link>
					<Link onClick={() => actions.addFavorite(props.title, "planetas")}>
						<button type="button" className="btn btn-outline-warning">
							<i className="far fa-heart" />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	title: PropTypes.object,
	population: PropTypes.object,
	climate: PropTypes.object,
	gravity: PropTypes.object,
	position: PropTypes.number
};
