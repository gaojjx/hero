import styles from './index.css';
import { Layout, Menu } from 'antd';
import Link from 'umi/link';

const {Header, Content, Footer} = Layout

const menuData = [
  { route: 'hero', name: '英雄' },
  { route: 'item', name: '局内道具' },
  { route: 'summoner', name: '召唤师技能' },
]

function BasicLayout({location: {pathname}, children}) {
  return (
      <Layout>
        <Header>
          <div className={styles.logo}>王者荣耀资料库</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys="['1']"
            style={{lineHeight: '64px'}}
          >
            {menuData.map(menu => {
              return <Menu.Item key={menu.route}>
                <Link to={menu.route}>{menu.name}</Link>
              </Menu.Item>
            })}
          </Menu>
        </Header>
        <Content>
          {children}
        </Content>
        <Footer style={{textAlign: 'center'}}>demo</Footer>
      </Layout>
      
  );
}

export default BasicLayout;
