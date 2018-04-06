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
        <span id="title">적금상품가입</span>
        <tr class="fborder">
          <td>출금계좌번호</td>
          <td>
            <select name="" id="">
              <option value="">110-419-387528[신한 주거래 통장]</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>통장비밀번호</td>
          <td>
            <input type="password" name="" id="">
            <input type="checkbox" name="" id="check">
            <span id="checktitle">비밀번호 표시</span>
            </td>
        </tr>
        <tr>
          <td>이메일번호</td>
          <td><input type="text" name="" id=""></td>
        </tr>
      </table>
      <table>
        <span id="title">상품가입정보</span>
        <tr>
          <th>신규금액</th>
          <th><input type="text" placeholder="1천원 이상~"> 원</th>
        </tr>
        <tr>
          <th>신규계좌비밀번호</th>
          <th><input type="password" placeholder="비밀번호 4자리를 입력하세요."></th>
        </tr>
        <tr>
          <th>비밀번호확인</th>
          <th><input type="password" placeholder="비밀번호 4자리를 입력하세요"></th>
        </tr>
        <tr>
          <th>가입기간</th>
          <th>
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option> 
            </select> 년
          </th>
        </tr>
        <tr>
          <th>적립방법</th>
          <th>자동이체</th>
        </tr>
        <tr>
          <th>자동이체계좌 비밀번호</th>
          <th><input type="password" name="" id="" placeholder="비밀번호 4자리를 입력하세요."></th>
        </tr>
        <tr>
          <th>자동이체 금액</th>
          <th><input type="text" name="" id="" placeholder="금액을 입력해 주세요"> 원</th>
        </tr>
        <tr>
          <th>자동이체 지정일</th>
          <th>
            <select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
              <option value="">11</option>
              <option value="">12</option>
              <option value="">13</option>
              <option value="">14</option>
              <option value="">15</option>
              <option value="">16</option>
              <option value="">17</option>
              <option value="">18</option>
              <option value="">19</option>
              <option value="">20</option>
              <option value="">21</option>
              <option value="">22</option>
              <option value="">23</option>
              <option value="">24</option>
              <option value="">25</option>
              <option value="">26</option>
              <option value="">27</option>
              <option value="">28</option>
              <option value="">29</option>
              <option value="">30</option>
              <option value="">31</option>
            </select> 일
          </th>
        </tr>
        <tr>
          <th>자동이체 간격</th>
          <th>1개월</th>
        </tr>
        <tr>
          <th>소득금액</th>
          <th><input type="text" name="" id="" placeholder="소득금액을 입력해주세요."></th>
        </tr>
        <tr>
          <th>결혼 유무</th>
          <th>O<input type="radio" name="marriage" id=""> X<input type="radio" name="marriage" id=""></th>
        </tr>
        <tr>
          <th>부양중인가족</th>
          <th>
            <select name="" id="">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3+">3명 이상</option>
            </select> 명
          </th>
        </tr>
        <tr>
          <th>자녀수</th>
          <th>
            <select name="" id="">
              <option value="1">1</option>
            </select> 명
          </th>
        </tr>
        <tr>
          <th>신용등급</th>
          <th>
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select> 등급
          </th>
        </tr>
      </table>
      <span id="agree-title">개인정보 제공 및 사용에 동의하십니까?</span>
      <span id="agree-check"><input type="checkbox" name="" id=""> 동의합니다.</span>
      <button id="next">다음단계로</button>
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
    padding-right: 410px;
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
    padding-right: 200px;
  }
  td:first-child{
    border-right: solid 1px silver;
    padding: 12px 32px;
  }
  ul{
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
  .list-container{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .fborder > *{
    border-top: solid 1px orange;
  }
</style>

