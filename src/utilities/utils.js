import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesColors = {
	deaths: {
		rgb: "rgb(248, 19, 19)",
		multiplier: 100,
	},

	cases: {
		rgb: "rgb(43, 41, 41)",
		multiplier: 200,
	},
	recovered: {
		rgb: "rgb(30, 180, 62)",
		multiplier: 150,
	},
};

export function sortData(data) {
	const sortedData = [...data];
	sortedData.sort((a, b) => {
		if (a.cases > b.cases) {
			return -1;
		} else {
			return 1;
		}
	});
	return sortedData;
}

export function showMapData(data, casesType = "cases") {
	return data.map((country) => (
		<Circle
        key={country.toString()}
			center={[country.countryInfo.lat, country.countryInfo.long]}
			fillOpacity={0.5}
			color={casesColors[casesType].rgb}
			fillColor={casesColors[casesType].rgb}
			radius={
				Math.sqrt(country[casesType]) * casesColors[casesType].multiplier
			}>
			<Popup>
				<div className="pop-container">
					<div
						className="pop-flag"
						style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
					/>
					<div className="pop-name">
						<strong>{country.country}</strong>
					</div>
					<div className="pop-cases">
						{" "}
						Cases: {numeral(country.cases).format("0,0")}
					</div>
					<div className="pop-recovered">
						{" "}
						Recovered: {numeral(country.recovered).format("0,0")}
					</div>
					<div className="pop-deaths" style={{ color: "red" }}>
						{" "}
						Deaths: {numeral(country.deaths).format("0,0")}
					</div>
				</div>
			</Popup>
		</Circle>
	));
}

export const formatData = (stat) =>
	stat ? `+${numeral(stat).format("0.0a")}` : "0 cases";
