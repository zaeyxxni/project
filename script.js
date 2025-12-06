// DOM 요소
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-btn");
const modalClubName = document.getElementById("modal-club-name");
const applicationForm = document.getElementById("application-form");

// 1. 모달 열기 (이벤트 위임)
document.addEventListener('click', (e) => {
    const card = e.target.closest('.club-card');
    if (card) {
        const clubName = card.querySelector("h3").innerText;
        modalClubName.innerText = clubName;
        modal.classList.add("show");
    }
});

// 2. 모달 닫기
function closeModal() {
    modal.classList.remove("show");
    const inputs = applicationForm.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        input.classList.remove("input-error");
        input.parentElement.classList.remove("error");
    });
    applicationForm.reset();
}
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

// 3. 폼 유효성 검사
applicationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = applicationForm.querySelectorAll("input, textarea");
    let isValid = true;

    inputs.forEach((input) => {
        const wrapper = input.parentElement;
        if (input.value.trim() === "") {
            input.classList.add("input-error");
            wrapper.classList.add("error");
            isValid = false;
        } else {
            input.classList.remove("input-error");
            wrapper.classList.remove("error");
        }
    });

    if (!isValid) return;

    const applicantName = document.getElementById("name").value;
    const currentClub = modalClubName.innerText;
    alert(`[${applicantName}]님, [${currentClub}] 가입 신청이 완료되었습니다!`);
    closeModal();
});

// 입력 시 에러 제거
const inputs = applicationForm.querySelectorAll("input, textarea");
inputs.forEach(input => {
    input.addEventListener("input", () => {
        input.classList.remove("input-error");
        input.parentElement.classList.remove("error");
    });
});

// 4. 스크롤 등장 효과
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const scrollElements = document.querySelectorAll('.club-card, .section-title');
scrollElements.forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
});