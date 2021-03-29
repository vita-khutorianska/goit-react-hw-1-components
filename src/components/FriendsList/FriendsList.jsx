// import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';

function FriendsList({ friends }) {
  return (
    <ul className={styles.friend__list}>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <li className={styles.friend__item} key={id}>
          <span className={isOnline ? styles.onLine : styles.offLine}></span>
          <img className="avatar" src={avatar} alt={name} width="50" />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}
console.log('FriendsList');

// FriendsList.defaultProps = {
//   avatar: 'https://www.flaticon.com/svg/static/icons/svg/763/763704.svg',
// };
// FriendsList.propTypes = {
//   friends: PropTypes.exact({
//     id: PropTypes.number.isRequired,
//     isOnline: PropTypes.bool.isRequired,
//     avatar: PropTypes.string,
//     name: PropTypes.string.isRequired,
//   }),
// };

export default FriendsList;