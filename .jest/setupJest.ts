import {configure} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import 'jsdom-global/register';

configure({adapter: new EnzymeAdapter()});
