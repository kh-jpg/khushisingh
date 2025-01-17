//console.log("hii");
function registration(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let res={
                "msg":"promise resolved for registration","status":230
            }
            resolve(res)
        },2000)
    })
}
function  sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let rs=true;
            if(rs){
                resolve('promise resolve send email');
            }
            else{
                reject('not able to  send email');
            }
        
            },4000)
    })
}
function  login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let rs=false;
            if(rs){
                resolve('promise resolve for login');
            }
            else{
                reject('error promise not resolved');
            }
        
            },3000)
    })
}
function  getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                resolve('API call getdata successfully');
        
            },2000)
    })
}
async function executemethod(){
try{
      const reg_res=await registration();
      console.log(reg_res);

     const sendemail_res=await sendEmail();
      console.log(sendemail_res);

      const login_res=await login();
      console.log(login_res);

      const getdata_res=await getdata();
      console.log(getdata_res);

}catch(err){
    console.log(err);
}finally{
    console.log('execution completed')
}
}
executemethod()
