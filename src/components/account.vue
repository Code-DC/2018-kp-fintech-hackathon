<template>
  <div class="main">
    <div class="header">
      <ul>
        <img src="../assets/mainLogo.png" alt="" id="logo">
        <li><span>금융상품</span></li>
        <li>예금</li>
        <li>보험</li>
        <li>카드</li>
        <li>적금</li>
        <a href="" id="af">보안센터</a><a href="">고객센터</a>
      </ul>
    </div>
    <div id="bar"></div>
    <div id="bar2"></div>
    <div class="list-container">
      <table>
        <span id="title">보유 계좌</span>
        <tr class="fborder">
          <td id="ttitle-color">예금명</td>
          <td>
            <select name="" id="">
              <option value="">이동현 적금</option>
            </select>
          </td>
        </tr>
        <tr>
          <td id="ttitle-color">신규일</td>
          <td>2014.05.30</td>
        </tr>
        <tr>
          <td id="ttitle-color">만기일</td>
          <td>2019.10.25</td>
        </tr>
        <tr>
          <td id="ttitle-color">잔액</td>
          <td>5,000,000 원</td>
        </tr>
      </table>
      <div class="installment_savings-info">
        <div class="img-container">
          <img src="../assets/logo.png" alt="">
        </div>
        <div class="detail-info">
          <ul>
            <li>
              최종 목표 금액까지 45,000,000원 남았습니다.
            </li>
            <li>
              적금 만기일까지 1826일 남았습니다.
            </li>
          </ul>
        </div>
      </div>
      <table>
        <span id="title">입금 내역</span>
        <tr class="fborder2">
          <td id="ttitle-color">일시</td>
          <td id="ttitle-color">출금계좌주</td>
          <td id="ttitle-color">출금계좌</td>
          <td id="ttitle-color">금액(원)</td>
        </tr>
        <tr class="fborder2">
          <td>2018.04.06</td>
          <td>이동현</td>
          <td>우체국은행 110-419-387528</td>
          <td>500,000</td>
        </tr>
      </table>
      <table>
        <span id="title">계좌 상세 정보</span>
        <tr class="fborder">
          <td id="ttitle-color">신규일</td>
          <td>2014.05.30</td>
        </tr>
        <tr>
          <td id="ttitle-color">만기일</td>
          <td>2019.10.25</td>
        </tr>
        <tr>
          <td id="ttitle-color">가입기간</td>
          <td>2년</td>
        </tr>
        <tr>
          <td id="ttitle-color">이자지급</td>
          <td>만기일시지급</td>
        </tr>
        <tr>
          <td id="ttitle-color">이율</td>
          <td>2%</td>
        </tr>
        <tr>
          <td id="ttitle-color">만기일 지급상품</td>
          <td>---</td>
        </tr>
      </table>
      <table>
        <span id="title">상품수령내역</span>
        <tr class="fborder2">
          <td id="ttitle-color">일시</td>
          <td id="ttitle-color" style="width: 605px;">수령한 상품명</td>
        </tr>
        <tr class="fborder2">
          <td>2018.04.06</td>
          <td>삼성전자 포터블 SSD 500GB</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style>
  select, option{
    padding: 4px;
  }
  table{
    margin-bottom: 24px;
  }
  th{
    border: solid 1px silver;
    padding: 12px 8px;
    border-right: none;
    border-bottom: none;
    font-weight: 300;
  }
  th:first-child{
    border: solid 1px silver;
    padding: 12px 12px;
    border-left: none;
    border-right: none;
    border-bottom: none;
  }
  td{
    border-bottom: solid 1px silver;
    padding: 12px 8px;
    width: 600px;
  }
  td:first-child{
    border-right: solid 1px silver;
    padding: 12px 32px;
    width: 200px;
  }
  .header > ul{
    display: inline;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    list-style: none;
  }
  li{
    margin-top: 16px;
    padding: 0 18px;
    font-size: 1.4em;
  }
  a{
    border: solid 1px;
    font-size: 0.8em;
    padding: 2px 6px;
    margin-top: 16px;
    text-decoration: none;
    color: #666;
  }
  a:hover{
    text-decoration: underline;
  }
  input{
    font-size: 14px;
    text-align: right;
  }
  #logo{
    margin-right: 86px;
  }
  #af{
    margin-left: 112px;
  }
  .container{
    display: inline;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    list-style: none;
  }
  .cmain{
    width: 968px;
    margin-top: 24px;
  }
  #bar{
    margin-top: 12px;
    width: 100%;
    height: 30px;
    background: #f5712a;
  }
  #bar2{
    width: 100%;
    height: 12px;
    background: #fabd9c;
  }
  #title{
    font-size: 1.5em;
    float: left;
    margin-top: 26px;
  }
  #check{
    margin-left: 12px;
  }
  #checktitle{
    font-size: 12px;
  }
  #agree-title{
    font-size: 1.5em;
  }
  #agree-check{
    margin: 24px 0px;
    font-size: 1em;
  }
  #next{
    padding: 8px 56px;
    margin: 24px 0;
  }
  #fchild{
    border-right: solid 1px silver;
    padding: 12px 32px;
    border-left: solid 1px silver;
  }
  .list-container{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .fborder > *{
    border-top: solid 1px orange;
  }
  .installment_savings-info{
    display: flex;
    flex-direction: row;
  }
  .img-container{
    width: 300px;
    height: 200px;
    margin: 0;
  }
  .detail-info{
    display: inline;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    list-style: none;
  }
  #ttitle-color{
    background: #e1e1e1;
    text-align: center;
  }
  .fborder2 > * {
    width: 200px;
    text-align: center;
  }
</style>

