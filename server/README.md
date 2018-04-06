# 2018 KP Fintech Hackathon Server

## index

- `/api`
    - `/sign`
    - `/users`
    - `/products`
    - `/product-managers`
    - `/items`

실패 시 응답은 모두
```json
{
    "success": false,
    "message": "error message"
}
```
로 동일합니다.

## `POST /api/sign`

> 로그인할 때 사용됩니다.

### request

```http
request body
    username: 김길동
    password: Asdf!234
```

### response

```json
{
    "success": true,
    "message": "SUCCESS",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX...",
    "user": {
        "accountAmount": 2000000,
        "_id": "5ac796743db668439895a897",
        "username": "김길동",
        "email": "n0rr7882@gmail.com",
        "accountNumber": "102-250715-476107",
        "createdAt": "2018-04-06T15:47:00.087Z",
        "updatedAt": "2018-04-06T15:47:00.087Z"
    }
}
```

## `GET /api/sign`

> 내 정보를 확인할 때 사용됩니다.

### request

```http
request headers
    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX...
```

### response

```json
{
    "success": true,
    "message": "SUCCESS",
    "user": {
        "accountAmount": 1950000,
        "_id": "5ac75e6bc6c7bc1f93bc9f38",
        "username": "김길동",
        "email": "n0rr7882@gmail.com",
        "accountNumber": "277-763347-571056",
        "createdAt": "2018-04-06T11:47:55.320Z",
        "updatedAt": "2018-04-06T11:48:26.334Z"
    }
}
```

## `POST /api/users`

> 회원가입할 때 사용됩니다.

### request

```http
request body
    username: 김길동
    email: n0rr7882@gmail.com
    password: Asdf!234
```

### response

```json
{
    "success": true,
    "message": "SUCCESS",
    "user": {
        "accountAmount": 2000000,
        "_id": "5ac796743db668439895a897",
        "username": "김길동",
        "email": "n0rr7882@gmail.com",
        "accountNumber": "102-250715-476107",
        "createdAt": "2018-04-06T15:47:00.087Z",
        "updatedAt": "2018-04-06T15:47:00.087Z"
    }
}
```

## `GET /api/users/{user_id}`

> 계정을 단일 조회할 때 사용됩니다.

### request

```http
request params
    user_id: 5ac796743db668439895a897
```

### response

```json
{
    "success": true,
    "message": "SUCCESS",
    "user": {
        "accountAmount": 2000000,
        "_id": "5ac796743db668439895a897",
        "username": "유동호",
        "email": "n0rr7882@gmail.com",
        "accountNumber": "102-250715-476107",
        "createdAt": "2018-04-06T15:47:00.087Z",
        "updatedAt": "2018-04-06T15:47:00.087Z"
    }
}
```

## `POST /api/products`

> 상품을 생성할 때 사용됩니다.

### request

```http
request body
    title: 적금 상품 제목
    description: 적금 상품에 대한 설명
    profitRate: 0.02 // 이자율
```

### response

```json
{
    "success": true,
    "message": "SUCCESS",
    "product": {
        "_id": "5ac796793db668439895a898",
        "title": "적금 상품 제목",
        "description": "적금 상품에 대한 설명",
        "profitRate": 0.02,
        "createdAt": "2018-04-06T15:47:05.546Z",
        "updatedAt": "2018-04-06T15:47:05.546Z"
    }
}
```

## `GET /api/products/{product_id}`

> 상품을 조회할 때 사용됩니다.

### request

```http
request params
    product_id: 5ac796793db668439895a898
```

### response

```json
{
    "success": true,
    "message": "SUCCESS",
    "product": {
        "_id": "5ac796793db668439895a898",
        "title": "적금 상품 제목",
        "description": "적금 상품에 대한 설명",
        "profitRate": 0.02,
        "createdAt": "2018-04-06T15:47:05.546Z",
        "updatedAt": "2018-04-06T15:47:05.546Z"
    }
}
```

## `GET /api/products`

> 상품 리스트를 조회할 때 사용됩니다.

### request

