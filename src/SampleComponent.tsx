import * as React from 'react';

interface Props {
  className?: string;
  title: string;
  description: string;
  defaultVehicle?: string;
}

export const SampleComponent: React.FunctionComponent<Props> = ({
  className,
  title,
  description,
  defaultVehicle,
}) => {
  const [vehicle, setVehicle] = React.useState<string | undefined>(
    defaultVehicle
  );
  const selectVehicle = (event: any) => setVehicle(event.target.value);

  React.useEffect(() => {
    setVehicle(defaultVehicle);
  }, [defaultVehicle]);

  return (
    <div className={className}>
      <h1>{title}</h1>
      <p>{description}</p>

      <label>Select a vehicle </label>
      <select onChange={selectVehicle} value={vehicle}>
        <option value="Skateboard">Skateboard</option>
        <option value="Bike">Bike</option>
        <option value="Car">Car</option>
        <option value="Boat">Boat</option>
      </select>

      {vehicle && <div>Racing by {vehicle} !</div>}
    </div>
  );
};
