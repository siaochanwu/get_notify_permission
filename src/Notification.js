import React, {useState, useEffect} from "react"
import { getToken } from "./FirebaseInit";

const Notification = (props) => {
    const [isTokenFound, setTokenFound] = useState(false)

    console.log('token found:', isTokenFound)

    useEffect(() => {
        let data;
        async function tokenFunc() {
            data = await getToken(setTokenFound)
            if(data) {
                console.log('token is: ', data)
            }
        } 
        tokenFunc()
    }, [setTokenFound]);
    return (
        (isTokenFound ? <p>Get Token Done!</p>: <p>Fail to Get Permission</p>)
    )
}
export default Notification;