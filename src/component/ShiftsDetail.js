import React from 'react';

function ShiftsDetail({shiftObject}) {

  const {dutyNumber, bNT, bNL, bFL, bFT, duration, remarks} = shiftObject;

  return <p className={'bg-gray-600 accent-gray-100 xl'}>{dutyNumber}</p>;

}

export default ShiftsDetail;