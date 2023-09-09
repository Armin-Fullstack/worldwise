import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";


export default function CountryList({ cities, isLoading }): JSX.Element {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  // const countries = cities.reduce((array , city ) => {
  //   if(!array.map(el => el.country).includes(city.country)){
  //     return [...array , {country: city.country , emoji: city.emoji}]
  //   } else return array
  // }
  // , [])
  const countries = Array.from(new Set(cities.map(city => city.country))).map(item => {
    const city = cities.find(element => element.country === item)
    return {country: city.country , emoji: city.emoji}
  })
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
