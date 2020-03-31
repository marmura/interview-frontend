import * as zoid from 'zoid/dist/zoid.frame';

let MyWidget = zoid.create({
    tag: 'my-widget',
    dimensions: {
        height: '350px',
        width: '100%'
    },
    url: 'http://localhost:2000/index.html'
});

export default MyWidget;
