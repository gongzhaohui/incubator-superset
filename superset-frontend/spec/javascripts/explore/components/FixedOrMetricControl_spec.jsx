/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';

import TextControl from 'src/explore/components/controls/TextControl';
import FixedOrMetricControl from 'src/explore/components/controls/FixedOrMetricControl';
import MetricsControl from 'src/explore/components/controls/MetricControl/MetricsControl';

const defaultProps = {
  value: {},
  datasource: {},
};

describe('FixedOrMetricControl', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FixedOrMetricControl {...defaultProps} />);
  });

  it('renders a TextControl and a SelectControl', () => {
    expect(wrapper.find(TextControl)).toExist();
    expect(wrapper.find(MetricsControl)).toExist();
  });
});
