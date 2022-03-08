const formatDate = (date) => {
  if (!date) return null;

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString('en-US', options);
};

export default formatDate;