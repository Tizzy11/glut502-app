


let proxyObj={}
proxyObj['/']={
    ws:false,

    target:'http://192.168.0.102',
    changerOrigin:true,
    panthReWrite:{
        '^/':'/'
    }
}

module.exports={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:proxyObj
    }
}
