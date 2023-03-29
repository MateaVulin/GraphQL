import { useState, useEffect } from "react";
import "./App.css";
import { gql, request } from "graphql-request";

const query = gql`
{
countries{
  capital
  currency
  name
  code
}
};`;

function getCountries() {
  const [data, setData] = useState({ countries: [] });

  const fetchData = async () => {
    try {
      const countriesData = await request(
        "https://countries.trevorblades.com/graphql",
        query
      );
      setData(countriesData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data.countries.map((country) => {
    <div key={country.code}>
      Capital of {country.name} is {country.capital} and the currency is
      {country.currency}
    </div>;
  });
}
function App() {
  return (
    <div className="App">
      <h1> GraphQL</h1>
    </div>
  );
}

export default App;
// graphql je alternativa restu za dohvaćanje podataka i možemo birati koje podatke želimo dohvatiti
