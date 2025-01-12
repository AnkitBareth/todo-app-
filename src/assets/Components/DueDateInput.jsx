const InputForDueDate = ({ handleDueDate, todoDueDate }) => {
  return (
    <input
      className="input-for-date item"
      type="date"
      value={todoDueDate}
      onChange={(event) => handleDueDate(event)}
    />
  );
};

export default InputForDueDate;
