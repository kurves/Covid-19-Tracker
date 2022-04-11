import "./App.css";
import { useState, useEffect } from "react";
import Map from "./components/Map";
import Table from "./components/Table";
import BoxInfo from "./components/BoxInfo";
import {
	FormControl,
	Card,
	CardContent,
	Select,
	MenuItem,
} from "@material-ui/core";
import { sortData ,formatData} from "./utilities/utils";
import "leaflet/dist/leaflet.css";

function App() {
	const [countries, setCountries] = useState([]);
	const [country, setCountry] = useState("worldWide");
	const [countryDetails, setCountryDetails] = useState({});
	const [tableData, setTableData] = useState([]);
	const [mapCenter, setMapCenter] = useState({lat:34.80746,lng:-40.4976 });
	const [mapZoom, setMapZoom] = useState(3);
const[mapCountries,setMapCountries]=useState([])
const[casesType,setCasesType]=useState('cases')

	useEffect(() => {
		fetch("https://disease.sh/v3/covid-19/all")
			.then((res) => res.json())
			.then((data) => {
				setCountryDetails(data);
			});
	}, []);

	useEffect(() => {
		const displayCountries = async () => {
			await fetch("https://disease.sh/v3/covid-19/countries")
				.then((res) => res.json())
				.then((data) => {
					const countries = data.map((country) => ({
						name: country.country,
						value: country.countryInfo.iso2,
					}));
					const sortedData = sortData(data);
					setTableData(sortedData);
					setCountries(countries);
          setMapCountries(data)
				});
		};
		displayCountries();
	}, []);

	const handleCountryChange = async (e) => {
		const countryCode = e.target.value;
		setCountry(countryCode);

		const url =
			countryCode === "worldWide"
				? "https://disease.sh/v3/covid-19/all"
				: `https://disease.sh/v3/covid-19/countries/${countryCode}`;
		await fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setCountryDetails(data);
				setCountry(countryCode);

      setMapCenter([data.countryDetails.lat, data.countryDetails.long])
setMapZoom(4);

			});
	};

	return (
		<div className="app">
			<div className="app__leftSide">
				<div className="app__header">
					<h1>Covid-19 Tracker</h1>
					<FormControl className="app__dropdown">
						<Select
							variant="outlined"
							value={country}
							onChange={handleCountryChange}>
							<MenuItem value="worldWide">Worldwide</MenuItem>
							{countries.map((country,id) => (
								<MenuItem key={id}value={country.value}>{country.name}</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>

				<div className="app__stats">
					<BoxInfo
						onClick={() => setCasesType("cases")}
						active={casesType === "cases"}
						title="Coronavirus Cases"
						cases={formatData(countryDetails.todayCases)}
						total={formatData(countryDetails.cases)}
					/>

					<BoxInfo
						active={casesType === "deaths"}
						onClick={() => setCasesType("deaths")}
						title="Coronavirus Deaths"
						cases={formatData(countryDetails.todayDeaths)}
						total={formatData(countryDetails.deaths)}
					/>

					<BoxInfo
						active={casesType === "recoveries"}
						onClick={() => setCasesType("recovered")}
						title="Coronavirus Recoveries"
						cases={formatData(countryDetails.todayRecovered)}
						total={formatData(countryDetails.recovered)}
					/>
				</div>
				<Map
					countries={mapCountries}
					casesType={casesType}
					center={mapCenter}
					zoom={mapZoom}
				/>
			</div>
			<div className="app__rightSide">
				<Card>
					<CardContent>
						<h2>Live Cases by Country</h2>
						<Table countries={tableData} />
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default App;
