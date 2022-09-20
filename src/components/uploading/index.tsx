import { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { getImageURL, PostImage } from '../../services/image'
import Uploaded from '../uploaded'

interface Props {  
  formData: FormData;
  fileObj: File
}

const Uploading: React.FC<Props> = ({ formData,fileObj }) => {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [imgPath, setImgPath] = useState<string>("")    


  useEffect(() => {
    const uploadimage = async() => {
      //await PostImage(formData, fileObj)
      //setImgPath(await getImageURL(fileObj))
      setImgPath(await PostImage(formData, fileObj))
      setIsLoading(!isLoading);      
    }    
    uploadimage()
             
  }, [])      

  

  if(isLoading){
    return <Uploaded imgPath={imgPath}/>
  }    

  return (
      <div className="h-uploading w-uploading flex flex-col shadow-md rounded-xl justify-center">
          <p className="text-large text-txt-strong ml-8">Uploading...</p>
          <div className="rounded-full dark:bg-bar-bg mt-8 w-bar h-bar ml-8">
            <div className="animate-progressbar bg-blue-600 rounded-full h-bar"></div>
          </div>
      </div>
  )

}

export default Uploading