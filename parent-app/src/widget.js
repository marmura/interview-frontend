import * as zoid from 'zoid/dist/zoid.frame';

let MyWidget = zoid.create({
    tag: 'my-widget',
    dimensions: {
        height: '37px',
        width: '117px'
    },
    url: 'http://localhost:2000/index.html',
    props: {
        onClose: {
            type: 'function',
            required: true,
        }
    }
});

export default MyWidget;
