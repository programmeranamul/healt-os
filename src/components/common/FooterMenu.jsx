import style from "../../styles/common/footer.module.css";
import { FaHome, FaCartArrowDown, FaFileAlt, FaBell } from "react-icons/fa";
import { Routes, Route, Link } from "react-router-dom";

function FooterMenu() {
  return (
    <footer className={style.footer}>
      <div className="container">
        <nav className={style.wrapper}>
          <Link to="/" className={style.link}>
            <span>
              <FaHome />
            </span>
            <span className={style.text}>Home</span>
          </Link>
          <Link to="/cart" className={style.link}>
            <span className={style.cartIcon}>
              <FaCartArrowDown />
            </span>
            <span className={style.text}>Bag</span>
          </Link>
          <Link to="/order-details" className={style.link}>
            <span>
              <FaFileAlt />
            </span>
            <span className={style.text}>Order</span>
          </Link>
          <Link to="/notification" className={style.link}>
            <span>
              <FaBell />
            </span>
            <span className={style.text}>Notification</span>
          </Link>
          <Link to="/profile" className={style.link}>
            <span>
              <FaBell />
            </span>
            <span className={style.text}>Profile</span>
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default FooterMenu;
