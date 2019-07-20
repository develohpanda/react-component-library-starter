import centered from '@storybook/addon-centered/react';
import {setConsoleOptions, withConsole} from '@storybook/addon-console';
import {withKnobs} from '@storybook/addon-knobs';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {addDecorator, addParameters, configure} from '@storybook/react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './reset.css';

// automatically import all files ending in *.stories.tsx
const req = require.context('../stories', true, /\.stories\.tsx$/);

const loadStories = () => req.keys().forEach(req);

addDecorator(centered as any);
addDecorator(withKnobs);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addParameters({viewport: {viewports: INITIAL_VIEWPORTS}});
setConsoleOptions({
  panelExclude: [],
});
configure(loadStories, module);
