import {useQuery} from '@tanstack/react-query';
import React from 'react';
import ShiftsDetail from 'src/component/ShiftsDetail';

import {dutyInfo} from '../data/dutyInfo';

function getValidTimeStr(timeStr) {
  const match = timeStr.match(/^(\d{1,2}):(\d{2})\s(AM|PM)$/);
  if (match) {
    let hour = (Number(match[1]) % 12) + (match[3] === 'PM' ? 12 : 0);
    const minute = match[2];
    if (hour < 2) {
      // If hour is less than 2 (i.e., before 2:00 AM), add 1 day to the date
      const date = new Date('2000-01-01');
      date.setDate(date.getDate() + 1);
      //       hour += 24;
      return `${date.toISOString().
          substring(0, 10)}T${hour.toString().padStart(2, '0')}:${minute}:00`;
    } else {
      return `2000-01-01T${hour.toString().
          padStart(2, '0')}:${minute}:00`;
    }
  }
}

function thoseYouNeed(targetArray, isDead) {
  return new Promise((resolve, reject) => {
    const from = new Date('2000-01-02T00:30:00');
    const to = new Date('2000-01-01 06:15:00');

    const allPrefixes = targetArray.map(
        ({dutyNumber}) => dutyNumber.substring(0, 3));
    const prefixes = [...new Set(allPrefixes)];

    console.log(prefixes);

    const queryType = isDead ? (shiftObject) => {
      const {dutyNumber, bNT, bFT, remarks} = shiftObject;

      const prefix = dutyNumber.substring(0, 3);
      const vBNT = getValidTimeStr(bNT);
      const vBFT = getValidTimeStr(bFT);
      const shiftStart = new Date(vBNT);
      const shiftEnd = new Date(vBFT);

      return shiftEnd >= from && prefix == 'C15';

    } : (shiftObject) => {
      console.log('Nope');
    };

    const results = targetArray.filter(queryType);

    if (results.length > 0) {
      resolve(results);
    } else {
      reject(new Error('No results found'));
    }
  });
}

function ShowShifts() {

  const {isLoading, error, data} = useQuery({
    queryKey: ['shiftData'],
    queryFn: () => thoseYouNeed(dutyInfo, true).then((res) => {
      return res;
    }),
  });

  const shiftDetail = () => {
    if (isLoading) return 'Loading Data...';
    if (error) return `An error has occurred: ${error.message}`;
    if (data) {
      return data.map(
          (shiftObject) => <ShiftsDetail shiftObject={shiftObject}
                                         key={shiftObject.dutyNumber}/>);
    }
  };

  return <div>
    <h1 className={'accent-gray-200'}>Below shows the result</h1>
    {shiftDetail()}
  </div>;

}

export default ShowShifts;
