import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../../atoms/Button';
import PageTemplate from '../../templates/Page';
import BookList from '../../organisms/BookList';
import { checkUserAdmin } from '../../../helpers/user';
import './Profile.scss';

const Profile = () => {
    const auth = useSelector((state) => state.auth);
    return (
        <PageTemplate>
            <div className="profile-container">
                <div className="profile-title-div">
                    <h1>
                        {checkUserAdmin(auth.type)
                            ? (
                                <div className="profile-admin-title">
                                    <span>Livros Registrados</span>
                                    <Button className="text-button">
                                        <Link to="/editor/book">
                                            Adicionar livro
                                        </Link>
                                    </Button>
                                </div>
                            )
                            : 'Aqui está uma lista dos seus livros'}
                    </h1>
                </div>
                <BookList isProfile />
            </div>
        </PageTemplate>
    );
};

export default Profile;
