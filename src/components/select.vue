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
    <span id="item-title">상품 선택</span>
    <div class="list-container">
      <span id="item-select">만기일에 받을 최종 상품을 선택해주세요</span>
      <div class="item-list">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <div class="item-list">
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <span id="item-select-last">적금 만기일날 선택하겠습니다.<input type="checkbox" name="" id=""></span>
      <span>* 적금 만기일 선택시 상품이 달라질수 있습니다. 단, 상품의 가격대는 동일합니다.</span>
      <button style="padding: 10px 24px; margin: 12px 0;">적금계좌개설하기</button>
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
  #item-select{
    left: 0;
    font-size: 24px;
  }
  #item-title{
    margin-left: 286px;
    font-size: 32px;
  }
  #item-select-last{
    font-size: 18px;
    margin: 12px 0;
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
  .item-list{
    display: flex;
    flex-direction: row;
    margin-top: 32px;
  }
  .item{
    width: 300px;
    height: 300px;
    border: solid 1px silver;
    margin: 0 12px;
  }
</style>

