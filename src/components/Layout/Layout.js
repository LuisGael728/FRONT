import React from 'react';
import './Layout.css';

const Layout = ({ content, footer }) => {
    return (
        <div className="layout">
            <main className="layout-content">
                <div className="content-wrapper">
                    {content}
                </div>
            </main>
            <footer className="layout-footer">
                {footer}
            </footer>
        </div>
    );
};

export default Layout;
