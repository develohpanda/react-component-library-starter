import * as React from 'react';

interface Props<T> {
  initial?: T;
  render(props: InjectedProps<T | undefined>): React.ReactNode;
}

export interface InjectedProps<T> {
  value: T;
  setValue(value: T): void;
}

export const StatefulContainer: React.FunctionComponent<Props<{}>> = ({
  initial,
  render,
}) => {
  const [value, setValue] = React.useState(initial);

  return <>{render({value, setValue})}</>;
};
