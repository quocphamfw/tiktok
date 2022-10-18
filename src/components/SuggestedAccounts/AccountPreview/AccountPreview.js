import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ace9da506d77b3f7d6b1a8bade7a8488~c5_720x720.jpeg?x-expires=1666148400&x-signature=t5YScbvVmQsqSQ2GeLddhyw3%2BYU%3D"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>Xaviax</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </p>
                <p className={cx('name')}>QuocPham</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>11.4M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>22.5K </strong>
                    <span className={cx('label')}>Liked</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
