export const CHECK_LIST = {
    user: [
        { property: 'username', reg: /^(?=.*).{2,20}$/, message: '올바르지 않은 이름입니다. (username)' },
        { property: 'email', reg: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: '올바르지 않은 이메일입니다. (email)' },
        { property: 'password', reg: /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,20}$/, message: '올바르지 않은 암호입니다. (password)' }
    ],
    product: [
        { property: 'title', reg: /.+/, message: '상품타이틀 (title)' },
        { property: 'description', reg: /.+/, message: '상품설명 (description)' },
        { property: 'profitRate', reg: /0\.[0-9]{2}/, message: '상품이율 0.xx (profitRate)' },
    ],
    manager: [
        { property: 'amount', reg: /[0-9]{4,7}/, message: '올바르지 않은 신규 금액입니다. (amount)' },
        { property: 'accountPassword', reg: /[0-9]{4}/, message: '올바르지 않은 계좌 비밀번호입니다. (accountPassword)' },
        { property: 'subscriptionPeriod', reg: /[0-3]{1}/, message: '올바르지 않은 계약 기간입니다. (subscriptionPeriod)' },
        { property: 'amountTransferred', reg: /[0-9]{5,7}/, message: '올바르지 않은 자동이체 금액입니다. (amountTransferred)' },
        { property: 'incomeAmount', reg: /.+/, message: '올바르지 않은 연 소득 금액입니다. (imcomeAmount)' },
        { property: 'numOfChildren', reg: /[0-5]{1}/, message: '0~5명 사이의 자녀 수를 선택해주세요. (numOfChildren)' },
        { property: 'creditRating', reg: /[1-9]{1}|10/, message: '0~10 사이의 신용 등급을 선택해주세요. (creditRating)' }
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