```http
request queries
    limit: 0 // 요청할 개수
    offset: 0 // 제외할 개수 (오프셋)
```

### response

```json
{
    "success": true,
    "message": "SUCCESS",
    "products": [
        {
            "_id": "5ac796793db668439895a898",
            "title": "적금 상품 제목",
            "description": "적금 상품에 대한 설명",
            "profitRate": 0.02,
            "createdAt": "2018-04-06T15:47:05.546Z",
            "updatedAt": "2018-04-06T15:47:05.546Z"
        }
    ]
}
```

## `POST /api/product-managers/{product_id}`

> 어떤 계정이 상품에 가입할 때 사용됩니다.

### request

```http
request headers
    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX...
request body
    accountPassword: 1234 // 신규 계좌 암호
    subscriptionPeriod: 3 // 계약 연(年)수
    amountTransferred: 300000 // 월 자동이체 금액
    incomeAmount: 2000000 // 나의 연봉
    numOfChildren: 1 // 부양 자녀수
    creditRating: 4 // 신용등급
    amount: 500000 // 계좌 생성과 동시에 입금할 금액 수
```

### response

```json
{
    "success": true,
    "message": "SUCCESS",
    "manager": {
        "amount": 50000,
        "_id": "5ac7980d3db668439895a89d",
        "accountPassword": "1234",
        "subscriptionPeriod": 3,
        "amountTransferred": 30000,
        "incomeAmount": 20000000,
        "numOfChildren": 0,
        "creditRating": 4,
        "user": "5ac796743db668439895a897",
        "product": "5ac796793db668439895a898",
        "createdAt": "2018-04-06T15:53:49.835Z",
        "updatedAt": "2018-04-06T15:53:49.835Z",
        "targetAmount": 5400000
    }
}
```

## `GET /api/product-managers/{manager_id}`

> 계약 정보를 조회할 때 사용됩니다.

### request

```http
request params
    manager_id: 5ac7980d3db668439895a89d
```

### response

```json
{
    "success": true,
    "message": "SUCCESS",
    "manager": {
        "amount": 50000,
        "_id": "5ac7980d3db668439895a89d",
        "accountPassword": "1234",
        "subscriptionPeriod": 3,
        "amountTransferred": 30000,
        "incomeAmount": 20000000,
        "numOfChildren": 0,
        "creditRating": 4,
        "user": "5ac796743db668439895a897",
        "product": "5ac796793db668439895a898",
        "createdAt": "2018-04-06T15:53:49.835Z",
        "updatedAt": "2018-04-06T15:53:49.835Z",
        "targetAmount": 5400000
    }
}
```

## `GET /api/product-managers`

> 계약 정보 리스트를 조회할 때 사용됩니다.

### request

```http
request queries
    limit: 10 // 요청할 개수
    offset: 0 // 제외할 개수 (오프셋)
    user: 5ac796743db668439895a897 // 해당 유저가 계약한 정보만
```

### response

```json
{
    "success": true,
    "message": "SUCCESS",
    "managers": [
        {
            "amount": 50000,
            "_id": "5ac7980d3db668439895a89d",
            "accountPassword": "1234",
            "subscriptionPeriod": 3,
            "amountTransferred": 30000,
            "incomeAmount": 20000000,
            "numOfChildren": 0,
            "creditRating": 4,
            "user": "5ac796743db668439895a897",
            "product": "5ac796793db668439895a898",
            "createdAt": "2018-04-06T15:53:49.835Z",
            "updatedAt": "2018-04-06T15:53:49.835Z",
            "targetAmount": 5400000
        }
    ]
}
```

## `PUT /api/product-managers/next-month/{manager_id}`

> 시연 중 다음 달 분기로 넘어가는 것을 표현할 때 사용됩니다.

### request

```http
request headers
    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX...
request params
    manager_id: 5ac7980d3db668439895a89d
```

### response

