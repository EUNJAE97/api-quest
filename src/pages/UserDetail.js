import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserDetail} from "../api/UserAPI";

function UserDetail() {
    const {id} = useParams();

    const [user, setUser] = useState();

    useEffect( () => {
        getUserDetail(id).then(data => setUser(data));
    },[])

    return(
        <div className="content-col">
            { user &&
            <>
                    <h1>INFO</h1>
                    <p>Name : {user.name}</p>
                    <p>ID : {user.username}</p>
                    <p>E-mail : {user.email}</p>
                    <p>Phone : {user.phone}</p>
                    <p>주소 : {user.province} {user.city} {user.district} {user.street} {user.zipcode}</p>
            </>

            }

        </div>
    )

}
export default UserDetail;