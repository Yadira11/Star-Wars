import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
export const Vistapersoncard = props => {
	const { store, actions } = useContext(Context);
	const { posicion } = useParams();
	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4">
					<strong>{store.peoples[posicion].name}</strong>
				</h1>
				<div className="row">
					<img
						src="https://as.com/meristation/imagenes/2019/11/21/noticias/1574336961_955124_1574337025_noticia_normal.jpg"
						alt="Trulli"
						width="400"
					/>
				</div>
				<p className="card-text text-primary">
					<strong>{store.peoples[posicion].name}</strong>
					Titulo
					<br />
					<strong>Gender</strong>
					{store.peoples[posicion].gender}
					<br />
					<strong>Height: &nbsp;</strong>
					{store.peoples[posicion].height}
					<br />
					<strong>Mass: &nbsp;</strong>
					{store.peoples[posicion].mass}
				</p>
				<hr className="card-body bg-dark" />
			</div>
		</div>
	);
};
