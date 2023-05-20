import { useEffect } from "react"


const useTitle = title =>{
    useEffect(()=>{
        document.title = `Pixel Pals | ${title}`
    },[title])
}

export default useTitle;