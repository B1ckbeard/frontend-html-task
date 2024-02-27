import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
            title: null,
        };
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }));
    };

    activeLink = (title) => {
        this.setState({ title: title });
      };

    goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    render() {
        const { isOpened, title } = this.state;
        const containerClassnames = classnames('sidebar', { opened: isOpened });

        return (
            <div className={containerClassnames}>
                <nav className='nav'>
                    <div className='nav__header'>
                        <img
                            src={logo}
                            alt="TensorFlow logo"
                        />
                        <span>TensorFlow</span>
                        <button onClick= { this.toggleSidebar } className='nav__toggle'>
                            <FontAwesomeIcon icon={'angle-right'}/>
                        </button>
                    </div>

                    <div className='nav__items'>
                        {
                            routes.map((route) => (
                                <div key={route.title}
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.activeLink(route.title);
                                    this.goToRoute(route.path);
                                }}
                                 className={classnames('nav__items_item', {['active']: title === route.title,})}>
                                    <FontAwesomeIcon icon={route.icon} />
                                    <span>{route.title}</span>
                                </div>
                            ))
                        }
                    </div>

                    <div className='nav__footer'>
                        {
                            bottomRoutes.map((route) => (
                                <div key={route.title} 
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.activeLink(route.title);
                                    this.goToRoute(route.path);
                                }}
                                className={classnames('nav__footer_item', {['active']: title === route.title,})}>
                                    <FontAwesomeIcon icon={route.icon} />
                                    <span>{route.title}</span>
                                </div>
                            ))
                        }
                    </div>
                </nav>
            </div>
        );
    }
}
