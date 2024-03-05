import axios from 'axios'

const userApi = axios.create({
    baseURL:'http://localhost:3000'
})

const getImageUrl = async (uploadData)=>{
    try {
        const data = await userApi.get('/upload')
        return data.data
    } catch (error) {
        console.log(error.message);
    }
}

const uploadImage = async (url,file)=>{
    try {
        const config = {
            header: {
              "Content-Type": "multipart/form-data",
            },
        };
    
        await axios.put(url,file,config)

    } catch (error) {
        console.log(error.message);
    }
}










export{
    getImageUrl,
    uploadImage
}