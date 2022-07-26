import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Heading } from "monday-ui-react-core";

import { selectSumOfTransactionsByType } from "../../redux/transactions/selectors/selectSumOfTransactionsByType";
import styles from "./compareExpenesIncome.module.css";

const CompareExpenesIncomes = () => {
  const { incomes, expenses } = useSelector(selectSumOfTransactionsByType);

  return (
    <div className={styles.container}>
      <Heading value="Expenses vs. Incomes" type={Heading.types.h2} />
      <Heading
        type={Heading.types.h2}
        value="This month comparing your expenses vs. your Incomes:"
        size="small"
      />
      <BarChart
        width={300}
        height={300}
        data={[
          {
            Incomes: incomes,
            Expenses: expenses,
            amt: 1000,
          },
        ]}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Incomes" fill="#82ca9d" radius={[10, 10, 0, 0]} />
        <Bar
          dataKey="Expenses"
          fill="var(--shareable-color)"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
      <Heading
        className={styles.heading}
        type={Heading.types.h2}
        value={`At the end of the month your balance will be ${
          incomes - expenses
        }$`}
        size="small"
      />
    </div>
  );
};

export default CompareExpenesIncomes;
