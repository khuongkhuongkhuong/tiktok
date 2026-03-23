import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/b8b78acd4d9ec455c3871b608102b8d7~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=93c42e6a&x-expires=1774432800&x-signature=DYH2OEKgiKScGK8leaUznRmjVEc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my2"
                alt="name"
                className={cx("avatar")}
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Nguyen Xuan Khuong</span>
                    <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />
                </h4>
                <p className={cx("username")}>khuongkhuongkhuong</p>
            </div>
        </div>
    );
}

export default AccountItem;
