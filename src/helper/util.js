function friendlyDate(datsStr) {
    let dateObj = typeof datsStr === 'object' ? datsStr : new Date(datsStr)
    let time = dateObj.getTime()
    let now = Date.now()
    let space = now - time
    let str = ''
    switch (true) {
        case space < 60000:
            time = '刚刚'
            break;
        case space < 3600 * 1000:
            time = Math.floor(space / 60000) + '分钟前'
            break;
        case space < 3600 * 1000 * 24:
            time = Math.floor(space / (3600 * 1000)) + '小时前'
            break;
        case space < 3600 * 1000 * 24 * 30:
            time = Math.floor(space / (3600 * 1000 * 24)) + '天前'
            break;
        case space < 3600 * 1000 * 24 * 30 * 12:
            time = Math.floor(space / (3600 * 1000 * 24 * 30)) + '个月前'
            break;
    }
    return time
}

export default {
    install(Vue, options) { //vue插件
        Vue.prototype.friendlyDate = friendlyDate;
    }
}