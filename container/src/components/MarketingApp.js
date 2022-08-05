import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        mount(ref.current, {
            // pathname destructured as nextPathname
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;

                if (pathname !== nextPathname) {
                    console.log('The container noticed navigation in Marketing ', nextPathname);
                    history.push(nextPathname);
                }
            },
        })
    });

    return (
        <div ref={ref} />
    );
};