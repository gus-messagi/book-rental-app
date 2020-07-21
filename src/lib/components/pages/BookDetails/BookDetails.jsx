import React, { useCallback } from 'react';
import Moment from 'moment';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageTemplate from '../../templates/Page';
import Button from '../../atoms/Button';
import { useFetch, updateBook } from '../../../services/BooksApi';
import './BookDetails.scss';

const BookDetails = () => {
    const { id } = useParams();
    const { data, mutate } = useFetch(`/books/${id}`);
    const auth = useSelector((state) => state.auth);

    const handleOnClick = useCallback((bookId, element) => {
        if (!data.isAvailable) return;
        const date = Moment().clone().add(7, 'days').format('DD-MM-YYYY');
        updateBook(bookId, {
            ...element,
            isAvailable: false,
            expiryDate: date,
            userId: auth.id,
        });
        mutate({
            ...data,
            isAvailable: false,
            expiryDate: date,
            userId: auth.id,
        }, false);
    }, [auth.id, data, mutate]);

    return (
        <PageTemplate>
            <div className="book-details-container">
                <div className="book-details-image">
                    <img src={data?.url} width="400" alt={`${data?.name}-details`} />
                </div>
                <div className="book-details-content">
                    <h1>{data?.name}</h1>
                    <h2>{data?.author}</h2>
                    <p>
                        {data?.description}
                    </p>

                    <Button
                        onClick={() => handleOnClick(data?.id, data)}
                        disabled={!data?.isAvailable}
                    >
                        {data?.isAvailable ? 'Alugar livro' : 'Não disponível'}
                    </Button>
                </div>
            </div>
        </PageTemplate>
    );
};

export default BookDetails;
