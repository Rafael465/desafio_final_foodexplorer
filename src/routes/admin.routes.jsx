
import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Add } from '../pages/Add';

export function AdminRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/add' element={<Add />} />
        </Routes>
    )
}
