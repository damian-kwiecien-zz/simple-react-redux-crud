import React from 'react'
import { render } from 'react-dom';
import configureStore from './configure-store'
import RootRouter from './root-router'

const store = configureStore({})

render(
    <RootRouter store={store} />,
    document.getElementById('root')
)