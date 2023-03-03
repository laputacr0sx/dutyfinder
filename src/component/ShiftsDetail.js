import React from 'react';

function ShiftsDetail({shiftObject}) {

  const {dutyNumber, bNT, bNL, bFL, bFT, duration, remarks} = shiftObject;

  return (<>
        <table>
          <thead>
          <tr color={'blue'}>
            <th>DutyName</th>
            <th>bookOnLocation</th>
            <th>bookOnTime</th>
            <th>bookOffTime</th>
            <th>bookOffLocation</th>
            <th>duration</th>
            <th>remarks</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{dutyNumber}</td>
            <td>{bNL}</td>
            <td>{bNT}</td>
            <td>{bFT}</td>
            <td>{bFL}</td>
            <td>{duration}</td>
            <td>{remarks}</td>
          </tr>
          </tbody>
        </table>

      </>

  );

}

export default ShiftsDetail;