import { createContext, useContext, useEffect, useState } from "react"


const CitiesContext = createContext()
const BASE_URL = "http://localhost:9000"

function CitiesProvider({children}) {
  const [cities , setCities] = useState([])
  const [isLoading , setIsLoading] = useState<boolean>(false)
  
  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true)
        const res = await fetch(`${BASE_URL}/cities`)
        const data = await res.json()
        setCities(data)
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false)
      }
    }
    fetchCities()
  } , [])

return(
  <CitiesContext.Provider value={{
    cities,
    isLoading,
  }}>
    {children}
  </CitiesContext.Provider>
)
}

function useCities() {
  const contextValue = useContext(CitiesContext)
  if(contextValue === undefined) throw new Error("CitiesContext was used outside of the CitiesProvider")
  return contextValue
}
export {CitiesProvider , useCities}
