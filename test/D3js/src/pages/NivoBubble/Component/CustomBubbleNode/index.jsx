import React from 'react'
import PropTypes from 'prop-types'
import { themePropType } from '@nivo/core'

const BubbleNode = ({ node, style, handlers, theme }) => {
  if (style.r <= 0) return null;

  return (
    <g transform={`translate(${style.x},${style.y})`}>
      <circle
        r={style.r}
        {...handlers}
        fill={style.fill ? style.fill : style.color}
        stroke={style.borderColor}
        strokeWidth={style.borderWidth}
      />
      {node.label !== false && (
        <text
          textAnchor="middle"
          dominantBaseline="central"
          style={{
            ...theme.labels.text,
            fontSize: `${Math.round(
              (style.r / 3) * (10 / node.label.toString().substring(0, style.r / 3).length) + 1,
            )}px`,
            fill: style.labelTextColor,
            pointerEvents: 'none',
          }}
        >
          {node.label}
        </text>
      )}
    </g>
  );
}

BubbleNode.propTypes = {
  node: PropTypes.object.isRequired,
  style: PropTypes.shape({
    r: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    fill: PropTypes.string,
    borderWidth: PropTypes.number.isRequired,
    borderColor: PropTypes.string.isRequired,
    labelTextColor: PropTypes.string.isRequired,
  }).isRequired,
  handlers: PropTypes.object.isRequired,
  theme: themePropType.isRequired,
}

export default BubbleNode