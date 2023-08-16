import { Link } from 'react-router-dom';
import { RouteProvider, useTheme } from 'app/providers';
import { classNames } from 'shared';
import './styles/index.scss';

export const App = () => {
    const { theme, toggleTheme } = useTheme();
    const a = 'sadaskdj';

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Link to={'/'}>homepage</Link>
            <Link to={'/about'}>about</Link>
            <RouteProvider />
        </div>
    );
};
