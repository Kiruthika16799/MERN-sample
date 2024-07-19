import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useParams } from "react-router-dom";


const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    useEffect(()=>{
        setLoading(true);
        axios
            .get(`http://localhost:5000/api/book/${id}`)
            .then((response) =>{
                console.log('response', response);
                setBook(response.data);
                setLoading(false);
            })
            .catch((error) =>{
                console.log(error);
                setLoading(false);
            })
    }, [id])
    return(
        <div className="p-4">
           <BackButton />
            <h1 className="text-3xl my-4">Show Book</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className="flex flex-col border-2">
                    <div className="my-4">
                        <span className="">ID : </span>
                        <span className="">{book._id}</span> 
                    </div>
                    <div className="my-4">
                        <span className="">Title : </span>
                        <span className="">{book.title}</span> 
                    </div>
                    <div className="my-4">
                        <span className="">Author : </span>
                        <span className="">{book.author}</span> 
                    </div>
                    <div className="my-4">
                        <span className="">Publish Year : </span>
                        <span className="">{book.publishYear}</span> 
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShowBook