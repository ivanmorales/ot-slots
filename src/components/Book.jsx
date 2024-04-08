const Book = (props) => {
  const { book, withFire, shareData } = props;

  shareData({ book });

  return (
    <strong>
      {book.name} {withFire && "🍔"}
    </strong>
  );
};

export default Book;
