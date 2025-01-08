function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Kiểm tra tên đăng nhập và mật khẩu
  if (username === "Nakroth" && password === "Nakroth") {
    // Tên đăng nhập và mật khẩu đúng, cho phép truy cập vào trang web
    window.location.href = "nakroth.html";
  } else {
    // Tên đăng nhập hoặc mật khẩu sai, hiển thị thông báo lỗi hoặc thực hiện hành động khác
    alert("Tên đăng nhập hoặc mật khẩu không đúng!");
  }
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    // Nếu phím Enter được nhấn, di chuyển đến trường nhập mật khẩu
    event.preventDefault(); // Ngăn chặn hành động mặc định của phím Enter (submit form)
    document.getElementById("password").focus(); // Di chuyển trỏ đến trường nhập mật khẩu
  }
}
// Ngăn chặn sự kiện chuột phải
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

// Ngăn chặn sự kiện chuột trái kéo thả để chọn văn bản
document.addEventListener("selectstart", function (event) {
  event.preventDefault();
});
document.addEventListener('keydown', function(event) {
if (event.ctrlKey && event.keyCode === 85) {
event.preventDefault();
}
});
$(window).on('keydown', function(event) {
if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
  return false;
}
});