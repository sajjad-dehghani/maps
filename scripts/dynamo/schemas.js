const mapsSchema = {
  TableName: 'Maps',

  KeySchema: [{
    AttributeName: 'mapID',
    KeyType: 'HASH',
  }],

  AttributeDefinitions: [{
    AttributeName: 'mapID',
    AttributeType: 'N',
  }],

  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
};

const nodesSchema = {
  TableName: 'Nodes',

  KeySchema: [{
    AttributeName: 'nodeID',
    KeyType: 'HASH',
  }],

  GlobalSecondaryIndexes: [{
    IndexName: 'MapIndex',

    KeySchema: [{
      AttributeName: 'mapID',
      KeyType: 'HASH',
    }],

    Projection: { ProjectionType: 'ALL' },

    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  }],

  AttributeDefinitions: [
    {
      AttributeName: 'nodeID',
      AttributeType: 'N',
    },
    {
      AttributeName: 'mapID',
      AttributeType: 'N',
    },
  ],

  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
};

const resourcesSchema = {
  TableName: 'Resources',

  KeySchema: [{
    AttributeName: 'resourceID',
    KeyType: 'HASH',
  }],

  GlobalSecondaryIndexes: [{
    IndexName: 'MapIndex',

    KeySchema: [{
      AttributeName: 'mapID',
      KeyType: 'HASH',
    }],

    Projection: { ProjectionType: 'ALL' },

    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  }],

  AttributeDefinitions: [
    {
      AttributeName: 'resourceID',
      AttributeType: 'N',
    },
    {
      AttributeName: 'mapID',
      AttributeType: 'N',
    },
  ],

  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
};

const votesSchema = {
  TableName: 'Votes',

  KeySchema: [
    {
      AttributeName: 'userID',
      KeyType: 'HASH',
    },
    {
      AttributeName: 'resourceID',
      KeyType: 'RANGE',
    },
  ],

  AttributeDefinitions: [
    {
      AttributeName: 'userID',
      AttributeType: 'S',
    },
    {
      AttributeName: 'resourceID',
      AttributeType: 'N',
    },
  ],

  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
};

module.exports = [
  mapsSchema,
  nodesSchema,
  resourcesSchema,
  votesSchema,
];
