/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {
      type: "doc",
      label: "Docs home",
      id: "home/index",
    },
    {
      type: "category",
      label: "Get Started",
      link: { type: "doc", id: "platform/get-started/index" },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "Introduction to Events and Streaming",
          id: "platform/get-started/intro-to-events",
        },
        {
          type: "doc",
          label: "Redpanda Licensing",
          id: "platform/get-started/licenses",
        },
        {
          type: "doc",
          label: " Redpanda Quickstart",
          id: "platform/get-started/quickstart/quick-start-docker",
        },
        {
          type: "doc",
          label: "Install rpk",
          id: "platform/get-started/quickstart/rpk-install",
        },
        {
          type: "doc",
          label: "Introduction to Redpanda Console",
          id: "platform/get-started/console/index"
        },
        {
          type: "doc",
          label: "Build a Sample Application",
          id: "platform/get-started/code-examples",
        },
      ],
    },
    {
      type: "category",
      label: "Develop",
      link: { type: "doc", id: "platform/develop/index" },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "Suported Kafka Clients",
          id: "platform/develop/kafka-clients",
        },
        "platform/develop/code-examples",
        "platform/develop/guide-nodejs",
        "platform/develop/http-proxy",
        {
          type: "category",
          label: "Produce Data",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              label: "Idempotent Producers",
              id: "platform/develop/idempotent-producers",
            },
          ]
        },
        {
          type: "category",
          label: "Consume Data",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              label: "Consumer Offsets",
              id: "platform/develop/consumer-offsets",
            },
          ]
        },

        "platform/develop/transactions",
      ],
    },
    {
      type: "category",
      label: "Deploy",
      collapsible: true,
      link: { type: "doc", id: "platform/deploy/index" },
      collapsed: true,
      items: [
        {
          type: "category",
          label: " Choose a Deployment Option",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Self-Hosted",
              collapsed: true,
              collapsible: true,
              items: [
                "platform/deploy/tiered-storage",
                {
                  type: "category",
                  label: "Kubernetes",
                  collapsed: true,
                  collapsible: true,
                  items: [
                    "platform/deploy/production-deployment",
                  ]
                },
                {
                  type: "category",
                  label: "Manual",
                  collapsed: true,
                  collapsible: true,
                  items: [
                    {
                      type: "doc",
                      label: "Use Terraform and Ansible to Deploy Redpanda",
                      id: "platform/deploy/production-deployment-automation",
                    },
                    {
                      type: "doc",
                      label: "Use rpm and Debian Packages to Deploy Redpanda",
                      id: "platform/deploy/production-deployment",
                    },
                    "platform/deploy/node-property-configuration",
                  ]
                },
              ]
            },
            {
              type: "category",
              label: "Cloud",
              collapsed: true,
              collapsible: true,
              link: { type: "doc", id: "platform/deploy/cloud/index/index" },
              items: [
                {
                  type: "doc",
                  label: "Redpanda Cloud Overview",
                  id: "platform/deploy/cloud/dedicated-byoc",
                },
                {
                  type: "category",
                  label: "Redpanda Dedicated",
                  collapsed: true,
                  collapsible: true,
                  items: [
                    {
                      type: "doc",
                      label: "Create Clusters",
                      id: "platform/deploy/cloud/create-dedicated-cloud-cluster-aws",
                    },
                    {
                      type: "doc",
                      label: "VPC Peering",
                      id: "platform/deploy/cloud/vpc-peering",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Redpanda BYOC",
                  collapsed: true,
                  collapsible: true,
                  items: [
                    {
                      type: "doc",
                      label: "Create Cluster on AWS",
                      id: "platform/deploy/cloud/create-byoc-cluster-aws",
                    },
                  ],
                },
                {
                  type: "doc",
                  label: "Create a Topic",
                  id: "platform/deploy/cloud/create-topic",
                },
                {
                  type: "category",
                  label: "Managed Connectors",
                  collapsed: true,
                  collapsible: true,
                  items: [
                    {
                      type: "doc",
                      label: "Create an S3 Sink Connector",
                      id: "platform/deploy/cloud/managed-connectors/create-s3-sink-connector",
                    },
                  ],
                },
              ]
            },
          ],
        },
        {
          type: "doc",
          label: "Writing Custom Deployment",
          id: "platform/deploy/custom-deployment",
        },
      ],
    },
    {
      type: "category",
      label: "Manage",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Manage Self-Hosted",
          collapsible: true,
          collapsed: true,
          items: [
            "platform/manage/continuous-data-balancing",
            {
              type: "doc",
              label: "Configure Node Maintenance Mode",
              id: "platform/manage/node-management",
            },
            "platform/manage/remote-read-replicas",
            "platform/manage/monitoring",
          ],
        },
        {
          type: "category",
          label: "Security",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Self-Hosted",
              link: { type: "doc", id: "platform/manage/security/index" },
              items: [
                "platform/manage/security/encryption",
                "platform/manage/security/authentication",
                "platform/manage/security/listener-configuration",
                "platform/manage/security/authorization",
                "platform/manage/security/iam-roles",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Performance and Tuning",
          items: [
            "platform/manage/high-availability",
            "platform/manage/disk-utilization",
            "platform/manage/io-optimization",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Install and Upgrade",
      link: { type: "doc", id: "platform/install-upgrade/index" },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Install Redpanda",
          collapsible: true,
          collapsed: true,
          link: { type: "doc", id: "platform/quickstart/index" },
          items: [
            {
              type: "doc",
              label: "Kubernetes",
              id: "platform/quickstart/kubernetes-qs-dev",
            },
            {
              type: "doc",
              label: "Linux",
              id: "platform/quickstart/quick-start-linux",
            },
            {
              type: "doc",
              label: "macOS",
              id: "platform/quickstart/quick-start-macos",
            },
            {
              type: "doc",
              label: "Windows",
              id: "platform/quickstart/quick-start-windows",
            },
          ],
        },

        "platform/quickstart/console-installation",
        {
          type: "doc",
          label: "Start Streaming",
          id: "platform/install-upgrade/start-streaming",
        },
        {
          type: "doc",
          label: "Version Upgrade",
          id: "platform/install-upgrade/version-upgrade",
        },
        {
          type: "doc",
          label: "Rolling Upgrades",
          id: "platform/install-upgrade/rolling-upgrade",
        },
      ],
    },
    {
      type: "category",
      label: "Cluster Administration",
      link: { type: "doc", id: "platform/manage/index" },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Configuration",
          link: {
            type: "doc",
            id: "platform/manage/configuration",
          },
          items: [
            {
              type: "doc",
              label: "Configuring Cluster Properties",
              id: "platform/manage/cluster-property-configuration",
            },
            {
              type: "doc",
              label: "Configuring Node Properties",
              id: "platform/manage/node-property-configuration",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Data Management",
      link: { type: "doc", id: "platform/data-management/index" },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Tiered Storage",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "platform/data-management/tiered-storage",
          },
          items: [
            {
              type: "doc",
              label: "Data Archiving",
              id: "platform/data-management/data-archiving",
            },
          ],
        },
        "platform/data-management/data-migration",
        {
          type: "category",
          label: "Rack Awareness",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              label: "Kubernetes Deployment",
              id: "platform/data-management/kubernetes-rack-awareness",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Security",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Security on Kubernetes",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              label: "Configuring TLS on Kubernetes",
              id: "platform/security/kubernetes-tls",
            },
            {
              type: "doc",
              label: "Configuring SASL on Kubernetes",
              id: "platform/security/sasl-kubernetes",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Redpanda Console Reference",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "Redpanda Console Configuration",
          id: "platform/console/reference/config",
        },
        {
          type: "doc",
          label: "Redpanda Console Role-Binding Configuration",
          id: "platform/console/reference/role-bindings",
        },
        {
          type: "doc",
          label: "Docker Compose Configuration",
          id: "platform/console/reference/docker-compose",
        },
      ],
    },
    {
      type: "category",
      label: "Reference",
      link: { type: "doc", id: "platform/reference/index" },
      collapsible: true,
      collapsed: true,
      items: [
        "platform/reference/cluster-properties",
        "platform/reference/tunable-properties",
        "platform/reference/node-properties",
        "platform/reference/node-configuration-sample",
        "platform/reference/schema-registry-api",
        {
          type: "category",
          label: "rpk Commands",
          link: { type: "doc", id: "platform/reference/rpk/index" },
          items: [
            "platform/reference/rpk/rpk-commands",
            {
              type: "category",
              label: "rpk acl",
              link: { type: "doc", id: "platform/reference/rpk/rpk-acl/rpk-acl" },
              items: [
                "platform/reference/rpk/rpk-acl/rpk-acl",
                "platform/reference/rpk/rpk-acl/rpk-acl-create",
                "platform/reference/rpk/rpk-acl/rpk-acl-delete",
                {
                  type: "category",
                  label: "rpk acl user",
                  link: {
                    type: "doc",
                    id: "platform/reference/rpk/rpk-acl/rpk-acl-user",
                  },
                  items: [
                    "platform/reference/rpk/rpk-acl/rpk-acl-user",
                    "platform/reference/rpk/rpk-acl/rpk-acl-user-create",
                    "platform/reference/rpk/rpk-acl/rpk-acl-user-delete",
                    "platform/reference/rpk/rpk-acl/rpk-acl-user-list",
                  ],
                }, //acl user
              ],
            }, //acl
            {
              type: "category",
              label: "rpk cloud",
              link: {
                type: "doc",
                id: "platform/reference/rpk/rpk-cloud/rpk-cloud",
              },
              items: [
                "platform/reference/rpk/rpk-cloud/rpk-cloud",
                "platform/reference/rpk/rpk-cloud/rpk-cloud-byoc",
                "platform/reference/rpk/rpk-cloud/rpk-cloud-byoc-install",
                "platform/reference/rpk/rpk-cloud/rpk-cloud-byoc-uninstall",
                "platform/reference/rpk/rpk-cloud/rpk-cloud-login",
                "platform/reference/rpk/rpk-cloud/rpk-cloud-logout"
              ]
            },
            {
              type: "category",
              label: "rpk cluster",
              link: {
                type: "doc",
                id: "platform/reference/rpk/rpk-cluster/rpk-cluster",
              },
              items: [
                {
                  type: "category",
                  label: "rpk cluster config",
                  link: {
                    type: "doc",
                    id: "platform/reference/rpk/rpk-cluster/rpk-cluster-config",
                  },
                  items: [
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-config",
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-config-edit",
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-config-export",
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-config-force-reset",
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-config-get",
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-config-import",
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-config-lint",
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-config-set",
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-config-status",
                  ],
                },
                "platform/reference/rpk/rpk-cluster/rpk-cluster-health",
                {
                  type: "category",
                  label: "rpk cluster license",
                  link: {
                    type: "doc",
                    id: "platform/reference/rpk/rpk-cluster/rpk-cluster-license",
                  },
                  items: [
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-license",
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-license-info",
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-license-set",
                  ],
                },
                {
                  type: "category",
                  label: "rpk cluster logdirs",
                  link: {
                    type: "doc",
                    id: "platform/reference/rpk/rpk-cluster/rpk-cluster-logdirs",
                  },
                  items: [
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-logdirs",
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-logdirs-describe",
                  ],
                },
                {
                  type: "category",
                  label: "rpk cluster maintenance",
                  link: {
                    type: "doc",
                    id: "platform/reference/rpk/rpk-cluster/rpk-cluster-maintenance",
                  },
                  items: [
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-maintenance",
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-maintenance-disable",
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-maintenance-enable",
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-maintenance-status",
                  ],
                },
                "platform/reference/rpk/rpk-cluster/rpk-cluster-metadata",
                {
                  type: "category",
                  label: "rpk cluster partitions",
                  link: {
                    type: "doc",
                    id: "platform/reference/rpk/rpk-cluster/rpk-cluster-partitions",
                  },
                  items: [
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-partitions",
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-partitions-balancer-status",
                    "platform/reference/rpk/rpk-cluster/rpk-cluster-partitions-movement-cancel",
                  ],
                },
              ],
            }, //acl cluster
            {
              type: "category",
              label: "rpk container",
              link: {
                type: "doc",
                id: "platform/reference/rpk/rpk-container/rpk-container",
              },
              items: [
                "platform/reference/rpk/rpk-container/rpk-container",
                "platform/reference/rpk/rpk-container/rpk-container-purge",
                "platform/reference/rpk/rpk-container/rpk-container-start",
                "platform/reference/rpk/rpk-container/rpk-container-stop",
              ],
            },
            {
              type: "category",
              label: "rpk debug",
              link: {
                type: "doc",
                id: "platform/reference/rpk/rpk-debug/rpk-debug",
              },
              items: [
                "platform/reference/rpk/rpk-debug/rpk-debug",
                "platform/reference/rpk/rpk-debug/rpk-debug-bundle",
              ],
            },
            {
              type: "category",
              label: "rpk generate",
              link: {
                type: "doc",
                id: "platform/reference/rpk/rpk-generate/rpk-generate",
              },
              items: [
                "platform/reference/rpk/rpk-generate/rpk-generate",
                "platform/reference/rpk/rpk-generate/rpk-generate-grafana-dashboard",
                "platform/reference/rpk/rpk-generate/rpk-generate-prometheus-config",
                "platform/reference/rpk/rpk-generate/rpk-generate-shell-completion",
              ],
            },
            {
              type: "category",
              label: "rpk group",
              link: {
                type: "doc",
                id: "platform/reference/rpk/rpk-group/rpk-group",
              },
              items: [
                "platform/reference/rpk/rpk-group/rpk-group",
                "platform/reference/rpk/rpk-group/rpk-group-delete",
                "platform/reference/rpk/rpk-group/rpk-group-describe",
                "platform/reference/rpk/rpk-group/rpk-group-list",
                "platform/reference/rpk/rpk-group/rpk-group-seek",
              ],
            },
            "platform/reference/rpk/rpk-help",
            "platform/reference/rpk/rpk-iotune",
            {
              type: "category",
              label: "rpk plugin",
              link: {
                type: "doc",
                id: "platform/reference/rpk/rpk-plugin/rpk-plugin",
              },
              items: [
                "platform/reference/rpk/rpk-plugin/rpk-plugin",
                "platform/reference/rpk/rpk-plugin/rpk-plugin-list",
                "platform/reference/rpk/rpk-plugin/rpk-plugin-uninstall",
                "platform/reference/rpk/rpk-plugin/rpk-plugin-install",
              ],
            },
            {
              type: "category",
              label: "rpk redpanda",
              link: {
                type: "doc",
                id: "platform/reference/rpk/rpk-redpanda/rpk-redpanda",
              },
              items: [
                "platform/reference/rpk/rpk-redpanda/rpk-redpanda",
                {
                  type: "category",
                  label: "rpk redpanda admin",
                  link: {
                    type: "doc",
                    id: "platform/reference/rpk/rpk-redpanda/rpk-redpanda-admin",
                  },
                  items: [
                    "platform/reference/rpk/rpk-redpanda/rpk-redpanda-admin",
                    {
                      type: "category",
                      label: "rpk redpanda admin brokers",
                      link: {
                        type: "doc",
                        id: "platform/reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers",
                      },
                      items: [
                        "platform/reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers",
                        "platform/reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers-decommission",
                        "platform/reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers-list",
                        "platform/reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers-recommission",
                      ],
                    },
                    {
                      type: "category",
                      label: "rpk redpanda admin config",
                      link: {
                        type: "doc",
                        id: "platform/reference/rpk/rpk-redpanda/rpk-redpanda-admin-config",
                      },
                      items: [
                        "platform/reference/rpk/rpk-redpanda/rpk-redpanda-admin-config",
                        "platform/reference/rpk/rpk-redpanda/rpk-redpanda-admin-config-log-level-set",
                        "platform/reference/rpk/rpk-redpanda/rpk-redpanda-admin-config-log-level",
                        "platform/reference/rpk/rpk-redpanda/rpk-redpanda-admin-config-print",
                      ],
                    },
                    {
                      type: "category",
                      label: "rpk redpanda admin partitions",
                      link: {
                        type: "doc",
                        id: "platform/reference/rpk/rpk-redpanda/rpk-redpanda-admin-partitions",
                      },
                      items: [
                        "platform/reference/rpk/rpk-redpanda/rpk-redpanda-admin-partitions",
                        "platform/reference/rpk/rpk-redpanda/rpk-redpanda-admin-partitions-list",
                      ],
                    },
                  ],
                }, //rpk redpanda admin
                "platform/reference/rpk/rpk-redpanda/rpk-redpanda-check",
                {
                  type: "category",
                  label: "rpk redpanda config",
                  link: {
                    type: "doc",
                    id: "platform/reference/rpk/rpk-redpanda/rpk-redpanda-config",
                  },
                  items: [
                    "platform/reference/rpk/rpk-redpanda/rpk-redpanda-config",
                    "platform/reference/rpk/rpk-redpanda/rpk-redpanda-config-bootstrap",
                    "platform/reference/rpk/rpk-redpanda/rpk-redpanda-config-init",
                    "platform/reference/rpk/rpk-redpanda/rpk-redpanda-config-set",
                  ],
                },
                "platform/reference/rpk/rpk-redpanda/rpk-redpanda-mode",
                "platform/reference/rpk/rpk-redpanda/rpk-redpanda-start",
                "platform/reference/rpk/rpk-redpanda/rpk-redpanda-stop",
                {
                  type: "category",
                  label: "rpk redpanda tune",
                  link: {
                    type: "doc",
                    id: "platform/reference/rpk/rpk-redpanda/rpk-redpanda-tune",
                  },
                  items: [
                    "platform/reference/rpk/rpk-redpanda/rpk-redpanda-tune",
                    "platform/reference/rpk/rpk-redpanda/rpk-redpanda-tune-help",
                    "platform/reference/rpk/rpk-redpanda/rpk-redpanda-tune-list",
                  ],
                },
              ],
            }, //rpk redpanda
            {
              type: "category",
              label: "rpk topic",
              link: { type: "doc", id: "platform/reference/rpk/rpk-topic/rpk-topic" },
              items: [
                "platform/reference/rpk/rpk-topic/rpk-topic",
                "platform/reference/rpk/rpk-topic/rpk-topic-add-partitions",
                "platform/reference/rpk/rpk-topic/rpk-topic-alter-config",
                "platform/reference/rpk/rpk-topic/rpk-topic-consume",
                "platform/reference/rpk/rpk-topic/rpk-topic-create",
                "platform/reference/rpk/rpk-topic/rpk-topic-delete",
                "platform/reference/rpk/rpk-topic/rpk-topic-describe",
                "platform/reference/rpk/rpk-topic/rpk-topic-list",
                "platform/reference/rpk/rpk-topic/rpk-topic-produce",
              ],
            },
            "platform/reference/rpk/rpk-version",
            {
              type: "category",
              label: "rpk wasm",
              link: { type: "doc", id: "platform/reference/rpk/rpk-wasm/rpk-wasm" },
              items: [
                "platform/reference/rpk/rpk-wasm/rpk-wasm",
                "platform/reference/rpk/rpk-wasm/rpk-wasm-deploy",
                "platform/reference/rpk/rpk-wasm/rpk-wasm-generate",
                "platform/reference/rpk/rpk-wasm/rpk-wasm-remove",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Redpanda Operator",
          link: { type: "doc", id: "platform/reference/redpanda-operator/index" },
          items: [
            {
              type: "category",
              label: "Install",
              items: [
                "platform/reference/redpanda-operator/kubernetes-qs-local-access",
                "platform/reference/redpanda-operator/kubernetes-qs-minikube",
                "platform/reference/redpanda-operator/kubernetes-qs-cloud",
              ],
            },
            {
              type: "category",
              label: "Deploy",
              items: [
                "platform/reference/redpanda-operator/kubernetes-connectivity",
                "platform/reference/redpanda-operator/kubernetes-external-connect",
                "platform/reference/redpanda-operator/kubernetes-additional-config",
                "platform/reference/redpanda-operator/arbitrary-configuration",
              ],
            },
            {
              type: "category",
              label: "Security",
              items: [
                "platform/reference/redpanda-operator/security-kubernetes",
                "platform/reference/redpanda-operator/tls-kubernetes",
                "platform/reference/redpanda-operator/kubernetes-sasl",
                "platform/reference/redpanda-operator/kubernetes-mtls",
              ],
            },
            "platform/reference/redpanda-operator/crd",
          ],
        },
        "platform/reference/internal-metrics",
        {
          type: "link",
          label: "Release notes",
          href: "https://github.com/redpanda-data/redpanda/releases",
        },
        {
          type: "category",
          label: "HA Deployment Options",
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: "doc",
              label: "Rack Awareness",
              id: "platform/deploy/rack-awareness",
            },
          ]
        },
      ],
    },
    {
      type: "category",
      label: "Labs",
      link: { type: "doc", id: "platform/labs/index" },
      collapsible: true,
      collapsed: true,
      items: ["platform/labs/install-preview", "platform/labs/data-transform"],
    },
  ],
};
