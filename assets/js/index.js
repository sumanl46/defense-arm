function scrollIntoInnovations() {
	const wrapper = document.getElementById("wrapper");
	const header = document.getElementsByTagName("header")[0].offsetHeight;

	wrapper.scrollTop = document.getElementById("innovationSection").scrollHeight + header;
}
