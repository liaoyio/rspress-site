import Theme from 'rspress/theme';
import './styles.css'
import './custom.scss'

const Layout = () => (
  <Theme.Layout />
);

export default { ...Theme, Layout };

export * from 'rspress/theme';
