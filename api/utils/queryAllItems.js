const queryAllItems = async (queryFn, query) => {
  const itemsBucket = [];
  let hasMoreItems = true;
  let endCursor = '';

  while (hasMoreItems) {
    const finalQuery = query(endCursor);
    const { data } = await queryFn(finalQuery);
    const items = data[Object.keys(data)[0]];
    const { nodes, pageInfo } = items;
    const { hasNextPage } = pageInfo;

    endCursor = pageInfo.endCursor;
    hasMoreItems = hasNextPage;

    itemsBucket.push(...nodes);
  }

  return itemsBucket;
};

export default queryAllItems;
