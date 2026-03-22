import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import style from "./Header.module.scss";
import images from "../../../../assets/images";
import {
    faCircleNotch,
    faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faSistrix } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(style);

function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <img src={images.logo} alt="tiktok"></img>
                <div className={cx("search")}>
                    <input
                        type="text"
                        placeholder="search accounts and videos"
                    />
                    <button className={cx("close-btn")}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon
                        className={cx("loading")}
                        icon={faCircleNotch}
                    />
                    <button className={cx("search-btn")}>
                        <FontAwesomeIcon icon={faSistrix} />
                    </button>
                </div>
                <div className={cx("action")}>Action</div>
            </div>
        </header>
    );
}

export default Header;
