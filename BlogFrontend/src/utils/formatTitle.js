const formatTitle = (title = "", limit = 0, ending = "...") => {
  if (title.length <= limit) return title;
  return title.slice(0, limit) + ending;
};

export default formatTitle;