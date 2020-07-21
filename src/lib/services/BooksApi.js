import useSWR, { mutate as globalMutate } from 'swr';
import api from './Api';

export function useFetch(url) {
    const { data, error, mutate } = useSWR(url, async (_url) => {
        const response = await api.get(_url);
        return response.data;
    });

    return { data, error, mutate };
}

export function createBook(data, currentData) {
    api.post('/books', data);
    currentData.push(data);
    globalMutate('/books', currentData);
}

export async function updateBook(id, data) {
    await api.put(`/books/${id}`, data);
    globalMutate('/books', data);
}

export function deleteBook(id, data) {
    api.delete(`/books/${id}`);
    const newBooks = data.filter((book) => book.id !== id && book);
    globalMutate('/books', newBooks);
}
