/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import moment from 'moment';
import _ from 'lodash';
import expect from 'expect.js';
import { orderedDateAxis } from '../_ordered_date_axis';

describe('orderedDateAxis', function () {

  const baseArgs = {
    vis: {
      indexPattern: {
        timeFieldName: '@timestamp'
      }
    },
    chart: {
      ordered: {},
      aspects: {
        x: [{
          params: {
            format: 'hh:mm:ss',
            bounds: { min: moment().subtract(15, 'm').valueOf(), max: moment().valueOf() }
          }
        }]
      }
    }
  };

  describe('ordered object', function () {
    it('sets date: true', function () {
      const args = _.cloneDeep(baseArgs);
      orderedDateAxis(args.chart);

      expect(args.chart)
        .to.have.property('ordered');

      expect(args.chart.ordered)
        .to.have.property('date', true);
    });

    it('sets the min/max when the buckets are bounded', function () {
      const args = _.cloneDeep(baseArgs);
      orderedDateAxis(args.chart);
      expect(args.chart.ordered).to.have.property('min');
      expect(args.chart.ordered).to.have.property('max');
    });

    it('does not set the min/max when the buckets are unbounded', function () {
      const args = _.cloneDeep(baseArgs);
      args.chart.aspects.x[0].params.bounds = null;
      orderedDateAxis(args.chart);
      expect(args.chart.ordered).to.not.have.property('min');
      expect(args.chart.ordered).to.not.have.property('max');
    });
  });
});