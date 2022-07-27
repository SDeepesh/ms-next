const Schema = ({ schema, schemaRaw }) => {
  if (schemaRaw) {
    return (
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaRaw }}></script>
    );
  } else {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
    );
  }
};

export default Schema;
