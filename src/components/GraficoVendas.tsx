import React from 'react';
import IVenda from '../interfaces/IVenda';
import {
  CartesianGrid,
  Line,
  Legend,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';
interface VendaDia {
  data: string;
  pago: number;
  processando: number;
  falha: number;
}

function transformData(data: IVenda[]): VendaDia[] {
  const dias = data.reduce((acc: {[key: string]: VendaDia}, item) => {
    const dia = item.data.split(' ')[0];
    if (!acc[dia]) {
      acc[dia] = {data: dia, pago: 0, falha: 0, processando: 0};
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});
  return Object.values(dias);
}
const GraficoVendas = ({data}: {data: IVenda[]}) => {
  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width={'99%'} height={400}>
      <LineChart
        data={transformedData}
        margin={{top: 5, right: 20, left: 10, bottom: 5}}
      >
        <XAxis dataKey="data" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#a36af9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#fbcb21"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
