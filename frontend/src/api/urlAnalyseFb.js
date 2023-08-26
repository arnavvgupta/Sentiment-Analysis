import axios from 'axios'

const url=process.env.REACT_APP_BACKEND_URL;

export const urlAnalyseFb=async(postId="", pageId="")=>{
  try{
    console.log(pageId);
    console.log(postId);
      const json=await axios.get(`${url}/api/fbUrlAnalyse?post_id=${postId}&page_id=${pageId}`);
      
      console.log("data---",json.data)
      return json.data;
  }
  catch(error){
      console.log('Error in urlAnalyseYtb API',error.message);
  }
}
