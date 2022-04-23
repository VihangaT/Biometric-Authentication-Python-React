import { useState,useEffect} from 'react'
import { User } from '@passageidentity/passage-js'

export function useCurrentUser(){
    const [result,setResult] = useState({
        isLoading:true,
        isAuthorized:false,
        username:''
    })

    useEffect(()=>{
        let cancekRequest=false;
        new User().userInfo().then((userInfo)=>{
            if(cancekRequest) return
            
            if(userInfo===undefined){
                setResult({
                    isLoading:false,
                    isAuthorized:false,
                    username:""
                });
                return
            }
            setResult({
                isLoading:false,
                isAuthorized:true,
                username: userInfo.email ? userInfo.email : userInfo.phone
            });
        });
        return ()=>{
            cancekRequest=true;
        }
    },[]);
return result
}