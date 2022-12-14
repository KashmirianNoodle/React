import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import cubejs from "@cubejs-client/core";
import moment from "moment";
import { QueryRenderer } from "@cubejs-client/react";

const cubejsApi = cubejs(process.env.REACT_APP_CUBEJS_TOKEN, {
  apiUrl: process.env.REACT_APP_API_URL
});

const dateFormatter = (item) => moment(item).format("MMM YY");

class App extends Component {
  render() {
    return (
      <QueryRenderer
        query={{
          measures: ["Orders.count"],
          timeDimensions: [
            {
              dimension: "Orders.createdAt",
              dateRange: ["2019-01-01", "2020-12-31"],
              granularity: "month"
            }
          ]
        }}
        cubejsApi={cubejsApi}
        render={({ resultSet }) => {
          if (!resultSet) {
            return "Loading...";
          }

          return (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={resultSet.chartPivot()}>
                <XAxis dataKey="x" tickFormatter={dateFormatter} />
                <YAxis />
                <Tooltip labelFormatter={dateFormatter} />
                <Bar dataKey="Orders.count" fill="rgba(106, 110, 229)" />
              </BarChart>
            </ResponsiveContainer>
          );
        }}
      />
    );
  }
}

export default App;
