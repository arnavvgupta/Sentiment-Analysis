import axios from 'axios'

const url=process.env.REACT_APP_BACKEND_URL;

export const urlAnalyse=async(searchVal="")=>{
  try{
      const json=await axios.get(`${url}/api/urlAnalyse?link=${searchVal}`);
      console.log(json.data)
      return json.data;
  }
  catch(error){
      console.log('Error in urlAnalyse API',error.message);
  }
}
