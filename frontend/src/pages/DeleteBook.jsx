import React, {useState} from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const {enqueueSnackbar} = useSnackbar();

    const handleDeleteBook = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:5000/api/books/${id}`)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book deleted successfully', {variant:'success'})

                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                enqueueSnackbar('Error', {variant:'error'})

            })
    }
    return(
        <div className="">
            <BackButton />
            <h1 className="text-3xl"> Delete Book</h1>
            {loading ? <Spinner/> : ''}
            <div className="flex flex-col">
                <h2 className="text-2xl"> Are you sure you want to delete this book?</h2>
                <button className="bg-red-400" onClick={handleDeleteBook}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default DeleteBook