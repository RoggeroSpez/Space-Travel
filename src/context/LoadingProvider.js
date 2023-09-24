import {createContext, useState, useCallback} from "react";

const INITIAL_LOADING = {
  isLoading: false,
  enableLoading: function () {},
  disableLoading: function () {}
};
export const LoadingContext = createContext(INITIAL_LOADING);
function LoadingProvider ({children})
{
  const [isLoading, setIsLoading] = useState(INITIAL_LOADING.isLoading);

  const enableLoading = useCallback(() =>
                                    {
                                      setIsLoading(true);
                                    },
                                    []
  );
  const disableLoading = useCallback(() =>
                                     {
                                       setIsLoading(false);
                                     },
                                     []
  );
  return (
    <LoadingContext.Provider value={{isLoading, enableLoading, disableLoading}}>
      {children}
    </LoadingContext.Provider>
  );
}
export default LoadingProvider;
