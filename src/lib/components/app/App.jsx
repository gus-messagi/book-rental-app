import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginPage from '../pages/Login';
import BooksPage from '../pages/Books';
import BookDetailsPage from '../pages/BookDetails';
import ProfilePage from '../pages/Profile';
import BookEditorPage from '../pages/BookEditor';
import { useFetch } from '../../services/BooksApi';
import { loadBooks } from '../../redux/actions/booksActions';
import loadUser from '../../redux/actions/authActions';
import { loadSession } from '../../services/AuthApi';

function App() {
    const dispatch = useDispatch();
    const { data } = useFetch('/books');
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect(() => {
        if (!data) return;
        dispatch(loadBooks(data));
    }, [data, dispatch]);

    useEffect(() => {
        setIsAuthenticated(!!sessionStorage.getItem('token'));
        if (isAuthenticated) {
            loadSession(sessionStorage.getItem('token')).then((result) => {
                if (!result) return;
                dispatch(loadUser({ id: result.id, type: result.type }));
            });
        }
    }, [isAuthenticated, dispatch]);

    return isAuthenticated !== undefined && (
        <Switch>
            {isAuthenticated ? (
                <>
                    <Route exact path="/" component={BooksPage} />
                    <Route exact path="/book/:id" component={BookDetailsPage} />
                    <Route exact path="/profile" component={ProfilePage} />
                    <Route exact path="/editor/book/:id" component={BookEditorPage} />
                    <Route exact path="/editor/book" component={BookEditorPage} />
                    <Route exact path="/logout" render={() => sessionStorage.removeItem('token')} />
                </>
            ) : (
                <>
                    <Route exact path="/login" component={LoginPage} />
                    <Route path="*" render={() => <Redirect to="/login" />} />
                </>
            )}
        </Switch>
    );
}

export default App;
