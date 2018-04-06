export const CHECK_LIST = {
    user: [
        { property: 'username', reg: /^(?=.*).{2,20}$/, message: '올바르지 않은 이름입니다. (username)' },
        { property: 'email', reg: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: '올바르지 않은 이메일입니다. (email)' },
        { property: 'password', reg: /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,20}$/, message: '올바르지 않은 암호입니다. (password)' }
    ]
};

export function checkProperty(data, service, strict) {
    let result = {};
    for (const item of CHECK_LIST[service]) {
        if (data[item.property] && item.reg.exec(data[item.property])) {
            result[item.property] = data[item.property];
        } else {
            if (!strict && !data[item.property]) continue;
            return { message: item.message, data: null };
        }
    }
    return { message: 'SUCCESS', data: result };
}