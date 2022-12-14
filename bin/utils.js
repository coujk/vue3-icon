const upperCamelCase = require("uppercamelcase");
const parseName = (name, defaultStyle) => {
  let cleanedName = name.replace(/\//g, "-");
  cleanedName = cleanedName.replaceAll("=", "");
  cleanedName = cleanedName.replaceAll(",", "");
  cleanedName = cleanedName.replaceAll("/", "");
  const nameSlices = cleanedName.split("-");
  const style = nameSlices[nameSlices.length - 1];
  return {
    name,
    componentName: upperCamelCase(cleanedName),
    style: style === "fill" || style === "stroke" ? style : defaultStyle,
  };
};

module.exports = {
  parseName,
};
