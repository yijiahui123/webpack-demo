import _ from 'lodash';
import './style.css';
import Icon from'./icon.jpg'

function component(){
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello','webpack'],' ');
    //_.join方法的输出是Hello webpack 第二哥参数代表数组数据的连接符此处是空格
    element.classList.add('hello');

    //将图像添加到我们现有的div
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon)
    return element;
}

document.body.appendChild(component());