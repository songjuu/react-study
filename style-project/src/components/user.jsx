const User = ({ item, removeButtonHandler }) => {
  return (
    <div key={item.id} className="component-style">
      {item.age} - {item.name}
      <button onClick={() => removeButtonHandler(item.id)}>X</button>
    </div>
  );
};

export default User;
