React 18 & This Section
This section was recorded with React 17 - therefore, in index.js, you will see slightly different code (that is the only change though - everything you learn in this section still applies!).

You can update the project to React 18 with these two steps:

1) npm install --save react@latest react-dom@latest

2) Update index.js:

Replace

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
with

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>);
That's all - as mentioned, this is the only change. Everything you learn in this section is up-to-date with the latest version of React.