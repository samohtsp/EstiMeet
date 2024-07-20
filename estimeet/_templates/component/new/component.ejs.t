---
to: src/components/<%= name %>.component/<%= name %>.tsx
---
// src/components/<%= name %>.component/<%= name %>.tsx

import React from 'react';
import './<%= name %>.css';

type <%= name %>Props = {
};

const <%= name %>:React.FC< <%= name %>Props > = () => {
  return <div><%= name %> works!</div>;
};

export default <%= name %>;
