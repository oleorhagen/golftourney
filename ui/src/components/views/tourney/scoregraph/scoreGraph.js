// Graph the score of all players, for all to see

import React, { useState } from "react";

import { Typography } from "@mui/material";

import {
    AnimatedAxis, // any of these can be non-animated equivalents
    AnimatedGrid,
    AnimatedLineSeries,
    XYChart,
    Tooltip,
} from '@visx/xychart';

import { AxisLeft, AxisBottom } from '@visx/axis';

import { Group } from '@visx/group';
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
import { LinePath, AreaClosed } from '@visx/shape';
// import genDateValue, { DateValue } from '@visx/mock-data/lib/generators/genDateValue';
import { scaleLinear } from '@visx/scale';
import { curveMonotoneX, curveBasis } from '@visx/curve';
import { extent, max } from 'd3-array';

import graphql from "babel-plugin-relay/macro";

import {
    useLazyLoadQuery,
} from "react-relay/hooks";

// const defaultMargin = { top: 10, right: 10, bottom: 10, left: 10 };

const getScoresQuery = graphql`
query scoreGraphQuery {
  allScores(orderBy: HOLE_ID_ASC) {
    nodes {
      points
      playerId
      holeId
    }
  }
}
`;

const scores = [
      {
        "points": "1",
        "playerId": "1",
        "holeId": "3"
      },
      {
        "points": "2",
        "playerId": "1",
        "holeId": "11"
      },
      {
        "points": "3",
        "playerId": "1",
        "holeId": "5"
      },
      {
        "points": "4",
        "playerId": "1",
        "holeId": "14"
      },
      {
        "points": "5",
        "playerId": "1",
        "holeId": "16"
      },
      {
        "points": "6",
        "playerId": "1",
        "holeId": "12"
      },
      {
        "points": "7",
        "playerId": "1",
        "holeId": "15"
      },
      {
        "points": "8",
        "playerId": "1",
        "holeId": "17"
      },
      {
        "points": "9",
        "playerId": "1",
        "holeId": "18"
      },
      {
        "points": "10",
        "playerId": "1",
        "holeId": "4"
      },
      {
        "points": "10",
        "playerId": "1",
        "holeId": "13"
      },
      {
        "points": "10",
        "playerId": "1",
        "holeId": "7"
      },
      {
        "points": "11",
        "playerId": "1",
        "holeId": "8"
      },
      {
        "points": "12",
        "playerId": "1",
        "holeId": "6"
      },
      {
        "points": "13",
        "playerId": "1",
        "holeId": "9"
      },
      {
        "points": "4",
        "playerId": "1",
        "holeId": "1"
      },
      {
        "points": "3",
        "playerId": "1",
        "holeId": "2"
      },
      {
        "points": "15",
        "playerId": "1",
        "holeId": "10"
      }
  ];

// colors
export const primaryColor = '#8921e0';
export const secondaryColor = '#ffffff';
const contrastColor = '#ffffff';

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

const x = d => {console.log('x accessor'); console.log(Number(d.holeId)); return Number(d.holeId)};
const y = d => Number(d.points);

// scales
const xScale = scaleLinear({
    range: [0, xMax], // Scale the x values to this
    domain: [0, 100] // Returns the min and max of the values
});
const yScale = scaleLinear({
    range: [yMax, 0],
    domain: [0, max(scores, y)]
})

// // positions
// const getX = (d) => xScale(d.holeID );
// const getY = (d) => yScale(d.points);



const accessors = {
    xAccessor: (d) => d.x,
    yAccessor: (d) => d.y,
};

const scoreAccessors = {
    xAccessor: (d) => d.holeId,
    yAccessor: (d) => d.points,
};

function compareFunction(a,b) {
    return Number(a.holeId) < Number(b.holeId);
}


function TourneyGraph(props) {
    // TODO - Get the scores from the server - Should this be a subscription (?)

    // const data = useLazyLoadQuery(getScoresQuery);
    // console.log("Current score data:");
    // console.log(data);

    // // Get the score nodes
    // const {
    //     allScores: { nodes },
    // } = data;
    // const scores = [...nodes].sort(compareFunction);


    return (
        <>
            <Typography variant="h3">Current Scores</Typography>

            <svg width={width} height={height}>
                <Group top={margin.top} left={margin.left}>
                    <LinePath
                        data={scores}
                        x={d => xScale(Number(d.holeId))}
                        y={d => yScale(Number(d.points))}
                        strokeWidth={4}
                        fill={"green"}
                    />
                </Group>
            </svg>

        </>
    );
}

export default TourneyGraph;
