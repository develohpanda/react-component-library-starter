import * as React from 'react';
import {Card} from 'reactstrap';

interface Props {
  className?: string;
  title: string;
  description: string;
}

export const SampleComponent: React.FunctionComponent<Props> = ({
  className,
  title,
  description,
}) => (
  <Card className={className}>
    <h1>{title}</h1>
    <p>{description}</p>
  </Card>
);
