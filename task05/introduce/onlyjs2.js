const head3 = document.createElement("h3");
head3.textContent = "이건우의 자기소개";
document.body.appendChild(head3);

const line = document.createElement("hr");
document.body.appendChild(line);

const ptag1 = document.createElement("p");
ptag1.textContent = "안녕하세요 저는 소프트웨어학과 2학년 이건우입니다.";
document.body.appendChild(ptag1);

const ptag2 = document.createElement("p");
ptag2.textContent = "저는 웹 개발에 관심이 많으며 HTML, CSS, 그리고 JavaScript를 배우면서 다양한 실습을 진행해 왔습니다.";
document.body.appendChild(ptag2);

const ptag3 = document.createElement("p");
ptag3.textContent = "나를 소개합니다.";
document.body.appendChild(ptag3);

const list = document.createElement("ul");

const element1 = document.createElement('li');
element1.textContent = "저는 경성대학교에서 소프트웨어학과를 전공하며, 학업을 통해 C, 자바, HTML 등 다양한 프로그래밍 언어를 배우고 있습니다.";
list.appendChild(element1);

const element2 = document.createElement('li');
element2.textContent = "저는 학습한 프로그래밍 언어를 실제 실습에 응용하고 문제를 해결하는 데 중점을 두고 있습니다.";
list.appendChild(element2);

const element3 = document.createElement('li');
element3.textContent = "여가 시간에는 주로 컴퓨터 게임을 즐기며 스트레스를 해소합니다. 특히 FPS와 전략 게임을 좋아합니다.";
list.appendChild(element3);

document.body.appendChild(list);