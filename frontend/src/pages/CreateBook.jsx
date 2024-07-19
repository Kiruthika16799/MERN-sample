import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState('');
    const navigate = useNavigate();
    const {enqueueSnackbar} = useSnackbar();

    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear
        }
        setLoading(true);
        axios
            .post(`http://localhost:5000/api/books/`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book created successfully', {variant:'success'})
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                enqueueSnackbar('Error', {variant:'error'})
                setLoading(false);
            })
    }
    return(
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Create Book</h1>
            {loading ? <Spinner/> : '' }
            <div className="flex flex-col">
                <div className="my-4">
                    <label>Title</label>
                    <input 
                        className="border"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="my-4">
                    <label>Author</label>
                    <input 
                        className="border"
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className="my-4">
                    <label>Publish Year</label>
                    <input 
                        className="border"
                        type="text"
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)}
                    />
                </div>
                <button className="bg-sky-200" onClick={handleSaveBook}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default CreateBook