const validateUrl = (value) => {
  var r = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
  return r.test(value);
};

export default validateUrl;
