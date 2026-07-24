import {showMessage} from "../dialog/message";
import {getCloudURL} from "../config/util/about";
import {isInIOS} from "../protyle/util/compatibility";

export const needSubscribe = (tip = window.siyuan.languages._kernel[29]) => {
    if (window.siyuan.user && (window.siyuan.user.userSiYuanProExpireTime === -1 || window.siyuan.user.userSiYuanProExpireTime > 0)) {
        // 终身会员或订阅未过期
        return false;
    }
    if (tip) {
        if (tip === window.siyuan.languages._kernel[29]) {
            tip = isInIOS() ? window.siyuan.languages._kernel[295] : window.siyuan.languages._kernel[29].replaceAll("${accountServer}", getCloudURL(""));
        }
        showMessage(tip);
    }
    return true;
};

/**
 * 判断是否可以使用第三方同步
 */
export const isPaidUser = () => {
    // Fork change: third-party self-hosted sync (WebDAV / S3 / Local) is free for everyone.
    // Gates only third-party providers; the first-party SiYuan cloud still uses needSubscribe().
    return true;
};
