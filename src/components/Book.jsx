const Book = (props) => {
  const { data, withFire } = props;

  return (
    <strong>
      {data.name} {withFire && "🍔"}
    </strong>
  );
};

export default Book;
