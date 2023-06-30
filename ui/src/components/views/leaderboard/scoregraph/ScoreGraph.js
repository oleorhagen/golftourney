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
  curveStepAfter,
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
  query ScoreGraphQuery {
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

function ScoreGraph(props) {
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

  console.log("player points array:");
  console.log(player_points_array);

  let sum = 0;
  var cum_sum = player_points_array.map(((sum = 0), (n) => (sum += n)));
  console.log("cum sum:");
  console.log(cum_sum);

  const xScale_len = scores.filter((d) => d.points != "0").length + 1;
  console.log(`x len: ${xScale_len}`);

  const data_ = cum_sum.slice(0, xScale_len);
  console.log("graph data: ");
  console.log(data_);

  // scales
  const xScale = scaleLinear({
    range: [0, xMax], // Scale the x values to this
    domain: extent(data_), // Returns the min and max of the values
  });

  const yScale = scaleLinear({
    range: [yMax, 0],
    domain: extent(data_),
  });

  // TODO - use the colour palette from here:
  /* https://github.com/BlakeRMills/MetBrewer */

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
          <LinePath
            curve={curveStepAfter}
            data={cum_sum.slice(0, xScale_len)}
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

export default ScoreGraph;
