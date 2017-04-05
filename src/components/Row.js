import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Direction = ({ val = 0 }) => (
  <div className="direction">
    {val === -1 ?
      <div style={{ color: '#222' }}>{"\u2B07"}</div> :
      <div style={{ color: '#222' }}>{(val !== 0) && "\u2B06"}</div>
    }
  </div>
);

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: 0,
      changed: 'trasparent',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps.data;

    const diff = value[0] - value[1];

    this.setState({
      changed: diff < 0 ? 'red' : 'green'
    })

    if (diff) {
      this.setState({
        direction: diff < 0 ? -1 : 1
      });
    }
  }

  render() {
    const { data } = this.props;
    return (
      <tr>
        <td>{data.name}</td>
        <td className={`changed-${this.state.changed}`}>
          <div className="cell">
            <div className="value">
              {data.value[0].toFixed(3)}
            </div>
            <Direction val={this.state.direction} />
          </div>
        </td>
        <td>
          <Sparklines data={data.value}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </td>
      </tr>
    );
  }
}

export default Row;
