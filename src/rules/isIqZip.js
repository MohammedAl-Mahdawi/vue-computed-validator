export default (values) => {
  return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(values[0]);
};