import { Link } from "react-router-dom";


const Book = (props) => {
    const { id, title, image } = props.data;

    return (
        <div className="col-sm-3">
            <div className="card">
                <img src={image} alt="" className="card-image-top" />
                <div className="card-body">
                    <div className="card-title">
                        {title}
                    </div>
                    <Link to={'/books/detail/' + id} className="btn btn-dark btn-block">Show Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Book;