const PriorityBox = ({ handlePriority, priority }) => {
  return (
    <select
      className="priority-box item"
      name="choices"
      value={priority}
      onChange={(event) => handlePriority(event)}
    >
      <option value="None">None</option>
      <option value="High Priority">High Priority</option>
      <option value="Medium Priority">Medium Priority</option>
      <option value="Low Priority">Low Priority</option>
    </select>
  );
};

export default PriorityBox;
