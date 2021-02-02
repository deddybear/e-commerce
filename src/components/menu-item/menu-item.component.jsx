import "./menu-item.styles.scss";

const MenuItem = ({ judul, imageUrl, ukuran }) => (
  <div
    style={{ backgroundImage: `url(${imageUrl})` }}
    className={`${ukuran} menu-item`}
  >
    <div className="content">
      <h1 className="title">{judul}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
