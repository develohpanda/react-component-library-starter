import classnames from 'classnames';
import * as React from 'react';

export const SpacedContainer: React.FunctionComponent<React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>> = props => {
  const {className, ...remaining} = props;

  return (
    <div
      className={classnames(
        'p-2 bg-white m-4 d-inline-flex border border-secondary border-2 rounded',
        className
      )}
      {...remaining}
    />
  );
};
