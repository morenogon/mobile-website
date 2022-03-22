import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="notFoundPage">
            <h4>Page not found. Go back to <Link to='/'>Home page</Link></h4>
        </div>
    )
}

export default NotFoundPage