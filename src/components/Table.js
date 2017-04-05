import React from 'react';
import Row from './Row';

const Table = ({ data }) => (
  <table>
    <thead>
      <tr>
        <th>Ticker</th>
        <th>Price</th>
        <th>Graph</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => {
        return (
          <Row key={index} data={item} />
        );
      })}
    </tbody>
  </table>
);

export default Table;
