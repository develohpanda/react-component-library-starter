import * as React from 'react';

interface Props {
  initiallyOn?: boolean;
  render(props: InjectedProps): React.ReactNode;
}

interface InjectedProps {
  isOn: boolean;
  toggle(): void;
}

export const ToggleContainer: React.FunctionComponent<Props> = ({
  initiallyOn,
  render,
}) => {
  const [isOn, toggle] = React.useState(initiallyOn || false);

  return <>{render({isOn, toggle: () => toggle(!isOn)})}</>;
};
