import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import BOOK_DETAILS from '../../../constants/route';
import Input from '../../atoms/Input';
import IconButton from '../../atoms/IconButton';
import { searchBooks } from '../../../redux/actions/booksActions';
import './Page.scss';

const Page = ({ children }) => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState(false);
    const location = window.location.pathname.split('/')[1];

    const onChange = (event) => {
        if (location !== BOOK_DETAILS) {
            dispatch(searchBooks(event.target.value));
            setSearchValue(event.target.value);
        }
    };

    return (
        <div className="page-templante-container">
            <header>
                <h1><Link to="/">Book Rental</Link></h1>
                <Input
                    placeholder="Pesquisar livro"
                    onChange={onChange}
                />
                <div className="page-template-header-icons-div">
                    <IconButton
                        img="profile"
                        path="/profile"
                        className="profile-icon"
                    >
                        Profile
                    </IconButton>
                    <IconButton
                        img="logout"
                        path="/logout"
                    >
                        Logout
                    </IconButton>
                </div>
            </header>
            <div className="page-template-content">
                {!!searchValue && (
                    <div className="search-show-result-div">
                        <h1>
                            Resultados para:
                            <span>
                                &nbsp;
                                {searchValue}
                            </span>
                        </h1>
                    </div>
                )}
                {children}
            </div>
            <footer>
                © Copyright
            </footer>
        </div>
    );
};

Page.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Page;
