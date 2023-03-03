import React from 'react';

function ShiftsDetail({shiftObject}) {

  const {dutyNumber, bNT, bNL, bFL, bFT, duration, remarks} = shiftObject;

  return (<>

        <p className={''} color={'red'}>{dutyNumber}</p>


        {/*<table*/}
        {/*    className="table-fixed border border-zinc-800 border-collapse border-spacing-2">*/}
        {/*  <thead>*/}
        {/*  <tr>*/}
        {/*    <th>DutyName</th>*/}
        {/*    <th>bookOnLocation</th>*/}
        {/*    <th>bookOnTime</th>*/}
        {/*    <th>bookOffTime</th>*/}
        {/*    <th>bookOffLocation</th>*/}
        {/*    <th>duration</th>*/}
        {/*    <th>remarks</th>*/}
        {/*  </tr>*/}
        {/*  </thead>*/}
        {/*  <tbody>*/}
        {/*  <tr align={'center'}>*/}
        {/*    <td>{dutyNumber}</td>*/}
        {/*    <td>{bNL}</td>*/}
        {/*    <td>{bNT}</td>*/}
        {/*    <td>{bFT}</td>*/}
        {/*    <td>{bFL}</td>*/}
        {/*    <td>{duration}</td>*/}
        {/*    <td>{remarks}</td>*/}
        {/*  </tr>*/}
        {/*  </tbody>*/}
        {/*</table>*/}
      </>

  );

}

export default ShiftsDetail;