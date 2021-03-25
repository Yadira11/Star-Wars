import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
export const Vistaplanetcard = props => {
	const { store, actions } = useContext(Context);
	const { posicion } = useParams();
	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4">
					<strong>{store.planets[posicion].name}</strong>
				</h1>
				<div className="row">
					<img
						src="https://p4.wallpaperbetter.com/wallpaper/35/205/74/planet-venus-planets-venus-space-planets-hd-art-wallpaper-preview.jpg"
						alt="Trulli"
						width="400"
					/>
				</div>
				<p className="card-text text-primary">
					<strong>{store.planets[posicion].name}</strong>
					<br />
					<strong>title: &nbsp;</strong>
					{store.planets[posicion].titulo}
					<br />
					<strong>population</strong>
					{store.planets[posicion].population}
					<br />
					<strong>climate: &nbsp;</strong>
					{store.planets[posicion].climate}
					<br />
					<strong>gravity: &nbsp;</strong>
					{store.planets[posicion].gravity}
				</p>
				<hr className="card-body bg-dark" />
			</div>
		</div>
	);
};
