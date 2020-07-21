import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../../atoms/Button';
import StarsInRow from '../StarsInRow';
import { checkUserClient, checkUserAdmin } from '../../../helpers/user';
import { deleteBook } from '../../../services/BooksApi';
import './BookCard.scss';

const BookCard = ({
    bookInfo,
    isProfile,
    className,
}) => {
    const data = useSelector((state) => state.books.filter);
    const auth = useSelector((state) => state.auth);
    return (
        <div className={`book-card-content ${className}`}>
            <div className="book-card-image-div">
                <img src={bookInfo.url} alt="harry potter" />
            </div>
            <div>
                <h1><Link to={`/book/${bookInfo.id}`}>{bookInfo.name}</Link></h1>
                <span>{bookInfo.author}</span>
                <div className="book-card-star-div">
                    <StarsInRow stars={bookInfo.stars} />
                </div>
                {isProfile && checkUserClient(auth.type) && (
                    <div>
                        <span>
                            Aluguel expira em:
                            &nbsp;
                            {bookInfo.expiryDate}
                        </span>
                    </div>
                )}
                {isProfile && checkUserAdmin(auth.type) && (
                    bookInfo.isAvailable ? (
                        <div className="book-card-admin-buttons-div">
                            <Button className="text-button">
                                <Link to={`/editor/book/${bookInfo.id}`}>
                                    Editar
                                </Link>
                            </Button>
                            <Button
                                className="button-remove text-attention-button"
                                onClick={() => deleteBook(bookInfo.id, data)}
                            >
                                Remover
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <span>Livros alugados não podem sofrer alterações</span>
                        </div>
                    )
                )}
                {!isProfile && (
                    <Button
                        className={`text-button ${!bookInfo.isAvailable && 'button-text-disabled'}`}
                    >
                        <Link to={`/book/${bookInfo.id}`}>
                            {bookInfo.isAvailable ? 'Ver mais' : 'Livro já alugado'}
                        </Link>
                    </Button>
                )}
            </div>
        </div>
    );
};

BookCard.propTypes = {
    bookInfo: PropTypes.object.isRequired,
    isProfile: PropTypes.bool,
    className: PropTypes.string,
};

export default BookCard;
