import {shallow} from 'enzyme';
import * as React from 'react';

import {SampleComponent} from '../src/SampleComponent';

const hydratedProps = {
  className: 'p-2 m-2',
  title: 'title',
  description: 'description',
};

describe('<SampleComponent />', () => {
  it('should render and match snapshot', () => {
    const tree = shallow(<SampleComponent {...hydratedProps} />);

    expect(tree).toMatchSnapshot();
  });
});
