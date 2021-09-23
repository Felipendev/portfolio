feather.replace();
let selectedMenuId = "1";

const menu = document.getElementById("menu");
const boardLeft = document.getElementById("board__left");
const boardRight = document.getElementById("board__right");
const flexBoard = document.getElementById("flex-board");

const imagemVaiEVem = document.getElementById("illustration");

const contentList = [
	{
		img: "logo-twitter-semfd.png"
	},
	{
		img: "logo-instagram.png"
	},
	{
		img: "logo-linkedin.png"
	}
];

document.getElementById("bl__3").scrollIntoView();
document.getElementById("br__1").scrollIntoView();

const icone1 = document.getElementById("1");
icone1.addEventListener("click", changeContent1);

const icone2 = document.getElementById("2");
icone2.addEventListener("click", changeContent2);

const icone3 = document.getElementById("3");
icone3.addEventListener("click", changeContent3);

function changeContent1(event) {

	const target = event.target.id;

	if (target === "menu" || target === "" || target === selectedMenuId) return;

	//seleção do menu
	document.getElementById(target).classList.add("corTwitter");
	document.getElementById(selectedMenuId).classList.remove("corTwitter");
	document.getElementById(selectedMenuId).classList.remove("corInstagram");
	document.getElementById(selectedMenuId).classList.remove("corLinkedin");

	//scroll dos boards
	const offset = selectedMenuId - target;
	boardLeft.scrollTop -= offset * 370;
	boardRight.scrollTop += offset * 370;

	//flex board controll
	flexBoard.classList.add("flex-board-close");
	setTimeout(function () {
		imagemVaiEVem.src = contentList[target - 1].img;
		flexBoard.classList.remove("flex-board-close");
		flexBoard.classList.add("flex-board-open");
		flexBoard.classList.add("bgTwitter");
		flexBoard.classList.remove("bgInstagram");
		flexBoard.classList.remove("bgLinkedin");
	}, 300);

	imagemVaiEVem.classList.add("imagemApagada");
	setTimeout(function () {

		imagemVaiEVem.classList.remove("imagemApagada");
	}, 500);


	selectedMenuId = target;
	console.log(event.target.id)
}

function changeContent2(event) {

	const target = event.target.id;

	if (target === "menu" || target === "" || target === selectedMenuId) return;

	//seleção do menu
	document.getElementById(target).classList.add("corInstagram");
	document.getElementById(selectedMenuId).classList.remove("corTwitter");
	document.getElementById(selectedMenuId).classList.remove("corInstagram");
	document.getElementById(selectedMenuId).classList.remove("corLinkedin");

	//scroll dos boards
	const offset = selectedMenuId - target;
	boardLeft.scrollTop -= offset * 370;
	boardRight.scrollTop += offset * 370;

	//flex board controll
	flexBoard.classList.add("flex-board-close");
	setTimeout(function () {
		imagemVaiEVem.src = contentList[target - 1].img;
		flexBoard.classList.remove("flex-board-close");
		flexBoard.classList.add("flex-board-open");
		flexBoard.classList.add("bgInstagram");
		flexBoard.classList.remove("bgTwitter");
		flexBoard.classList.remove("bgLinkedin");
	}, 300);

	imagemVaiEVem.classList.add("imagemApagada");
	setTimeout(function () {
		imagemVaiEVem.classList.remove("imagemApagada");
	}, 500);

	selectedMenuId = target;
	console.log(event.target.id)
}

function changeContent3(event) {

	const target = event.target.id;

	if (target === "menu" || target === "" || target === selectedMenuId) return;

	//seleção do menu
	document.getElementById(target).classList.add("corLinkedin");
	document.getElementById(selectedMenuId).classList.remove("corTwitter");
	document.getElementById(selectedMenuId).classList.remove("corInstagram");
	document.getElementById(selectedMenuId).classList.remove("corLinkedin");

	//scroll dos boards
	const offset = selectedMenuId - target;
	boardLeft.scrollTop -= offset * 370;
	boardRight.scrollTop += offset * 370;

	//flex board controll
	flexBoard.classList.add("flex-board-close");
	setTimeout(function () {
		imagemVaiEVem.src = contentList[target - 1].img;
		flexBoard.classList.remove("flex-board-close");
		flexBoard.classList.add("flex-board-open");
		flexBoard.classList.add("bgLinkedin");
		flexBoard.classList.remove("bgTwitter");
		flexBoard.classList.remove("bgInstagram");
	}, 300);

	imagemVaiEVem.classList.add("imagemApagada");
	setTimeout(function () {
		imagemVaiEVem.classList.remove("imagemApagada");
	}, 500);

	selectedMenuId = target;
	console.log(event.target.id)
}
