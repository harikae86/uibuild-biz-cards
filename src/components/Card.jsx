const Card = (props) => {
  const { name, restaurant, address } = props;
  return (
    <div className="card-container">
      <h2>{name}</h2>
      <h6>{restaurant}</h6>
      <p>{address}</p>
    </div>
  );
};

export default Card;
