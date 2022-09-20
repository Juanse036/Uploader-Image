import checkmark from '../../assets/checkmark.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    imgPath : string;
}

const Uploaded: React.FC<Props> = ({imgPath}) => {   
    
    const CopyToClipboard = () => {
        navigator.clipboard.writeText(imgPath)
        toast("Link Copied!");
    }


    return (
        <div className="h-upload w-upload flex flex-col shadow-md rounded-xl justify-center items-center">
            <img src={checkmark} alt="checkmark" className="w-[35px] h-[35px]"/>    
            
            <p className="text-large text-txt-strong mt-[11.03px]">Uploaded Successfully</p>
            <div className="
                h-container-drag 
                w-container-drag 
                bg-gray-back
                flex flex-col
                justify-center
                items-center
                mt-[29.62px]
            ">
                <img src={imgPath} alt="Image Uploaded" className="w-full h-full object-contain"/>                
            </div>
            <div className='flex items-center justify-between w-[338px] h-[34px] bg-link-color rounded-lg mt-[25.34px]'>
                <p className='text-ultrasmall ml-[7.12px] overflow-hidden text-ellipsis w-52'>{imgPath}</p>                
                <button className="
                    bg-button 
                    hover:bg-blue-700 
                    text-white 
                    py-2 
                    px-4 
                    rounded-lg 
                    w-button 
                    h-button 
                    text-[10px]"
                    onClick={CopyToClipboard}
                >
                        Copy Link
                </button>         
                <ToastContainer 
                    position="top-left"
                    autoClose={2000}
                    theme="dark"
                />       
            </div>
        </div>
    )

}

export default Uploaded