/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React, { Fragment } from 'react';

import { EuiDescriptionList, EuiSpacer, EuiTitle } from '@elastic/eui';
import { HDFSRepository } from '../../../../../../../common/types';
import { useAppDependencies } from '../../../../../index';

interface Props {
  repository: HDFSRepository;
}

export const HDFSDetails: React.FunctionComponent<Props> = ({ repository }) => {
  const {
    core: {
      i18n: { FormattedMessage },
    },
  } = useAppDependencies();

  const { settings } = repository;
  const {
    uri,
    path,
    loadDefaults,
    compress,
    chunkSize,
    'security.principal': securityPrincipal,
    ...rest
  } = settings;

  const listItems = [
    {
      title: (
        <FormattedMessage
          id="xpack.snapshotRestore.repositoryDetails.typeHDFS.uriLabel"
          defaultMessage="URI"
        />
      ),
      description: uri || '',
    },
    {
      title: (
        <FormattedMessage
          id="xpack.snapshotRestore.repositoryDetails.typeHDFS.pathLabel"
          defaultMessage="Path"
        />
      ),
      description: path || '',
    },
  ];

  if (loadDefaults !== undefined) {
    listItems.push({
      title: (
        <FormattedMessage
          id="xpack.snapshotRestore.repositoryDetails.typeHDFS.loadDefaultsLabel"
          defaultMessage="Load defaults"
        />
      ),
      description: String(loadDefaults),
    });
  }

  if (compress !== undefined) {
    listItems.push({
      title: (
        <FormattedMessage
          id="xpack.snapshotRestore.repositoryDetails.typeHDFS.compressLabel"
          defaultMessage="Compress"
        />
      ),
      description: String(compress),
    });
  }

  if (chunkSize !== undefined) {
    listItems.push({
      title: (
        <FormattedMessage
          id="xpack.snapshotRestore.repositoryDetails.typeHDFS.chunkSizeLabel"
          defaultMessage="Chunk size"
        />
      ),
      description: String(chunkSize),
    });
  }

  if (securityPrincipal !== undefined) {
    listItems.push({
      title: (
        <FormattedMessage
          id="xpack.snapshotRestore.repositoryDetails.typeHDFS.securityPrincipalLabel"
          defaultMessage="Security principal"
        />
      ),
      description: securityPrincipal,
    });
  }

  Object.keys(rest).forEach(key => {
    listItems.push({
      title: <Fragment>{key}</Fragment>,
      description: String(settings[key]),
    });
  });

  return (
    <Fragment>
      <EuiTitle size="s">
        <h3>
          <FormattedMessage
            id="xpack.snapshotRestore.repositoryDetails.settingsTitle"
            defaultMessage="Settings"
          />
        </h3>
      </EuiTitle>

      <EuiSpacer size="s" />

      <EuiDescriptionList listItems={listItems} />
    </Fragment>
  );
};
