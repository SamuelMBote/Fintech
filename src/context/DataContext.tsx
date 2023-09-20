import React from 'react';
import useFetch from '../hooks/useFetch';
import IVenda from '../interfaces/IVenda';

interface IDataContext {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
}
const DataContext = React.createContext<IDataContext | null>(
  {} as IDataContext,
);
export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context)
    throw new Error('useData precisa estar dentro do ContexDataProvider');
  return context;
};

function getDaysAgo(n: number): string {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({children}: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState<string>(getDaysAgo(14));
  const [final, setFinal] = React.useState<string>(getDaysAgo(0));
  const {data, loading, error} = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`,
  );

  return (
    <DataContext.Provider
      value={{data, loading, error, inicio, setInicio, final, setFinal}}
    >
      {children}
    </DataContext.Provider>
  );
};
