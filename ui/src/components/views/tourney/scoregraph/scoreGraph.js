// Graph the score of all players, for all to see

import React, { useState } from "react";

import { Typography } from "@mui/material";

import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
} from "@visx/xychart";

import {
  curveStepBefore,
  curveLinear,
  curveCatmullRom,
  curveStep,
} from "@visx/curve";

import { AxisLeft, AxisBottom, AxisTop } from "@visx/axis";

import { Group } from "@visx/group";
// import {
//   Glyph as CustomGlyph,
//   GlyphCircle,
//   GlyphCross,
//   GlyphDiamond,
//   GlyphSquare,
//   GlyphStar,
//   GlyphTriangle,
//   GlyphWye,
// } from '@visx/glyph';
import { LinePath, AreaClosed } from "@visx/shape";
// import genDateValue, { DateValue } from '@visx/mock-data/lib/generators/genDateValue';
import { scaleLinear } from "@visx/scale";
import { curveMonotoneX, curveBasis } from "@visx/curve";
import { extent, max } from "d3-array";

import graphql from "babel-plugin-relay/macro";

import { useLazyLoadQuery } from "react-relay/hooks";

const getScoresQuery = graphql`
  query scoreGraphQuery {
    allScores(orderBy: HOLE_ID_DESC) {
      nodes {
        points
        playerId
        holeId
      }
    }
  }
`;

// colors
export const primaryColor = "#8921e0";
export const secondaryColor = "#ffffff";
const contrastColor = "#ffffff";

const width = 750;
const height = 400;

const margin = {
  top: 60,
  bottom: 60,
  left: 80,
  right: 80,
};
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

// Format x-axis values;
const formatValue = (value) => Math.round(value);

function compareFunction(a, b) {
  return Number(a.holeId) > Number(b.holeId);
}

function TourneyGraph(props) {
  // TODO - Get the scores from the server - Should this be a subscription (?)

  const data = useLazyLoadQuery(getScoresQuery);
  console.log("Current score data:");
  console.log(data);

  // Get the score nodes
  const {
    allScores: { nodes },
  } = data;
  const scores = [...nodes].sort(compareFunction);

  console.log(`scores:`);
  console.log(scores);

  var player_points_array = [0].concat(scores.map((e) => Number(e.points)));

  console.log("player poitns array:");
  console.log(player_points_array);

  let sum = 0;
  var cum_sum = player_points_array.map(((sum = 0), (n) => (sum += n)));
  console.log("cum sum:");
  console.log(cum_sum);

  // scales
  const xScale = scaleLinear({
    range: [0, xMax], // Scale the x values to this
    domain: [0, scores.length], // Returns the min and max of the values
    nice: true,
  });

  const yScale = scaleLinear({
    range: [yMax, 0],
    domain: [0, Math.max(...cum_sum) + 2],
    nice: true,
  });

  return (
    <>
      <Typography variant="h3">Current Scores</Typography>

      <svg width={width} height={height}>
        <Group top={margin.top} left={margin.left}>
          <AxisLeft
            label="points"
            hideZero={true}
            tickTextFill={"#000000"}
            stroke={"#000000"}
            tickStroke={"#000000"}
            scale={yScale}
            tickLabelProps={() => ({
              fill: "#000000",
              fontSize: 11,
              textAnchor: "end",
            })}
          />
          <AxisBottom
            label="holes"
            top={height}
            hideZero={true}
            scale={xScale}
            stroke={"#000000"}
            tickFormat={formatValue}
            tickStroke={"#000000"}
            tickTextFill={"#000000"}
            numTicks={scores.length + 1}
            tickLabelProps={() => ({
              fill: "#000000",
              fontSize: 11,
              textAnchor: "bottom",
            })}
          />
          <LinePath
            curve={curveStep}
            data={cum_sum}
            x={(d) => xScale(d) ?? 0}
            y={(d) => yScale(d) ?? 0}
            stroke={"#000000"}
            strokeWidth={3}
          />
        </Group>
      </svg>
    </>
  );
}

export default TourneyGraph;
