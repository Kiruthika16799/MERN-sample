import React, { useState, useEffect} from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";


const EditBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5000/api/book/${id}`)
            .then((response) => {
                setTitle(response.data.title)
                setAuthor(response.data.author)
                setPublishYear(response.data.publishYear)
                setLoading(false);
                enqueueSnackbar('Book created successfully', {variant:'success'})
            })
            .catch((error) =>{
                console.log(error);
                setLoading(false);
                enqueueSnackbar('Error', {variant:'error'})

            });
    }, [id]);
    const handleEditBook = () => {
        const data = {
            title,
            author,
            publishYear
        }
        setLoading(true);
        axios
            .put(`http://localhost:5000/api/books/${id}`, data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }
    return(
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Edit Book</h1>
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
                <button className="bg-sky-200" onClick={handleEditBook}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default EditBook