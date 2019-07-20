import * as React from 'react';

export const FillerRows: React.FunctionComponent<{
  height?: string;
  count?: number;
}> = ({count, height}) => {
  const rows: Array<React.ReactNode> = [];
  for (let i = 0; i < (count || 1); i++) {
    rows.push(
      <div
        key={i}
        className={`${i % 2 === 0 ? 'bg-dark' : 'bg-light'} w-100`}
        style={{height: height || '200px'}}
      />
    );
  }

  return <React.Fragment>{rows}</React.Fragment>;
};
