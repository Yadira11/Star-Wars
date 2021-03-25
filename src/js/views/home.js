import React, { useState, useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { PersonCard } from "../component/personCard";
import { PlanetCard } from "../component/planetCard";
import { Context } from "../store/appContext";
export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadPerson();
		actions.loadPlanet();
	}, []);
	console.log(store.peoples);
	return (
		<div>
			<h1 className="text-danger">Personajes</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				<br />
				{store.peoples.map((people, i) => {
					return (
						<div key={i}>
							<PersonCard
								title={people.name}
								textGender={people.gender}
								textEyeC={people.eye_color}
								textHairC={people.hair_color}
								textMass={people.mass}
							/>
						</div>
					);
				})}
			</div>
			<h1 className="text-danger">Planetas</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				<br />
				{store.planets.map((planet, i) => {
					return (
						<div key={i}>
							<PlanetCard
								title={planet.name}
								population={planet.population}
								climate={planet.climate}
								gravity={planet.gravity}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};
