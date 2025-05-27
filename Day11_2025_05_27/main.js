const titlez = "Hải Đăng top 1 server Trái Đất";
document.title=titlez;
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2")
if (h1) {
    h1.innerText=titlez;
}
if (h2) {
    h2.innerText=titlez;
}
const h3a = document.querySelectorAll("a.dt-text-black-mine");
h3a.forEach(function(newh3a){
    newh3a.innerText="Hải Đăng top 1 server Trái Đất";
});