import { ResponsivePie } from '@nivo/pie'

import {data} from './data'
import { useTheme } from '@mui/material'

export default function DashPie() {
  const theme = useTheme();
  return (
    <div style={{height: "80px", width: "80px", marginTop: ".5rem",}}>
      <ResponsivePie
        data={data}
        theme={{
  "text": {
      "fontSize": 11,
      "fill": theme.palette.text.primary,
      "outlineWidth": 0,
      "outlineColor": "transparent"
  },
  "axis": {
      "domain": {
          "line": {
              "stroke": theme.palette.text.primary,
              "strokeWidth": 1
          }
      },
      "legend": {
          "text": {
              "fontSize": 12,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
          }
      },
      "ticks": {
          "line": {
              "stroke": theme.palette.text.primary,
              "strokeWidth": 1
          },
          "text": {
              "fontSize": 11,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
          }
      }
  },
  "grid": {
      "line": {
          "stroke": theme.palette.text.primary,
          "strokeWidth": 0
      }
  },
  "legends": {
      "title": {
          "text": {
              "fontSize": 11,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
          }
      },
      "text": {
          "fontSize": 11,
          "fill": theme.palette.text.primary,
          "outlineWidth": 0,
          "outlineColor": "transparent"
      },
      "ticks": {
          "line": {},
          "text": {
              "fontSize": 10,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
          }
      }
  },
  "annotations": {
      "text": {
          "fontSize": 13,
          "fill": theme.palette.text.primary,
          "outlineWidth": 2,
          "outlineColor": "#ffffff",
          "outlineOpacity": 1
      },
      "link": {
          "stroke": "#000000",
          "strokeWidth": 1,
          "outlineWidth": 2,
          "outlineColor": "#ffffff",
          "outlineOpacity": 1
      },
      "outline": {
          "stroke": "#000000",
          "strokeWidth": 2,
          "outlineWidth": 2,
          "outlineColor": "#ffffff",
          "outlineOpacity": 1
      },
      "symbol": {
          "fill": "#000000",
          "outlineWidth": 2,
          "outlineColor": "#ffffff",
          "outlineOpacity": 1
      }
  },
  "tooltip": {
      "container": {
          "background": theme.palette.text.primary,
          "fontSize": 12,
          "color":  theme.palette.background.paper
      },
      "basic": {},
      "chip": {},
      "table": {},
      "tableCell": {},
      "tableCellValue": {}
  }
        }}
        margin={{ top: 0, right: 10, bottom: 0, left: 10 }}
        startAngle={-4}
        innerRadius={0.55}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'nivo' }}
        borderWidth={2}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        isInteractive={false}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[]}
      />
      </div>
  )
}
