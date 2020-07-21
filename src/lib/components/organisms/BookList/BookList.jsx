import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import BookCard from '../../molecules/BookCard';
import { TYPE_USER_CLIENT } from '../../../constants/user';
import './BookList.scss';

const BookList = ({ isProfile }) => {
    const data = useSelector((state) => state.books.filter);
    const auth = useSelector((state) => state.auth);
    return (
        <div className="book-list-div">
            {data?.map((element) => {
                if (isProfile && auth.type === TYPE_USER_CLIENT) {
                    if (element.userId === auth.id) {
                        return (
                            <BookCard
                                key={`${element.id}-book-card`}
                                className="book-card-component"
                                bookInfo={element}
                                isProfile={isProfile}
                            />
                        );
                    }

                    return null;
                }
                return (
                    <BookCard
                        key={`${element.id}-book-card`}
                        className="book-card-component"
                        bookInfo={element}
                        isProfile={isProfile}
                    />
                );
            })}
        </div>
    );
};

BookList.propTypes = {
    isProfile: PropTypes.bool,
};

export default BookList;
