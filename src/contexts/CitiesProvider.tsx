import { createContext, useContext, useEffect, useReducer } from "react";

const CitiesContext = createContext();
const BASE_URL = "http://localhost:9000";

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};
function reducer(currentStete, action) {
  //  many logic as possible , handle business logic and all state transition. reducer should be a pure function so
  // we can't send a api request inside the reducer function
  switch (action.type) {
    // following a meaningful name in the large application (write the EVENT)
    case "loading":
      return {
        ...currentStete,
        isLoading: true,
      };
    case "cities/loaded":
      return {
        ...currentStete,
        cities: action.payload,
        isLoading: false,
      };
    case "city/created":
      return {
        ...currentStete,
        cities: [...currentStete.cities, action.payload],
        isLoading: false,
        currentCity: action.payload,
      };
    case "city/deleted":
      return {
        ...currentStete,
        cities: currentStete.cities.filter(
          (city) => city.id !== action.payload
        ),
        isLoading: false,
        currentCity: {},
      };
    case "city/loaded":
      return {
        ...currentStete,
        currentCity: action.payload,
        isLoading: false,
      };
    case "rejected":
      return {
        ...currentStete,
        isLoading: false,
        error: action.payload,
      };
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: "There was an error loading cities",
        });
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    if(Number(id) === currentCity.id) return
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "There was an error loading the city",
      });
    }
  }

  // creating a POST request to an API (sending some data to an API)
  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error(`HTTP Error! Status: ${res.status}`);
      const data = await res.json();
      dispatch({ type: "city/created", payload: data });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "There was an error creating a city",
      });
    }
  }

  async function deleteCity(id) {
    try {
      dispatch({ type: "loading" });
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "city/deleted", payload: id });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "There was an error deleting a city",
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
        error,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const contextValue = useContext(CitiesContext);
  if (contextValue === undefined)
    throw new Error("CitiesContext was used outside of the CitiesProvider");
  return contextValue;
}
export { CitiesProvider, useCities };
