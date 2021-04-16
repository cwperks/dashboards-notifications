/*
 * Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import { render } from '@testing-library/react';
import React from 'react';
import { notificationServiceMock } from '../../../../test/mocks/serviceMock';
import { DeleteChannelModal } from '../components/modals/DeleteChannelModal';

describe('<DeleteChannelModal /> spec', () => {
  it('returns if no channels', () => {
    const { container } = render(
      <DeleteChannelModal
        channels={[]}
        onClose={() => {}}
        services={notificationServiceMock}
      />
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders the component', () => {
    const channels = [jest.fn() as any];
    const { container } = render(
      <DeleteChannelModal
        channels={channels}
        onClose={() => {}}
        services={notificationServiceMock}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders multiple channels', () => {
    const channels = [jest.fn() as any, jest.fn() as any];
    const { container } = render(
      <DeleteChannelModal
        channels={channels}
        onClose={() => {}}
        services={notificationServiceMock}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
