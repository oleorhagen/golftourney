import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

import graphql from "babel-plugin-relay/macro";

import { memo, useState } from "react";

import { useLazyLoadQuery } from "react-relay/hooks";

const GetStatisticsQuery = graphql`
  query statsGetQuery($tournamentId: UUID!) {
    statistics(filter: { tournamentId: { equalTo: $tournamentId } }) {
      nodes {
        scorerId
        tournamentId
        expectedPoints
        playerPar
        totalPoints
      }
    }
  }
`;

const ScoreChart = memo(function ScoreChart({ data }) {
  return (
    <ResponsiveContainer
      className="leaderContainer"
      width="100%"
      height="100%"
      minHeight="40vh"
      minWidth="40vw"
    >
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis type="integer" />
        <XAxis />
        <Tooltip />
        <Legend />
        <Line
          type="basic"
          dataKey="totalPoints"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />
          <ReferenceLine
          // y={20}
          label="Par"
          stroke="red"
          strokeDasharray="3 3"
        />
      </LineChart>
    </ResponsiveContainer>
  );
});

const renderScoreParchartLegend = (value, entry) => {
  return <span>Score</span>;
};

const ScoreParChart = memo(function ScoreParChart({ data }) {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      minHeight="40vh"
      minWidth="40vw"
    >
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis
          type="number"
          domain={["dataMin - 1", "dataMax + 1"]}
          tick={true}
          scale={"linear"}
        />
        <XAxis />
        <Tooltip />
        <Legend formatter={renderScoreParchartLegend} />
        <Line
          type="basic"
          dataKey="playerPar"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <ReferenceLine
          x={0}
          y={0}
          label="Par"
          stroke="red"
          strokeDasharray="3 3"
        />
      </LineChart>
    </ResponsiveContainer>
  );
});

export default function PlayerScoreChart(props) {
  const data = useLazyLoadQuery(
    GetStatisticsQuery,
    { tournamentId: props.tournamentId },
    { fetchPolicy: "network-only" },
  );

  console.log(`Got data: ${JSON.stringify(data)}`);

  // -- TODO - Spinner or similar
  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <ScoreChart data={data.statistics.nodes} />
      <ScoreParChart data={data.statistics.nodes} />
    </>
  );
}
