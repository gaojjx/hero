
import styles from './index.css';
import { connect } from 'dva';

const Hero = ({hero}) => {
  console.log(hero)
  return (
    <div className={styles.normal}>
      <h1>Page hero</h1>
      <h2>This is {JSON.stringify(hero)}</h2>
    </div>
  )
}

export default connect(({hero}) => ({hero}))(Hero)