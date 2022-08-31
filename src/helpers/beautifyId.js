const beautifyId = (prefix, id) => {
  if (id >= 100) {
    return `${prefix}${id}`;
  }

  if (id >= 10) {
    return `${prefix}0${id}`;
  }

  return `${prefix}00${id}`;
};

export default beautifyId;
