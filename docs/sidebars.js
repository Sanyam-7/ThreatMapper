/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  threatmapper: [
    {
      type: 'html',
      value: 'Deepfence ThreatMapper',
      className: 'sidebar-title',
    },

    'threatmapper/index',

    {
      type: 'category',
      label: 'Architecture',
      link: {
        type: 'doc',
        id: 'threatmapper/architecture/index'
      },
      items: [
        'threatmapper/architecture/console',
        'threatmapper/architecture/cloudscanner',
        'threatmapper/architecture/sensors',
        'threatmapper/architecture/threatgraph',
      ],
    },
    'threatmapper/demo',

    {
      type: 'category',
      label: 'Installation',
      link: {
        type: 'doc',
        id: 'threatmapper/installation'
      },
      items: [
        {
          type: 'category',
          label: 'Management Console',
          link: {
            type: 'doc',
            id: 'threatmapper/console/index'
          },
          items: [
            'threatmapper/console/requirements',
            'threatmapper/console/docker',
            'threatmapper/console/kubernetes',
            'threatmapper/console/managed-database',
            'threatmapper/console/initial-configuration',
            'threatmapper/console/manage-users',
            'threatmapper/console/database-export-import',
            'threatmapper/console/troubleshooting',
          ],
        },

        {
          type: 'category',
          label: 'Cloud Scanner',
          link: {
            type: 'doc',
            id: 'threatmapper/cloudscanner/index'
          },
          items: [
            'threatmapper/cloudscanner/aws',
            'threatmapper/cloudscanner/azure',
            'threatmapper/cloudscanner/gcp',
            'threatmapper/cloudscanner/other',
           ],
        },

        {
          type: 'category',
          label: 'Kubernetes Scanner',
          link: {
            type: 'doc',
            id: 'threatmapper/kubernetes-scanner/index'
          },
          items: [],
        },

        {
          type: 'category',
          label: 'Sensor Agent container',
          link: {
            type: 'doc',
            id: 'threatmapper/sensors/index'
          },
          items: [
            'threatmapper/sensors/kubernetes',
            'threatmapper/sensors/docker',
            'threatmapper/sensors/aws-ecs',
            'threatmapper/sensors/aws-fargate',
            'threatmapper/sensors/linux-host',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Operations',
      link: {
        type: 'doc',
        id: 'threatmapper/operations/index'
      },
      items: [
        'threatmapper/operations/scanning',
        'threatmapper/operations/sboms',
        'threatmapper/operations/compliance',
        'threatmapper/operations/scanning-registries',
        'threatmapper/operations/scanning-ci',
        'threatmapper/operations/support',
      ],
    },

    {
      type: 'category',
      label: 'Notifications',
      link: {
        type: 'doc',
        id: 'threatmapper/notifications/index'
      },
      items: [
        'threatmapper/notifications/pagerduty',
        'threatmapper/notifications/slack',
        'threatmapper/notifications/sumo-logic',
      ],
    },

    {
      type: 'category',
      label: 'Developers',
      link: {
        type: 'doc',
        id: 'threatmapper/developers/index'
      },
      items: [
        'threatmapper/developers/build',
        'threatmapper/developers/deploy-console',
        'threatmapper/developers/deploy-agent',
      ],
    },

    {
      type: 'category',
      label: 'Tips',
      link: {
        type: 'generated-index',
        description:
          "Tips and Techniques to get the most from ThreatMapper"
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'threatmapper/tips',
        },
      ],
    },
  ],
};

module.exports = sidebars;
