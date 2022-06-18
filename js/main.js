
// Tạo hiệu ứng skew header khi scroll-->


window.onscroll = function () {


    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        //    đổi kích thước
        document.getElementById("header-logo").style.height = "50px";
        document.querySelector('.myNavBar').classList.toggle('addFixedPosition');

    } else {
        document.getElementById("header-logo").style.height = "96px";

    }
}





