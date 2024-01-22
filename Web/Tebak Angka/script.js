document.addEventListener("DOMContentLoaded", function() {
    // Membaca tema yang tersimpan di local storage saat halaman dimuat
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }

    startGame();
});

let random_number, attempts;

function startGame() {
    random_number = generateRandomNumber();
    attempts = 0;
    setMessage("Masukkan tebakan (1-100):");
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getGuessInput() {
    return parseInt(document.getElementById("guessInput").value);
}

function setMessage(message) {
    document.getElementById("message").innerText = message;
}

function checkGuess() {
    const userGuess = getGuessInput();
    attempts++;

    if (userGuess < random_number) {
        setMessage("Terlalu rendah");
    } else if (userGuess > random_number) {
        setMessage("Terlalu tinggi");
    } else {
        setMessage(`Selamat! Anda benar. Anda menebak dalam ${attempts} percobaan.`);
        setTimeout(startGame, 7500);  // Menunggu 7.5 detik sebelum memulai permainan baru
    }
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Menyimpan tema yang dipilih ke local storage
    const currentTheme = body.classList.contains("dark-mode") ? "dark-mode" : "";
    localStorage.setItem("theme", currentTheme);
}
