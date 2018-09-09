import { configure } from 'enzyme';
import describe from 'jest';
import expect from 'jest';
import test from 'jest';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.describe = describe;
global.expect = expect;
global.test = test;