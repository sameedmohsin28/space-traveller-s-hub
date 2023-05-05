import React from 'react';

const MissionsMock = () => (
  <table className="table">
    <thead className="thead">
      <tr className="thead-tr">
        <th className="head-data">Mission</th>
        <th className="head-data">Description</th>
        <th className="head-data">Status</th>
        <th className="head-data">Button</th>
      </tr>
    </thead>
    <tbody className="tbody">
      <tr className="tbody-tr">
        <td className="body-data">Apollo 11</td>
        <td className="body-data">Mission to the moon</td>
        <td className="body-data"><div className="status">Not a member</div></td>
        <td className="body-data"><button type="submit" className="reserve">Reserve</button></td>
      </tr>
    </tbody>
  </table>
);

export default MissionsMock;
