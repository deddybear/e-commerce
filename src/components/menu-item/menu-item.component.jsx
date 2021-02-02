import "./menu-item.styles.scss";

const MenuItem = ({ judul, imageUrl, ukuran }) => (
  <div className={`${ukuran} menu-item`}>
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}/>
    <div className="content">
      <h1 className="title">{judul.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
