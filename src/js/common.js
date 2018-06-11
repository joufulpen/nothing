// 封装min-max的随机数。
function randomNumber(min,max){
    var num = parseInt(Math.random()*(max-min+1))+min;
    return num;
}

// 封装生成随机颜色。'rgb('+red+','+green+','+blue+')';
function randomColor(n){
    if(n===16){
        var str = '0123456789abcdef';
     var color = '#';
     for(var i = 0; i<6;i++){
     var idx = parseInt(Math.random()*str.length);
     color += str[idx];
   };
    return color;
    }
    var red = randomNumber(0,255);
    var green = randomNumber(0,255);
    var blue = randomNumber(0,255);
    return 'rgb('+red+','+green+','+blue+')';
}


// 封装获取CSS样式，兼容IE8-的函数
// 
function getCss(ele,key){
    // 判断是否支持getComputedStyle
    if(window.getComputedStyle){
        // 标准浏览器
        return getComputedStyle(ele)[key]
    }else if(ele.currentStyle){
        // IE8-
        return ele.currentStyle[key]
    }else{
        // 返回内联样式
        return ele.style[key]
    }
}    

//    
// 封装倒计时   
function countDown(end,callback){
            var offset = Date.parse(end) - Date.now();
            offset = parseInt(offset/1000);
            if(offset<=0){
                clearInterval(timer)
                if(typeof callback === 'function'){
                    callback();
                }
            }
            var sec = offset%60;
            var min = parseInt(offset/60)%60;
            var hour = parseInt(offset/60/60)%60;
            var day = parseInt(offset/60/60/24);
            sec = sec<10 ? '0'+sec : sec;
            min = min<10 ? '0'+min : min;
            hour = hour<10 ? '0'+hour : hour;

            return day + '天' +hour+'时'+min+'分'+sec+'秒';           
        }


var Cookie = {
    get:function(name){
        // 获取所有cookie
        var cookies = document.cookie;
        // 装成（拆分成）数组
        cookies = cookies.split('; ');
        var res = '';
        for(var i=0;i<cookies.length;i++){
            // 拆分cookieName和cookievalue
            var arr = cookies[i].split('=');
            // 判断传入的属性名
            if(arr[0] === name){
                res = arr[1];
                break;
            }
        }
        return res;
    },

    set:function(name,value,param){
        var cookie = name + '=' + value;
        if(param){
            // 有效期
            if(param.expires){
                cookie += ';expires='+param.expires.toUTCString();
            }
            // 保存路径
            if(param.path){
                cookie += ';path=' +param.path;
            }
            // 域名
            if(param.domain){
                cookie += ';domain=' + param.domain;
            }
            // 安全性
            if(param.secure){
                cookie += ';secure'
            }
        }
        document.cookie = cookie;
    },

    remove:function(name,path){
        var now = new Date();
        now.setDate(now.getDate()-1);
        this.set(name,null,{expires:now,path:path});
    },

}



// 封装动画函数
function animate(ele,obj,callback){
    // 使用属性timerLen记录定时器数量
    ele.timerLen = 0;
    for(var attr in obj){
        ele.timerLen ++;
        (function(attr){
            var timerName = attr + 'Timer';
            var target = obj[attr];
            // 添加前 先清除之前的同名定时器
            clearInterval(ele[timerName]);
            ele[timerName] = setInterval(function(){
                // 获取当前值
                var current = getCss(ele,attr);
                 // 提取单位
            var unit = current.match(/[a-z]*$/)[0];
            // 提取当前值（number）
            current = parseFloat(current);
            // 计算缓冲速度
            var speed = (target-current)/10;
            // 针对opacity属性的操作
            if(attr === 'opacity'){
                speed = speed>0? 0.05 : -0.05;
            }else{
                // 避免speed过小或为0；
                speed = speed>0? Math.ceil(speed) : Math.floor(speed);
            }

            current = current + speed;

            // 判断目标值 清除定时器
            if(current === target){
                clearInterval(ele[timerName]);
                current = target;
                ele.timerLen --;
                // 动画完成后执行回调函数
                if(typeof callback === 'function' && ele.timerLen === 0){
                    callback();
                }
            }
            // 设置样式
            ele.style[attr] = current + unit;
            },30)
           

        })(attr)
    }
}
