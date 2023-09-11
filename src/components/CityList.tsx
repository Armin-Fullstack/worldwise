import { useCities } from "../contexts/CitiesProvider";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

export default function CityList(): JSX.Element {
  const { cities, isLoading } = useCities();
  // we wrote the useEffect in here bc we need to show data at first here.
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}
