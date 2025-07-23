import { createContext, useState } from 'react'
export const CaptainDataContext = createContext();

function CaptainContext({children}) {
    const [captain, setCaptain] = useState(null)
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    }

  return (
    <div>
        <CaptainDataContext.Provider value={{captain, setCaptain, isLoading, setIsLoading, error, setError, updateCaptain}}>
            {children}
        </CaptainDataContext.Provider>
    </div>
  )
}

export default CaptainContext;