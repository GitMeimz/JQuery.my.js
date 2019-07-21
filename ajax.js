function ajax(options){
   options = options || {};
   options.type = options.type || 'get';
   options.url = options.url || '';
   options.data = options.data || '';
   options.callback = options.callback || ((res)=>{
       alert('你的回调函数没给，我们不建议这样干');  
       console.log(res);
   });

   let xhr = new XMLHttpRequest();
   //如果是get请求，把数据拼接在url的后面
   if(options.type === 'get'){
       options.url += '?' + options.data;
   }
   xhr.open(options.type,options.url);
   //如果是post请求，把数据放到send的里面，在之前还要设置请求头
   if(options.type === 'post'){
      //设置请求头
      xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
      xhr.send(options.data);
   }else{
       xhr.send();
   }
   xhr.onreadystatechange = ()=>{
       if(xhr.readyState === 4 && xhr.status === 200){
           //请求成功
           options.callback(xhr.responseText);
       }
   }
}