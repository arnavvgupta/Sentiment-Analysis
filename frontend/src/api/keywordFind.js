import axios from 'axios'

const url=process.env.REACT_APP_BACKEND_URL;

export const keywordFind=async(searchVal="",keyword)=>{
  try{
      const json=await axios.get(`${url}/api/getComments?link=${encodeURIComponent(searchVal)}&keyword=${keyword}`);
      console.log(json.data)
      return json.data;
  }
  catch(error){
      console.log('Error in urlAnalyseYtb API',error.message);
  }
}
