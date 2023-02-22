import React from 'react';
import  useViewport  from '../hooks/useViewPort';

function withViewport(Component) {
    return function WrappedComponent(props) {
        const device = useViewport();

        return <Component {...props} device={device} />;
    };
}

export default withViewport;