import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Breadcrumb.scss';

const Breadcrumb = () => {
    const navigate = useNavigate();

    const [breadcrumb, setBreadcrumb] = useState([]);

    useEffect(() => {
        loadBreadcrumb();
    }, [navigate]);

    const loadBreadcrumb = () => {
        const path = window.location.pathname;
        if (path === '/') {
            setBreadcrumb([
                {
                    href: '/',
                    title: 'Home',
                    isActive: true
                }
            ])
        } else {
            setBreadcrumb([
                {
                    href: '/',
                    title: 'Home',
                    isActive: false
                },
                {
                    href: '',
                    title: 'Detail',
                    isActive: true
                }
            ]);
        }
    }

    return (
        <div className='breadcrumb'>
            {
                breadcrumb && breadcrumb.map(({ href, title, isActive }) => <Link key={href} to={href} className={`breadcrumb__title breadcrumb__title--${isActive && 'active'}`}>{title}</Link>)
            }

        </div>
    )
}

export default Breadcrumb;