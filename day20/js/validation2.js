// 입력값 검증(유효성 체크)
let id = document.getElementById('user-id');
let pw1 = document.getElementById('user-pw1');
let pw2 = document.getElementById('user-pw2');

let pw_pat1 = /[0-9A-Za-z]/;
let pw_pat2 = /[~!@#$%^&*]/;

id.onchange = checkId; // checkId 함수 호출

// 이벤트 처리기 함수를 사용했을 경우
// id.addEventListener('change', checkId);

pw1.onchange = checkPw;
pw2.onchange = comparePw;

function checkId(){
    if(id.value.length < 4 || id.value.length > 15){
        alert("4~15자리의 영문과 숫자로 입력해 주세요");
        id.select(); // 선택 범위 지정
    }
}

function checkPw(){
    if(pw1.value.length < 8){
        alert("비밀번호는 8자리 이상이어야 합니다.");
        pw1.value = ""; // 기존 문자 지우기
        pw1.focus(); // 커서가 위치함
    }
}

function comparePw(){
    if(pw1.value != pw2.value){
        alert("비밀번호가 일치하지 않습니다.");
        pw2.value = "";
        pw2.focus();
    }
}