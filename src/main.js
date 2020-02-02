import '@babel/polyfill';
import App from './components/App.svelte';

const app = new App({
    target: document.body,
    props: {
        name: 'Joe',
    },
});

export default app;
