function fetchUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            resolve({name: "chaicode", url: "https://chaicode.com"})
        },2000)
    })
}

async function getUserData(){
    try{
        console.log('Fetching user data..');
        const userdata = await fetchUserData()
        console.log("User data fetched succesfully");
        console.log("User data: ",userdata);
    }catch(error){
        console.log("Errror fetching data",error);
    }
}
getUserData();

 function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve("Post data fetched")
        },2000)
    });
 }

  function fetchCommonData(){
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve("Common data fetched succesfully")
        },4000)
    });
 }
async function getBlogData(){
    try {
        console.log("Fetching blog data");
        // const blogData = await fetchPostData();
        // const commonData = await fetchCommonData();
       const [postData,commonData]= await Promise.all([fetchPostData(),fetchCommonData()])
        console.log(blogData);
        console.log(commonData);
        console.log("Fetch completed ");
    } catch (error) {
        console.error("Error fetching blog data", error);
    }
}
getBlogData();// node 07_AdvancedJS/asyncAwait.js 