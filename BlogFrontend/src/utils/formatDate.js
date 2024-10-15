const formatDate = (dateInput) => {
  const date = new Date(dateInput);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default formatDate;
