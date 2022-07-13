import {select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import * as React from 'react';

import {SampleComponent} from '../src/SampleComponent';

storiesOf('Sample Component', module).add(
  'Default',
  () => {
    const vehicle = select(
      'Vehicle',
      ['Skateboard', 'Bike', 'Car', 'Boat'],
      undefined
    );

    return (
      <SampleComponent
        title={text('Title', 'This is a title')}
        defaultVehicle={vehicle}
        description={text(
          'Description',
          'Officia Lorem consequat fugiat eiusmod qui veniam culpa excepteur.'
        )}
      />
    );
  },
  {notes: 'Here are some notes about the component.'}
);
