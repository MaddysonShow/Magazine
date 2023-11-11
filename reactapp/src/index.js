import React, {memo, useMemo} from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './App';
import {store} from "./Redux/indexRedux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Threevision from "./components/threevision";

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/3dvision' element={<Threevision/>}/>
                </Routes>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
