import React, { useState, useEffect } from "react";
import BookData from "../../data/book";
import Navbar from "../../components/Navbar";
import BookDetail from "../../components/BookDetail";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBook, removeBook } from '../../redux/actions/book-action'

const BookDetailPage = () => {

    const dispatch = useDispatch()
    const book = useSelector(state => state.book)

    const { id } = useParams()
    //const [book, setBook] = useState({});

    useEffect(() => {
        //setBook(BookData[id]);
        dispatch(addBook(BookData[id]));
        return () => {
            dispatch(removeBook());
        }

    }, []);

    return (
        <>
            <Navbar />
            <BookDetail data={book} />
        </>
    );
};
export default BookDetailPage;