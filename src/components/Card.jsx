const Card = (props) => {
  const { name, restaurant, address, address2 } = props;
  return (
    <div className="card-container">
      <h2>{name}</h2>
      <h6>{restaurant}</h6>
      <p>{address}</p>
      <p>{address2}</p>
    </div>
  );
};

export default Card;
