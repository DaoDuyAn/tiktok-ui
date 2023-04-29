import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/275491783_2551861914957987_429914352891170890_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=m6-mg-FBFwkAX_5lnpj&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAR4vNMoHLwsYlwVLCpsEmb2Uc2j3gcU4PT2Ql-zOsc2Q&oe=644CA81D"
                alt="Avatar"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Duy An</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>duyan</span>
            </div>
        </div>
    );
}

export default AccountItem;
