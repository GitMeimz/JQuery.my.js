;(function(){
    window.$ = window.jQuery = jQuery;
    function jQuery(selector){
       return new Init (selector);//实现$('');
    }
    function Init(selector){   //构建函数
      let nodeList = document.querySelectorAll(selector);
      console.log(nodeList);
    //遍历nodList伪数组，把里面的每一个都拿出来，作为自己的伪数组
       for(let i = 0; i < nodeList.length; i++){
          this[i] = nodeList[i];
       }
    //给伪数组加一个长度属性
    this.length = nodeList.length;
    }
    //遍历数组的方法
    Init.prototype.each = function(callback){
       for(let i = 0; i < this.length;i++){
        //   传回调函数进来
        callback(i,this[i]);
       }
    }

    Init.prototype.css = function(property,value){
        if(value === undefined){ 
            return window.getComputedStyle(this[0])[property];
        }else{
            let pxArr = ['width','height','top','left'];
            //带单位和不带单位的属性区分开
           for (let i = 0; i < this.length;i++){
               if(pxArr.indexOf(property) !== -1){
                 if(value.toString().indexOf('px') === -1){
                     this[i].style[property] = value + "px";
                 }else{
                     this[i].style[property]= value;
                 }
               }else{
                   this[i].style[property] = value;
               }
           }
        }
        // 最后返回this，用于实现链式编程
        return this;
    }
    // 实现addClass功能
    Init.prototype.addClass = function(){
        // 循环的遍历伪数组，把里面的每个元素都实现类名添加
        for(let i = 0; i<this.length; i++){
            this[i].addClass(className);
        }
        return this;
    }
    //移除类名的方法
    Init.prototype.removeClass = function(className){
        this.each(function(e,i){
            e.classList.remove(className);
        })
        return this;
    }
    //切换类名
    Init.prototype.toggleClass = function(className){
         this.each(function(e,i){
           e.classList.toggle(className);
         })
         return this;
    }
    //
})();
