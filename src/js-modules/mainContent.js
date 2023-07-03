var sidebarItems = document.querySelectorAll(".nav__list-link");
var pages = document.querySelectorAll(".page");

sidebarItems.forEach(function (item) {
	item.addEventListener("click", function () {
		var pageId = this.getAttribute("id");
		var activeItem = document.querySelector(".nav__list-link.active");
		var activePage = document.querySelector(".page.active");

		activeItem.classList.remove("active");
		activePage.classList.remove("active");

		this.classList.add("active");

		var targetPage = document.getElementById(pageId + "-content");
		targetPage.classList.add("active");
	});
});
