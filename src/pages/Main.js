import {Link} from "react-router-dom";

function Main() {

    return (
        <>
            <Link to="/user">
                <div className="content-row">
                    <h1>USER LIST </h1>
                </div>
            </Link>
            <hr/>
            <Link to="/post">
                <div className="content-row">
                    <h1>POST LIST </h1>
                </div>
            </Link>
        </>

    );
}

export default Main;