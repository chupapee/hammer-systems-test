const getNestedProperty = (obj, prop) => {
  const props = prop.split(".");
  let nestedProp = obj;

  for (let i = 0; i < props.length; i++) {
    if (nestedProp.hasOwnProperty(props[i])) {
      nestedProp = nestedProp[props[i]];
    } else {
      return undefined; // If a missing property is encountered, return undefined
    }
  }

  return nestedProp;
};

export const sort = (a, b, prop) => {
  const propA = getNestedProperty(a, prop);
  const propB = getNestedProperty(b, prop);

  if (typeof propA === "string" && typeof propB === "string") {
    return propA.toLowerCase() > propB.toLowerCase()
      ? -1
      : propB > propA
      ? 1
      : 0;
  }

  return 0; // If the property values are not strings, consider them equal and do not perform sorting
};
