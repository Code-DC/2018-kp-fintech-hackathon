<template>
  <div class="main">
    <div class="header">
      <ul>
        <img src="../assets/mainLogo.png" alt="" id="logo">
        <li><span>금융상품</span></li>
        <li>예금</li>
        <li>적금</li>
        <li>보험</li>
        <li>카드</li>
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
              <option value="">(인터넷/스마트)2040+α자유적금</option>
            </select>
          </td>
        </tr>
        <tr>
          <td id="ttitle-color">신규일</td>
          <td>2017.07.15</td>
        </tr>
        <tr>
          <td id="ttitle-color">만기일</td>
          <td>2018.07.15</td>
        </tr>
        <tr>
          <td id="ttitle-color">잔액</td>
          <td>8,076,000 원</td>
        </tr>
      </table>
      <div id="bar3">
        <div id="progress"></div>
        <span style="float: left;">10,36,8000 <p>2017.07.15</p></span>
        <span style="float: right;">10,36,8000 <p>2018.07.15</p></span>
      </div>
      <div>
        <button id="getbox" >럭키박스 받기</button>
      </div>
      <div class="installment_savings-info">
        <div class="img-container">
          <img src="../assets/ES1007236_reprsnt_image_20170707053445941_l.png" alt="" width="200px;">
        </div>
        <div class="detail-info">
          <ul>
            <li style="color: #1abc9c">
              최종 목표 금액까지 2,292,000원 남았습니다.
            </li>
            <li style="color: #808080">
              적금 만기일까지 100일 남았습니다.
            </li>
            <li style="color: orange">
              ※ 한달 목표 금액은 864,000원 입니다.
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
          <td>2018.3.25</td>
          <td>이동현</td>
          <td>우체국은행 <p>110-419-387528</p></td>
          <td>864,000</td>
        </tr>
        <tr class="fborder2">
          <td>2018.2.25</td>
          <td>이동현</td>
          <td>우체국은행 <p>110-419-387528</p></td>
          <td>864,000</td>
        </tr>
        <tr class="fborder2">
          <td>2018.1.25</td>
          <td>이동현</td>
          <td>우체국은행 <p>110-419-387528</p></td>
          <td>864,000</td>
        </tr>
        <tr class="fborder2">
          <td>2017.12.25</td>
          <td>이동현</td>
          <td>우체국은행 <p>110-419-387528</p></td>
          <td>864,000</td>
        </tr>
        <tr class="fborder2">
          <td>2017.11.25</td>
          <td>이동현</td>
          <td>우체국은행 <p>110-419-387528</p></td>
          <td>864,000</td>
        </tr>
        <tr class="fborder2">
          <td>2017.10.25</td>
          <td>이동현</td>
          <td>우체국은행 <p>110-419-387528</p></td>
          <td>864,000</td>
        </tr>
        <tr class="fborder2">
          <td>2017.09.25</td>
          <td>이동현</td>
          <td>우체국은행 <p>110-419-387528</p></td>
          <td>864,000</td>
        </tr>
        <tr class="fborder2">
          <td>2017.08.25</td>
          <td>이동현</td>
          <td>우체국은행 <p>110-419-387528</p></td>
          <td>864,000</td>
        </tr>
        <tr class="fborder2">
          <td>2017.07.25</td>
          <td>이동현</td>
          <td>우체국은행 <p>110-419-387528</p></td>
          <td>864,000</td>
        </tr>
        <tr class="fborder2">
          <td>2017.07.15</td>
          <td>이동현</td>
          <td>우체국은행 <p>110-419-387528</p></td>
          <td>300,000</td>
        </tr>
      </table>
      <table>
        <span id="title">계좌 상세 정보</span>
        <tr class="fborder">
          <td id="ttitle-color">신규일</td>
          <td>2017.07.15</td>
        </tr>
        <tr>
          <td id="ttitle-color">만기일</td>
          <td>2018.07.15</td>
        </tr>
        <tr>
          <td id="ttitle-color">가입기간</td>
          <td>1년</td>
        </tr>
        <tr>
          <td id="ttitle-color">이자지급</td>
          <td>만기일시지급</td>
        </tr>
        <tr>
          <td id="ttitle-color">이율</td>
          <td>2.3%</td>
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
          <td>2018.03.28</td>
          <td>럭키박스</td>
        </tr>
        <tr class="fborder2">
          <td>2018.02.28</td>
          <td>럭키박스</td>
        </tr>
        <tr class="fborder2">
          <td>2018.01.28</td>
          <td>럭키박스</td>
        </tr>
        <tr class="fborder2">
          <td>2017.12.28</td>
          <td>럭키박스</td>
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
    border-right: solid 1px silver;
    border-left: solid 1px silver;
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
  #bar3{
    width: 53%;
    height: 8px;
    background: silver;
    margin-bottom: 64px;
  }
  #progress{
    width: 76%;
    height: 8px;
    background: green;
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
  #getbox{
    padding: 6px;
  }
  .fborder2 > * {
    width: 200px;
    text-align: center;
  }
</style>

