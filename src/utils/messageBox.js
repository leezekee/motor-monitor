import { ElMessage } from "element-plus";
/**
 * 
 * @param {string} _msg 消息
 * @param {string} _type 弹窗类型
 * @param {number} _duration 弹窗持续时间
 * @param {string} _message 弹窗内容
 */
const _messageBox = (_msg, _type, _duration = 3000, _message = null) => {
    if (_message) {
        setTimeout(() => {
            ElMessage.closeAll();
            ElMessage({
                title: _msg,
                message: _message,
            })
        }, 0);
    } else {
        setTimeout(() => {
            ElMessage.closeAll();
            ElMessage({
                message: _msg,
                type: _type,
                duration: _duration,
            })
        }, 0);
    }
}

class messageBox {
    static success(_msg, _duration = 3000) {
        _messageBox(_msg, 'success', _duration = 3000)
    }
    static warning(_msg, _duration = 3000) {
        _messageBox(_msg, 'warning', _duration = 3000)
    }
    static info(_msg, _duration = 3000) {
        _messageBox(_msg, 'info', _duration = 3000)
    }
    static error(_msg, _duration = 3000) {
        _messageBox(_msg, 'error', _duration = 3000)
    }
    static message(_msg, _message = null) {
        _messageBox(_msg, null, null, _message)
    }
}


export default messageBox