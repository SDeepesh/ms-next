const getDynamicSectionFromFieldGroupName = (fieldGroupName, sectionsMappings) => {
  for (const sectionName in sectionsMappings) {
    const sectionMapping = sectionsMappings[sectionName];
    const isSectionMatch = sectionMapping.includes(fieldGroupName);

    if (isSectionMatch) {
      return sectionName;
    }
  }

  return null;
};

export default getDynamicSectionFromFieldGroupName;
