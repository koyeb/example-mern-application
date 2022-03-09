const formatDate = (date, type = 'en-US') => {
  if (!date) return null;

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString(type, options);
};

export default formatDate;