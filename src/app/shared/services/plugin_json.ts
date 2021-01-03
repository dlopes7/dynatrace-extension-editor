export let pluginJson = {
  name: 'custom.remote.python.azure_vault_consul',
  version: '1.014',
  type: 'python',
  entity: 'CUSTOM_DEVICE',
  technologies: [ 'Azure'],
  metricGroup: 'tech.Azure',
  source: {
    package: 'azure_plugin',
    className: 'AzurePlugin',
    install_requires: [ 'azure-mgmt-monitor' ],
    activation: 'Remote' },
  properties: [
    {key: 'tenant_id', type: 'String' },
    {key: 'resource_group', type: 'String' },
    {key: 'subscription', type: 'String' },
    {key: 'client_id', type: 'Password' },
    {key: 'client_secret', type: 'Password' },
    {key: 'consul_resources', type: 'Textarea' },
    {key: 'vault_resources', type: 'Textarea' },
    {key: 'group', type: 'String' } ],

  configUI: {
    displayName: 'Azure (Consul & Vault)',
    properties: [
      {key: 'tenant_id', displayName: 'Azure Tenant ID', displayOrder: 1 },
      {key: 'resource_group', displayName: 'Azure Resource group', displayOrder: 2 },
      {key: 'client_id', displayName: 'Azure Client ID', displayOrder: 4 },
      {key: 'client_secret', displayName: 'Azure Client secret', displayOrder: 5 },
      {key: 'group', displayName: 'Dynatrace group name', displayHint: 'The clusters will be grouped by under this name', displayOrder: 6 },
      {key: 'consul_resources', displayName: 'Consul resource names', displayHint: 'Comma separated, ie: consul_cluster,another_consul_cluster', displayOrder: 7 },
      {key: 'vault_resources', displayName: 'Vault resource names', displayHint: 'Comma separated, ie: vault_cluster,another_vault_cluster', displayOrder: 8 } ] },

  metrics: [

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'mem_used', unit: 'Percent', displayname: 'System - Memory Used',  dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/mem',
        metrics: [
          {azure_key: 'total', key: '', type: 'absolute' },
          {azure_key: 'used',  key: '', type: 'absolute' } ],
        filter: 'Host eq \'*\'', formula: '{used} / {total} * 100', apply_to: [ 'vault', 'consul' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'usage_iowait', unit: 'Percent', displayname: 'CPU - IO Wait', dimensions: [ 'Host' ] },
       source: {namespace: 'Telegraf/cpu',
         metrics: [
          {azure_key: 'usage_iowait', key: 'usage_iowait', type: 'absolute' },
          {azure_key: 'usage_system', key: 'usage_system', type: 'absolute' },
          {azure_key: 'usage_user',   key: 'usage_user',   type: 'absolute' } ],
         filter: 'Host eq \'*\'', apply_to: [ 'vault', 'consul' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'file_nr', unit: 'Count', displayname: 'Files - Number', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/linux_sysctl_fs', metrics: [
        {azure_key: 'file_nr',  key: 'file_nr',  type: 'absolute' },
        {azure_key: 'file_max', key: 'file_max', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'vault', 'consul' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'file_max', unit: 'Count', displayname: 'Files - Max', dimensions: [ 'Host' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'usage_system', unit: 'Percent', displayname: 'CPU - System', dimensions: [ 'Host' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'usage_user', unit: 'Percent', displayname: 'CPU - User', dimensions: [ 'Host' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'swap_used', unit: 'Percent', displayname: 'System - Swap Used', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/mem', metrics: [
        {azure_key: 'swap_total', key: '', type: 'absolute' },
        {azure_key: 'swap_free',  key: '', type: 'absolute' } ],
        filter: 'Host eq \'*\'', formula: '({swap_total} - {swap_free}) / {swap_total} * 100', apply_to: [ 'vault', 'consul' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'vault_core_handle_request', unit: 'MilliSecond', displayname: 'Vault - Handle Request', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/vault_core_handle_request', metrics: [
        {azure_key: 'mean', key: 'vault_core_handle_request', type: 'relative' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'vault' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'vault_consul_get', unit: 'MilliSecond', displayname: 'Vault Consul - Get', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/vault_consul_get', metrics: [
        {azure_key: 'mean', key: 'vault_consul_get', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'vault' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'vault_consul_put', unit: 'MilliSecond', displayname: 'Vault Consul - Put', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/vault_consul_put', metrics: [
        {azure_key: 'mean', key: 'vault_consul_put', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'vault' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'vault_consul_list', unit: 'MilliSecond', displayname: 'Vault Consul - List', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/vault_consul_list', metrics: [
        {azure_key: 'mean', key: 'vault_consul_list', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'vault' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'vault_barrier_delete', unit: 'MilliSecond', displayname: 'Vault Consul - Delete', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/vault_barrier_delete', metrics: [
        {azure_key: 'mean', key: 'vault_barrier_delete', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'vault' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'vault_wal_persistWALs', unit: 'MilliSecond', displayname: 'Vault WAL - Persist', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/vault_wal_persistWALs', metrics: [
        {azure_key: 'mean', key: 'vault_wal_persistWALs', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'vault' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'vault_wal_flushReady', unit: 'MilliSecond', displayname: 'Vault WAL - Flush Ready', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/vault_wal_flushReady', metrics: [
        {azure_key: 'mean', key: 'vault_wal_flushReady', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'vault' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'consul_runtime_total_gc_pause_ns', unit: 'NanoSecond', displayname: 'Consul Runtime - GC Pause', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/consul_runtime_total_gc_pause_ns', metrics: [
        {azure_key: 'Value', key: 'consul_runtime_total_gc_pause_ns', type: 'relative' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'consul' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'consul_runtime_alloc_bytes', unit: 'Byte', displayname: 'Consul Runtime Alloc Bytes', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/consul_runtime_alloc_bytes', metrics: [
        {azure_key: 'Value', key: 'consul_runtime_alloc_bytes', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'consul' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'consul_runtime_sys_bytes', unit: 'Byte', displayname: 'Consul Runtime Sys Bytes', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/consul_runtime_sys_bytes', metrics: [
        {azure_key: 'Value', key: 'consul_runtime_sys_bytes', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'consul' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'vault_runtime_total_gc_pause_ns', unit: 'NanoSecond', displayname: 'Vault Runtime - GC Pause', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/vault_runtime_total_gc_pause_ns', metrics: [
        {azure_key: 'Value', key: 'vault_runtime_total_gc_pause_ns', type: 'relative' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'vault' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'vault_runtime_alloc_bytes', unit: 'Byte', displayname: 'Vault Runtime Alloc Bytes', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/vault_runtime_alloc_bytes', metrics: [
        {azure_key: 'Value', key: 'vault_runtime_alloc_bytes', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'vault' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'vault_runtime_sys_bytes', unit: 'Byte', displayname: 'Vault Runtime Sys Bytes', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/vault_runtime_sys_bytes', metrics: [
        {azure_key: 'Value', key: 'vault_runtime_sys_bytes', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'vault' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'vault_expire_num_leases', unit: 'Count', displayname: 'Vault Expre Num Leases', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/vault_expire_num_leases', metrics: [
        {azure_key: 'Value', key: 'vault_expire_num_leases', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'vault' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'bytes_recv', unit: 'BytePerSecond', displayname: 'Network - Bytes Received', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/net', metrics: [
        {azure_key: 'bytes_recv', key: 'bytes_recv', type: 'per_second' },
        {azure_key: 'bytes_sent', key: 'bytes_sent', type: 'per_second' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'vault', 'consul' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'bytes_sent', unit: 'BytePerSecond', displayname: 'Network - Bytes Sent', dimensions: [ 'Host' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'disk_write_bytes', unit: 'BytePerSecond', displayname: 'System - Disk Write', dimensions: [ 'Host' ] },
      source: {namespace: 'Microsoft.Compute/virtualMachineScaleSets', metrics: [
        {azure_key: 'Disk Write Bytes', key: 'disk_write_bytes', type: 'absolute' },
        {azure_key: 'Disk Read Bytes', key: 'disk_read_bytes', type: 'absolute' } ],
        filter: 'VMName eq \'*\'', apply_to: [ 'vault', 'consul' ] } },
    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'disk_read_bytes', unit: 'BytePerSecond', displayname: 'System - Disk Read', dimensions: [ 'Host' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'consul_kvs_apply', unit: 'MilliSecond', displayname: 'Consul - KVS Apply', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/consul_kvs_apply', metrics: [
        {azure_key: 'mean', key: 'consul_kvs_apply', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'consul' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'consul_txn_apply', unit: 'MilliSecond', displayname: 'Consul - TXN Apply', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/consul_txn_apply', metrics: [
        {azure_key: 'mean', key: 'consul_txn_apply', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'consul' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'consul_raft_apply', unit: 'Count', displayname: 'Consul - Raft Apply', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/consul_raft_apply', metrics: [
        {azure_key: 'Value', key: 'consul_raft_apply', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'consul' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'consul_raft_commitTime', unit: 'MilliSecond', displayname: 'Consul - Raft Commit Time', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/consul_raft_commitTime', metrics: [
        {azure_key: 'mean', key: 'consul_raft_commitTime', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'consul' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'consul_raft_leader_lastContact', unit: 'MilliSecond', displayname: 'Consul - Leader Last Contact', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/consul_raft_leader_lastContact', metrics: [
        {azure_key: 'mean', key: 'consul_raft_leader_lastContact', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'consul' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'consul_raft_state_candidate', unit: 'Count', displayname: 'Consul - Raft State Candidate', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/consul_raft_state_candidate', metrics: [
        {azure_key: 'Value', key: 'consul_raft_state_candidate', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'consul' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'consul_raft_state_leader', unit: 'Count', displayname: 'Consul - State Leader', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/consul_raft_state_leader', metrics: [
        {azure_key: 'Value', key: 'consul_raft_state_leader', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'consul' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'autopilot_healthy', unit: 'Count', displayname: 'Vault - Autopilot Healthy', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/consul_autopilot_healthy', metrics: [
        {azure_key: 'Value', key: 'autopilot_healthy', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'consul' ] } },

    {entity: 'CUSTOM_DEVICE', timeseries: {key: 'health_checks', unit: 'Count', displayname: 'Vault - Health Checks', dimensions: [ 'Host' ] },
      source: {namespace: 'Telegraf/consul_health_checks', metrics: [
        {azure_key: 'passing', key: 'health_checks', type: 'absolute' } ],
        filter: 'Host eq \'*\'', apply_to: [ 'vault' ] } }

  ],

  ui: {
    keymetrics: [
      {key: 'usage_system', displayName: 'CPU System', mergeaggregation: 'AVG', aggregation: 'avg' },
      {key: 'mem_used', displayName: 'Memory', mergeaggregation: 'AVG', aggregation: 'avg' } ],
    keycharts: [
      {group: 'System', title: 'Memory', series: [
          {key: 'mem_used', mergeaggregation: 'AVG' } ] },
      {group: 'System', title: 'Swap', series: [
          {key: 'swap_used', mergeaggregation: 'AVG' } ] },
      {group: 'Vault', title: 'Handle Request', description: 'Duration of time taken by requests handled by Vault core', series: [
          {key: 'vault_core_handle_request', mergeaggregation: 'AVG' } ] },
      {group: 'Vault', title: 'Consul Operations', description: 'Duration of an operation against the Consul storage backend', series: [
          {key: 'vault_consul_get', mergeaggregation: 'AVG' },
          {key: 'vault_consul_put', mergeaggregation: 'AVG' },
          {key: 'vault_consul_list', mergeaggregation: 'AVG' },
          {key: 'vault_barrier_delete', mergeaggregation: 'AVG' } ] },
      {group: 'Vault', title: 'Write Ahead Log - Persist', description: 'Time taken to persist a Write Ahead Log (WAL)', series: [
          {key: 'vault_wal_persistWALs', mergeaggregation: 'AVG' } ] },
      {group: 'Vault', title: 'Write Ahead Log - Flush', description: 'Time taken to flush a ready Write Ahead Log (WAL) to storage', series: [
          {key: 'vault_wal_flushReady', mergeaggregation: 'AVG' } ] },
      {group: 'Runtime', title: 'Garbage Collection', series: [
          {key: 'consul_runtime_total_gc_pause_ns', mergeaggregation: 'AVG' } ] },
      {group: 'Runtime', title: 'Memory', series: [
          {key: 'consul_runtime_alloc_bytes', mergeaggregation: 'AVG' },
          {key: 'consul_runtime_sys_bytes', mergeaggregation: 'AVG' } ] },
      {group: 'System', title: 'Network', series: [
          {key: 'bytes_recv', mergeaggregation: 'SUM' },
          {key: 'bytes_sent', mergeaggregation: 'SUM' } ] },
      {group: 'System', title: 'Disk', series: [
          {key: 'disk_write_bytes', mergeaggregation: 'SUM' },
          {key: 'disk_read_bytes', mergeaggregation: 'SUM' } ] },
      {group: 'Consul', title: 'KVS Apply', description: 'Time it takes to complete an update to the KV store', series: [
          {key: 'consul_kvs_apply', mergeaggregation: 'AVG' } ] },
      {group: 'Consul', title: 'Transaction Apply', description: 'Time spent applying a transaction operation', series: [
          {key: 'consul_txn_apply', mergeaggregation: 'AVG' } ] },
      {group: 'Consul', title: 'Raft Apply', description: 'Number of Raft transactions occurring over the interval', series: [
          {key: 'consul_raft_apply', mergeaggregation: 'SUM' } ] },
      {group: 'Consul', title: 'Raft Commit Time', description: 'Time it takes to commit a new entry to the Raft log on the leader', series: [
          {key: 'consul_raft_commitTime', mergeaggregation: 'AVG' } ] },
      {group: 'Consul', title: 'Raft Leader Last Contact', description: 'Time since the leader was last able to contact the follower nodes when checking its leader lease', series: [
          {key: 'consul_raft_leader_lastContact', mergeaggregation: 'AVG' } ] },
      {group: 'Consul', title: 'Raft State Candidate', description: 'Increments whenever a Consul server starts an election', series: [
          {key: 'consul_raft_state_candidate', mergeaggregation: 'SUM' } ] },
      {group: 'Consul', title: 'Raft State Leader', description: 'Increments whenever a Consul server becomes a leader', series: [
          {key: 'consul_raft_state_leader', mergeaggregation: 'SUM' } ] },
      {group: 'Consul', title: 'Autopilot Healthy', description: 'Tracks the overall health of the local server cluster. If all servers are considered healthy by Autopilot, this will be set to 1. If any are unhealthy, this will be 0', series: [
          {key: 'autopilot_healthy', mergeaggregation: 'SUM' } ] } ],
    charts: [
      {group: 'System', title: 'Memory', series: [
          {key: 'mem_used', displayName: 'Memory' } ] },
      {group: 'System', title: 'Swap', series: [
          {key: 'swap_used', displayName: 'Swap' } ] },
      {group: 'Vault', title: 'Handle Request', description: 'Duration of time taken by requests handled by Vault core', series: [
          {key: 'vault_core_handle_request', displayName: 'Handle Request' } ] },
      {group: 'Vault', title: 'Consul Operations', description: 'Duration of an operation against the Consul storage backend', series: [
          {key: 'vault_consul_get', displayName: 'Get' },
          {key: 'vault_consul_put', displayName: 'Put' },
          {key: 'vault_consul_list', displayName: 'List' },
          {key: 'vault_barrier_delete', displayName: 'Delete' } ] },
      {group: 'Vault', title: 'Write Ahead Log - Persist', description: 'Time taken to persist a Write Ahead Log (WAL)', series: [
          {key: 'vault_wal_persistWALs', displayName: 'Persist time' } ] },
      {group: 'Vault', title: 'Write Ahead Log - Flush', description: 'Time taken to flush a ready Write Ahead Log (WAL) to storage', series: [
          {key: 'vault_wal_flushReady', displayName: 'Flush time' } ] },
      {group: 'Runtime', title: 'Garbage Collection', series: [
          {key: 'consul_runtime_total_gc_pause_ns', displayName: 'GC Pause' } ] },
      {group: 'Runtime', title: 'Memory', series: [
          {key: 'consul_runtime_alloc_bytes', displayName: 'Alloc bytes' },
          {key: 'consul_runtime_sys_bytes', displayName: 'Sys bytes' } ] },
      {group: 'System', title: 'Network', series: [
          {key: 'bytes_recv', displayName: 'Received' },
          {key: 'bytes_sent', displayName: 'Sent' } ] },
      {group: 'System', title: 'Disk', series: [
          {key: 'disk_write_bytes', displayName: 'Write' },
          {key: 'disk_read_bytes', displayName: 'Read' } ] },
      {group: 'Consul', title: 'KVS Apply', description: 'Time it takes to complete an update to the KV store', series: [
          {key: 'consul_kvs_apply', displayName: 'KVS Apply' } ] },
      {group: 'Consul', title: 'Transaction Apply', description: 'Time spent applying a transaction operation', series: [
          {key: 'consul_txn_apply', displayName: 'Transaction Apply' } ] },
      {group: 'Consul', title: 'Raft Apply', description: 'Number of Raft transactions occurring over the interval', series: [
          {key: 'consul_raft_apply', displayName: 'Raft Apply' } ] },
      {group: 'Consul', title: 'Raft Commit Time', description: 'Time it takes to commit a new entry to the Raft log on the leader', series: [
          {key: 'consul_raft_commitTime', displayName: 'Commit Time' } ] },
      {group: 'Consul', title: 'Raft Leader Last Contact', description: 'Time since the leader was last able to contact the follower nodes when checking its leader lease', series: [
          {key: 'consul_raft_leader_lastContact', displayName: 'Last Contact' } ] },
      {group: 'Consul', title: 'Raft State Candidate', description: 'Increments whenever a Consul server starts an election', series: [
          {key: 'consul_raft_state_candidate', displayName: 'State Candidate' } ] },
      {group: 'Consul', title: 'Raft State Leader', description: 'Increments whenever a Consul server becomes a leader', series: [
          {key: 'consul_raft_state_leader', displayName: 'State Leader' } ] },
      {group: 'Consul', title: 'Autopilot Healthy', description: 'Tracks the overall health of the local server cluster. If all servers are considered healthy by Autopilot, this will be set to 1. If any are unhealthy, this will be 0', series: [
          {key: 'autopilot_healthy', displayName: 'Autopilot Healthy' } ] } ] }
};
