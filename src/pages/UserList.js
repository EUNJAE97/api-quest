import {useEffect, useState} from "react";
import {getUserList} from "../api/UserAPI";
import UserInfo from "../components/UserInfo";

function UserList() {

    const [userList, setUserList] = useState();

    useEffect(() => {
        getUserList().then(data => setUserList(data));
    }, []);

    return (
        <div className="content-row">
            { userList && userList.map(user => <UserInfo key={user.id} user={user}/>)}
        </div>
    );
}

export default UserList;