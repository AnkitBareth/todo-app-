const AddButton = ({ handleClickedButton }) => {
  return (
    <button className="add-button item" onClick={handleClickedButton}>
      <span className="addition-mark">+</span> Add Todo
    </button>
  );
};

export default AddButton;
