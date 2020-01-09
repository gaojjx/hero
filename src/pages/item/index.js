
import styles from './index.css';
import { connect } from 'dva';

const Item = ({item}) => {
  return (
    <div className={styles.normal}>
      <h1>Page Item</h1>
      <h2>This is {JSON.stringify(item)}</h2>
    </div>
  )
}

export default connect(({item}) => ({item}))(Item)
