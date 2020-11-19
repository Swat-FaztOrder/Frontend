// import react
import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import app component
import App from '../../components/App/index.jsx';
// import toJson
import toJson from 'enzyme-to-json';

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('is the app rendering?', () => {
    expect(wrapper.exists()).toBe(true)
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
