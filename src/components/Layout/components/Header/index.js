import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import { faCircleNotch, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import { faSistrix } from "@fortawesome/free-brands-svg-icons";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../../../AccountItem";

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2]);
        }, 0);
    }, []);

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <img src={images.logo} alt="tiktok"></img>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => {
                        return (
                            <div className={cx("search-result")} tabIndex={-1} {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx("search-title")}>Account</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        );
                    }}
                >
                    <div className={cx("search")}>
                        <input type="text" placeholder="search accounts and videos" />
                        <button className={cx("close-btn")}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx("loading")} icon={faCircleNotch} />
                        <button className={cx("search-btn")}>
                            <FontAwesomeIcon icon={faSistrix} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx("action")}>Action</div>
            </div>
        </header>
    );
}

export default Header;
