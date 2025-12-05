// DOM 요소 가져오기
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-btn");
const clubCards = document.querySelectorAll(".club-card");
const modalClubName = document.getElementById("modal-club-name");
const applicationForm = document.getElementById("application-form");

// 1. 모든 동아리 카드 클릭 이벤트
clubCards.forEach((card) => {
    card.addEventListener("click", () => {
        const clubName = card.querySelector("h3").innerText;
        modalClubName.innerText = clubName;
        modal.classList.add("show");
    });
});

// 2. 닫기 버튼
closeBtn.addEventListener("click", () => {
    closeModal();
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// 모달 닫기 및 초기화 함수
function closeModal() {
    modal.classList.remove("show");
    // 에러 스타일 모두 초기화
    const inputs = applicationForm.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        input.classList.remove("input-error");
        input.parentElement.classList.remove("error");
    });
    applicationForm.reset();
}

// 3. [핵심] 커스텀 유효성 검사 (Validation)
applicationForm.addEventListener("submit", (e) => {
    e.preventDefault(); // 새로고침 방지

    const inputs = applicationForm.querySelectorAll("input, textarea");
    let isValid = true;

    // 모든 입력창을 하나씩 검사
    inputs.forEach((input) => {
        const wrapper = input.parentElement; // input을 감싸는 div
        
        if (input.value.trim() === "") {
            // 값이 비었으면 에러 표시
            input.classList.add("input-error"); // 빨간 테두리
            wrapper.classList.add("error");     // 에러 메시지 표시
            isValid = false;
        } else {
            // 값이 있으면 에러 제거
            input.classList.remove("input-error");
            wrapper.classList.remove("error");
        }
    });

    // 하나라도 비었으면 중단
    if (!isValid) return;

    // 성공 시 처리
    const applicantName = document.getElementById("name").value;
    const currentClub = modalClubName.innerText;

    alert(`[${applicantName}]님, [${currentClub}] 가입 신청이 완료되었습니다!`);
    closeModal();
});

// 4. 사용자가 입력하기 시작하면 빨간색 에러 바로 없애주기 (UX 향상)
const inputs = applicationForm.querySelectorAll("input, textarea");
inputs.forEach(input => {
    input.addEventListener("input", () => {
        input.classList.remove("input-error");
        input.parentElement.classList.remove("error");
    });
});