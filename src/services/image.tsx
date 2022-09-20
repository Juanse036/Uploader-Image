import axios from 'axios';
import { supabase } from './supabase'

export const EmptyBucket = async() => {
    const { data, error } = await supabase.storage.emptyBucket('images')
}

export const getImageURL = async(fileObj: File) =>{
    const { publicURL, error } = supabase.storage
        .from('images')
        .getPublicUrl(fileObj.name)
    

    if (publicURL == null){
        return "Sorry, something went wrong!"
    }    

    return publicURL

}


export const PostImage = async(formData : FormData, fileObj : File) => {     
    try {                     

        const { data, error } = await supabase.storage
            .from('images')
            .upload(fileObj.name, formData)         
            

        return getImageURL(fileObj);

    } catch (err) {        
        return ("Sorry, something went wrong!")
    }
    
}