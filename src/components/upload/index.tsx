import React, { useEffect, useRef, useState } from 'react'
import image from '../../assets/image.svg'
import { EmptyBucket } from '../../services/image'
import { PostImage } from '../../services/image'

import Uploading from '../uploading'

const Upload = () => {

/*--------------------------EMPTY BUCKT <SUPABASE----------------------*/
useEffect(() => {
    EmptyBucket();
}, [])

/*----------------------------DRAG AND DROP------------------------*/  

    const [isFileSend, setIsFileSend] = useState<boolean>(false)
    const [imgPath, setImgPath] = useState<string>("")    
    const [file, setFile] = useState<File>()
    const [formData, setFormData] = useState<FormData>(new FormData())    
    const [dragEnter, setDragEnter] = useState<boolean>(false)

    
    const StyleDragEnter = "border-lime-900"    
    const StyleDragOut = "border-blue-border"    

    const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {      
      e.stopPropagation();
      setDragEnter(!dragEnter)
    }
    const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {      
      e.stopPropagation();
      setDragEnter(!dragEnter)
    }

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {        
        e.stopPropagation();
        e.preventDefault();        
    }    
    
    const  onFileDrop = async(e: React.DragEvent<HTMLDivElement>) => {        
        e.stopPropagation();    
        e.preventDefault();        
        
        const fileObj = e.dataTransfer.files[0];
        formData.append('UPIMG', e.dataTransfer.files[0]);        
        setFile(fileObj)
        setIsFileSend(!isFileSend) 
      }
//----------------------------CHOOSE FILE BUTTON------------------------
      const fileInput = useRef<HTMLInputElement>(null);
      
      const selectFile = () => {
          fileInput.current?.click();                    
      }

      const handleFileChange = async(event: React.ChangeEvent<HTMLInputElement>) => {

        if (!event.target.files) return;
        const fileObj = event.target.files[0];
        if (!fileObj) {
          return;
        }    
        
        formData.append('UPIMG', fileObj);        
        setFile(fileObj)
        setIsFileSend(!isFileSend) 
      }      

      if (isFileSend && file !== undefined){
        return <Uploading fileObj={file} formData={formData}/>
      }      

    return (            
        <div className="h-upload w-upload flex flex-col shadow-md rounded-xl justify-center items-center">
            <p className="text-large text-txt-strong">Upload your image</p>
            <p className='text-small text-txt-base mt-[15.99px]'>File should be Jpeg, Png...</p>
            <div className={`
                h-container-drag 
                w-container-drag 
                border-2 
                border-dashed                 
                rounded-xl 
                bg-gray-back
                flex flex-col
                justify-center
                items-center
                mt-[29.62px]
                ${dragEnter ? StyleDragEnter : StyleDragOut}`}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDragOver={onDragOver}
                onDrop={onFileDrop}
            >
                <img src={image} alt="Drag and Drop your image here" className="w-image-drag h-image-drag"/>
                <p className="text-base text-txt-soft mt-[37.26px]">Drag & Drop your image here</p>
            </div>
            <p className="text-base text-txt-soft mt-[18.91px]">Or</p>
            <input
                style={{display: 'none'}}
                ref={fileInput}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                name="UPIMG"
            />
            <button className="
                bg-button 
                hover:bg-blue-700 
                text-white 
                py-2 
                px-4 
                rounded-lg 
                w-button 
                h-button 
                text-[10px] 
                mt-[29.62px]"
                onClick={selectFile}
            >
                Choose a file
            </button>            
            
        </div>

        
    )

}

export default Upload