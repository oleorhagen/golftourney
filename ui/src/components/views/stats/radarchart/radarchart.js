import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

import graphql from "babel-plugin-relay/macro";

import { memo, useState } from "react";

import { useLazyLoadQuery } from "react-relay/hooks";

const GetPlayerStatisticsQuery = graphql`
  query radarchartPlayerStatisticsQuery($scorerId: UUID!) {
    playerStatistics(condition: { scorerId: $scorerId }) {
      nodes {
        scorerId
        par
        averageStrokes
        averagePoints
        stddevPoints
        stddevStrokes
      }
    }
  }
`;

const PlayerRadarChart = memo(function PlayerRadarChart({ data }) {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      minHeight="60vh"
      minWidth="60vw"
    >
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="par" />
        <PolarRadiusAxis />
        <Radar
          name={data[0].scorerId}
          dataKey="averagePoints"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
});

export default function PlayerStatisticsRadarChart(props) {
  const data = useLazyLoadQuery(
    GetPlayerStatisticsQuery,
    { scorerId: props.scorerId },
    { fetchPolicy: "network-only" },
  );

  console.log(`Got data: ${JSON.stringify(data)}`);

  if (data?.playerStatistics?.nodes) {
    return <PlayerRadarChart data={data.playerStatistics.nodes} />;
  }

  return <div>No data</div>;
}
