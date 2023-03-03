import {dutyInfo} from 'src/data/dutyInfo';

export default function getPrefixes(req, res) {
  const allPrefixes = dutyInfo.map(({dutyNumber}) => {
    return dutyNumber.substring(0, 3);
  });

  let uniquePrefixes = [...new Set(allPrefixes)];

  res.status(200).json(uniquePrefixes);
}

