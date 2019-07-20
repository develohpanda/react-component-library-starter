import {select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import * as React from 'react';

import {SampleComponent} from '../src/SampleComponent';

storiesOf('Sample Component', module).add(
  'Default',
  () => {
    const padding = select('Padding', [1, 2, 3, 4, 5], 2);
    const margin = select('Margin', [1, 2, 3, 4, 5], 2);

    return (
      <SampleComponent
        className={`p-${padding} m-${margin}`}
        title={text('Title', 'This is a title')}
        description={text(
          'Description',
          'Officia Lorem consequat fugiat eiusmod qui veniam culpa excepteur.'
        )}
      />
    );
  },
  {notes: 'Here are some notes about the component.'}
);
