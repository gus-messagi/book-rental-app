import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageTemplate from '../../templates/Page';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import { useFetch, createBook, updateBook } from '../../../services/BooksApi';
import './BookEditor.scss';

const BookEditor = () => {
    const { id } = useParams();
    const { data, mutate } = useFetch(id ? `/books/${id}` : '/books');
    const [form, setForm] = useState({});
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        if (!id || !data) return;
        setForm(data);
        setIsUpdating(true);
    }, [id, data]);

    const handleOnClick = () => {
        if (isUpdating) {
            if (!data.isAvailable) return;
            updateBook(id, form).then(() => {
                mutate(`/books/${id}`, form);
            });
        } else {
            if (!form.name) return;
            if (!form.stars) {
                form.stars = 0;
            }
            form.isAvailable = true;
            createBook(form, data);
        }

        window.location.href = '/profile';
    };

    const validateChangeStar = (value) => {
        if (value >= 0 && value <= 5) {
            return value;
        }

        return form.stars;
    };

    return (
        <PageTemplate>
            <div className="book-editor-container">
                <Input
                    value={form.name}
                    placeholder="Nome do livro"
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                />
                <Input
                    value={form.author}
                    placeholder="Autor"
                    onChange={(event) => setForm({ ...form, author: event.target.value })}
                />
                <Input
                    type="number"
                    value={form.stars}
                    placeholder="Estrelas"
                    onChange={(event) => setForm(
                        { ...form, stars: validateChangeStar(parseInt(event.target.value, 10)) },
                    )}
                />
                <textarea
                    value={form.description}
                    placeholder="Descrição"
                    className="description-book-input"
                    onChange={(event) => setForm({ ...form, description: event.target.value })}
                />
                <Input
                    type="url"
                    value={form.url}
                    placeholder="URL da imagem"
                    onChange={(event) => setForm({ ...form, url: event.target.value })}
                />
                <Button onClick={() => handleOnClick()}>
                    {isUpdating ? 'Salvar alterações' : 'Adicionar'}
                </Button>
            </div>
        </PageTemplate>
    );
};

export default BookEditor;
