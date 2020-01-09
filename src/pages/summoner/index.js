
import styles from './index.css';
import { connect } from 'dva';

const Summoner = ({summoner}) => {
  return (
    <div className={styles.normal}>
      <h1>Page Summoner</h1>
      <h2>This is {JSON.stringify(summoner)}</h2>
    </div>
  )
}

export default connect(({summoner}) => ({summoner}))(Summoner)
