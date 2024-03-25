// ==================
// Styling for Page
// ==================
document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.querySelectorAll(".toggle-password");
  const password = {
    login: document.getElementById("loginPassword"),
    signup: document.getElementById("signupPassword"),
  };

  togglePassword.forEach((icon) => {
    icon.addEventListener("click", function () {
      // Tentukan formulir mana yang sedang digunakan
      const formType =
        icon.closest("form").id === "loginForm" ? "login" : "signup";

      // Ambil elemen password berdasarkan formulir yang digunakan
      const currentPassword = password[formType];

      // Ubah tipe password
      const type =
        currentPassword.getAttribute("type") === "password"
          ? "text"
          : "password";
      currentPassword.setAttribute("type", type);

      // Ubah sumber gambar (src) berdasarkan tipe password yang baru
      const eyeImgSrc =
        type === "password" ? "img/eye close.svg" : "img/eye.svg";
      icon.setAttribute("src", eyeImgSrc);

      // Memperbaharui ukuran ikon mata
      icon.style.width = "20px"; // Sesuaikan ukuran ikon mata di sini
      icon.style.height = "20px"; // Sesuaikan ukuran ikon mata di sini
    });
  });
});

// ==================
// Form Validation
// ==================

document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir

    const username = document.getElementById("signupUsername").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    // Validasi username
    if (username === "") {
      alert("Username tidak boleh kosong");
      return false; // Validasi gagal
    }

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
      alert("Email tidak valid");
      return false; // Validasi gagal
    }

    // Validasi password
    if (password === "") {
      alert("Password tidak boleh kosong");
      return false; // Validasi gagal
    }

    // Semua validasi berhasil
    alert(
      "Formulir sign up berhasil disubmit:\nUsername: " +
        username +
        "\nEmail: " +
        email +
        "\nPassword: " +
        password
    );
    return true; // Formulir dikirimkan
  });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir

    const loginEmail = document.getElementById("loginEmail").value.trim();
    const loginPassword = document.getElementById("loginPassword").value.trim();

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (loginEmail === "" || !emailRegex.test(loginEmail)) {
      alert("Email tidak valid");
      return false; // Validasi gagal
    }

    // Validasi password
    if (loginPassword === "") {
      alert("Password tidak boleh kosong");
      return false; // Validasi gagal
    }

    // Semua validasi berhasil
    alert(
      "Formulir login berhasil disubmit:\nEmail: " +
        loginEmail +
        "\nPassword: " +
        loginPassword
    );
    return true; // Formulir dikirimkan
  });
});
