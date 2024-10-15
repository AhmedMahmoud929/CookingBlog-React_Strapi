const formatBrief = (text, lettersCount) => {
  let brief = text.slice(0, lettersCount);
  return brief + "......";
};

export default formatBrief;
