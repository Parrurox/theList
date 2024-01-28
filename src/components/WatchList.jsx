import WatchShow from "./WatchShow";

const WatchList = ({ medias, onDelete, onEdit }) => {
  const renderWatch = medias.map((media) => {
    return (
      <WatchShow
        onEdit={onEdit}
        onDelete={onDelete}
        key={media.id}
        media={media}
      />
    );
  });

  return <div className="book-list">{renderWatch}</div>;
};

export default WatchList;
