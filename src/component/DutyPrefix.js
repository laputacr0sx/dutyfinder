import React from 'react';
import {useQuery} from 'react-query';
import getPrefixes from 'src/pages/api/dutyUtility';

function DutyPrefix() {
  const {isLoading, error, data} = useQuery({
        queryKey: ['getPrefix'], queryFn: () => getPrefixes.then((res) => res),
      })
  ;

  if (isLoading) return 'Loading Data...';

  if (error) return `An error has occurred: ${error.message}`;

  if (data) {
    return data;
  }
}

export default DutyPrefix;