import DateInput from './DateInput';
import {useData} from '../context/DataContext';

const DateRange = () => {
  const {inicio, final, setInicio, setFinal} = useData();
  return (
    <form
      className="flex box"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <DateInput
        label="Inicio"
        name="inicio"
        value={inicio}
        onChange={({currentTarget}) => setInicio(currentTarget.value)}
      />

      <DateInput
        label="Final"
        name="final"
        value={final}
        onChange={({currentTarget}) => setFinal(currentTarget.value)}
      />
    </form>
  );
};

export default DateRange;