```json
{
    "success": true,
    "message": "SUCCESS",
    "manager": {
        "amount": 50000,
        "_id": "5ac7980d3db668439895a89d",
        "accountPassword": "1234",
        "subscriptionPeriod": 3,
        "amountTransferred": 30000,
        "incomeAmount": 20000000,
        "numOfChildren": 0,
        "creditRating": 4,
        "user": "5ac796743db668439895a897",
        "product": "5ac796793db668439895a898",
        "createdAt": "2018-04-06T15:53:49.835Z",
        "updatedAt": "2018-04-06T15:53:49.835Z",
        "targetAmount": 5400000
    }
}
```

## `PUT /api/product-managers/salary/{manager_id}`

> 시연 중 월급을 받는 것을 표현할 때 사용됩니다.

### request

```http
request headers
    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX...
request params
    manager_id: 5ac7980d3db668439895a89d
```

### response

```json
{
    "success": true,
    "message": "SUCCESS",
    "manager": {
        "amount": 50000,
        "_id": "5ac7980d3db668439895a89d",
        "accountPassword": "1234",
        "subscriptionPeriod": 3,
        "amountTransferred": 30000,
        "incomeAmount": 20000000,
        "numOfChildren": 0,
        "creditRating": 4,
        "user": "5ac796743db668439895a897",
        "product": "5ac796793db668439895a898",
        "createdAt": "2018-04-06T15:53:49.835Z",
        "updatedAt": "2018-04-06T15:53:49.835Z",
        "targetAmount": 5400000
    },
    "user": {
        "accountAmount": 2000000,
        "_id": "5ac796743db668439895a897",
        "username": "김길동",
        "email": "n0rr7882@gmail.com",
        "accountNumber": "102-250715-476107",
        "createdAt": "2018-04-06T15:47:00.087Z",
        "updatedAt": "2018-04-06T15:47:00.087Z"
    }
}
```

## `PUT /api/product-managers/withdraw/{manager_id}`

> 시연 중 자동 계좌이체가 되는 것을 표현할 때 사용합니다.

### request

```http
request headers
    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX...
request params
    manager_id: 5ac7980d3db668439895a89d
```

### response

```json
{
    "success": true,
    "message": "SUCCESS",
    "manager": {
        "amount": 50000,
        "_id": "5ac7980d3db668439895a89d",
        "accountPassword": "1234",
        "subscriptionPeriod": 3,
        "amountTransferred": 30000,
        "incomeAmount": 20000000,
        "numOfChildren": 0,
        "creditRating": 4,
        "user": "5ac796743db668439895a897",
        "product": "5ac796793db668439895a898",
        "createdAt": "2018-04-06T15:53:49.835Z",
        "updatedAt": "2018-04-06T15:53:49.835Z",
        "targetAmount": 5400000
    },
    "user": {
        "accountAmount": 2000000,
        "_id": "5ac796743db668439895a897",
        "username": "김길동",
        "email": "n0rr7882@gmail.com",
        "accountNumber": "102-250715-476107",
        "createdAt": "2018-04-06T15:47:00.087Z",
        "updatedAt": "2018-04-06T15:47:00.087Z"
    }
}
```

## `/api/items/{item_idx}`

> 아이템 한개를 가져올 때 사용됩니다.

### request

```http
request params
    item_idx: 14 // idx
```

### response

```json
{
    "success": true,
    "message": "SUCCESS",
    "item": {
        "idx": 14,
        "title": "유기농인증 웰빙알로에농장 산지직송 알로에 생잎 3kg",
        "price": 14900
    }
}
```

- **이미지 경로는 `/api/resources/images/{idx}.png`입니다.**

## `/api/items`

> 아이템 리스트를 가져올 때 사용됩니다.

### request

```http
request queries
    price: 2 // n만원대의 아이템만
```

### response

```json
{
    "success": true,
    "message": "SUCCESS",
    "items": [
        {
            "idx": 16,
            "title": "보령만세 쌀10kg",
            "price": 23400
        },
        {
            "idx": 17,
            "title": "나주 신고배 선물세트7.5kg",
            "price": 22900
        }
    ]
}
```

- **이미지 경로는 `/api/resources/images/{idx}.png`입니다.**