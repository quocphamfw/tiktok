import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ace9da506d77b3f7d6b1a8bade7a8488~c5_100x100.jpeg?x-expires=1665424800&x-signature=itogwcXcS2eKJaSHFw8lneUHyWU%3D"
                alt="Xaviax"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Xaviax</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>quocphamfw</span>
            </div>
        </div>
    );
}

export default AccountItem;
