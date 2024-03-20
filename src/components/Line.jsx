const Line = (props) => {
  const { data } = props;
  return (
    <span>
      {data.adjust} {data.price}
    </span>
  );
};

export default Line;
