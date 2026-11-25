// =========================================================================
// 1. DATA 10 SOAL REKAYASA PERANGKAT LUNAK (MASING-MASING 6 PILIHAN A-F)
// =========================================================================
const quizData = [
  {
    category: "Konsep Rekayasa Perangkat Lunak",
    question: "Apa tujuan utama penerapan Rekayasa Perangkat Lunak (RPL) dalam proses pengembangan sebuah sistem?",
    options: [
      "Membuat program sebanyak mungkin dalam waktu singkat.",
      "Mengembangkan perangkat lunak secara sistematis, terstruktur, dan terukur agar memenuhi kebutuhan pengguna.",
      "Menghilangkan seluruh tahapan pengujian agar pengembangan lebih cepat.",
      "Mengutamakan desain tampilan dibandingkan fungsi sistem.",
      "Mengurangi keterlibatan pengguna selama pengembangan sistem.",
      "Membuat perangkat lunak tanpa dokumentasi teknis."
    ],
    correctIndex: 1, // B
    explanation: "Rekayasa Perangkat Lunak bertujuan menerapkan pendekatan sistematis, terstruktur, dan terukur dalam pengembangan perangkat lunak. Dengan demikian, perangkat lunak yang dihasilkan diharapkan sesuai kebutuhan, berkualitas, dan mudah dipelihara."
  },
  {
    category: "Identifikasi Aktor",
    question: "Dalam pemodelan sistem menggunakan UML, apa yang dimaksud dengan aktor (actor) pada Use Case Diagram?",
    options: [
      "Bagian kode program yang menjalankan proses pengolahan data.",
      "Database yang menyimpan seluruh informasi sistem.",
      "Peran pihak eksternal yang berinteraksi dengan sistem untuk mencapai suatu tujuan.",
      "Tampilan halaman utama aplikasi yang digunakan pengguna.",
      "Komponen internal yang mengatur hubungan antartabel.",
      "Dokumen yang menjelaskan seluruh kebutuhan perangkat lunak."
    ],
    correctIndex: 2, // C
    explanation: "Aktor merupakan peran yang berinteraksi dengan sistem dari luar batas sistem. Aktor dapat berupa manusia, organisasi, maupun sistem eksternal lainnya. Contohnya adalah Admin, Mahasiswa, Dosen, dan Petugas."
  },
  {
    category: "Use Case Diagram",
    question: "Apa fungsi utama Use Case Diagram dalam proses pemodelan perangkat lunak?",
    options: [
      "Menggambarkan struktur tabel dan hubungan antarentitas database.",
      "Menjelaskan urutan instruksi kode program secara terperinci.",
      "Menggambarkan struktur fisik perangkat keras komputer.",
      "Memvisualisasikan fungsi-fungsi sistem beserta interaksi antara aktor dan sistem.",
      "Menggambarkan tampilan antarmuka aplikasi secara visual.",
      "Menjelaskan aliran data di dalam jaringan komputer."
    ],
    correctIndex: 3, // D
    explanation: "Use Case Diagram digunakan untuk menggambarkan layanan atau fungsi yang disediakan sistem serta interaksi aktor dengan fungsi tersebut. Diagram ini membantu menentukan ruang lingkup dan kebutuhan fungsional sistem."
  },
  {
    category: "Use Case Specification",
    question: "Setelah membuat Use Case Diagram, seorang pengembang perlu menjelaskan setiap fungsi sistem secara lebih terperinci. Dokumen yang tepat digunakan untuk menjelaskan alur interaksi tersebut adalah...",
    options: [
      "Use Case Specification.",
      "Class Diagram.",
      "Entity Relationship Diagram.",
      "Deployment Diagram.",
      "Component Diagram.",
      "Flowchart Database."
    ],
    correctIndex: 0, // A
    explanation: "Use Case Specification merupakan dokumentasi terperinci dari sebuah use case. Isinya dapat mencakup nama use case, aktor, prasyarat (precondition), pemicu (trigger), alur utama (main flow), alur alternatif (alternative flow), dan kondisi akhir (postcondition)."
  },
  {
    category: "Activity Diagram",
    question: "Sebuah tim pengembang ingin menggambarkan urutan aktivitas dalam proses pemesanan lapangan badminton, mulai dari memilih jadwal hingga pesanan berhasil dibuat. Diagram UML yang paling tepat digunakan adalah...",
    options: [
      "Class Diagram.",
      "Use Case Diagram.",
      "Sequence Diagram.",
      "Deployment Diagram.",
      "Activity Diagram.",
      "Component Diagram."
    ],
    correctIndex: 4, // E
    explanation: "Activity Diagram digunakan untuk menggambarkan alur aktivitas atau workflow dalam suatu proses. Diagram ini dapat menunjukkan aktivitas, percabangan keputusan, penggabungan alur, serta kondisi awal dan akhir proses."
  },
  {
    category: "Simbol Activity Diagram",
    question: "Dalam Activity Diagram, simbol berbentuk belah ketupat (diamond) umumnya digunakan untuk menggambarkan...",
    options: [
      "Aktivitas yang sedang dilakukan oleh sistem.",
      "Titik awal dimulainya proses.",
      "Percabangan keputusan berdasarkan kondisi tertentu.",
      "Titik akhir seluruh aktivitas.",
      "Hubungan antara aktor dan sistem.",
      "Objek yang menyimpan data sementara."
    ],
    correctIndex: 2, // C
    explanation: "Simbol belah ketupat menunjukkan decision atau percabangan. Sistem akan menentukan jalur aktivitas berikutnya berdasarkan kondisi yang diperiksa, misalnya apakah pembayaran berhasil atau gagal."
  },
  {
    category: "Class Diagram",
    question: "Dalam Class Diagram, bagian manakah yang digunakan untuk menunjukkan karakteristik (data) dan perilaku (fungsi) yang dimiliki oleh sebuah class?",
    options: [
      "Actor dan Use Case.",
      "Activity dan Decision.",
      "Lifeline dan Message.",
      "Node dan Component.",
      "Precondition dan Postcondition.",
      "Attribute dan Method/Operation."
    ],
    correctIndex: 5, // F
    explanation: "Class Diagram menggambarkan struktur statis sistem. Setiap class umumnya memiliki attribute untuk menyimpan karakteristik atau data, serta method/operation untuk menggambarkan perilaku atau fungsi yang dapat dilakukan class tersebut."
  },
  {
    category: "Relasi Antar-Class",
    question: "Dalam Class Diagram, sebuah class Mahasiswa memiliki hubungan dengan class KRS, karena seorang mahasiswa dapat memiliki data KRS. Hubungan yang menggambarkan keterkaitan antara kedua class tersebut secara umum disebut...",
    options: [
      "Association.",
      "Decision.",
      "Generalization.",
      "Message.",
      "Activity.",
      "Lifeline."
    ],
    correctIndex: 0, // A
    explanation: "Association merupakan hubungan struktural yang menunjukkan keterkaitan antara dua atau lebih class. Hubungan ini dapat dilengkapi multiplicity untuk menjelaskan jumlah objek yang terlibat, misalnya satu mahasiswa dapat memiliki beberapa data KRS."
  },
  {
    category: "Sequence Diagram",
    question: "Seorang pengembang ingin menggambarkan urutan komunikasi antara Admin, halaman aplikasi, dan database ketika Admin melakukan proses login. Diagram UML yang paling tepat digunakan adalah...",
    options: [
      "Activity Diagram.",
      "Sequence Diagram.",
      "Class Diagram.",
      "Use Case Diagram.",
      "Deployment Diagram.",
      "Package Diagram."
    ],
    correctIndex: 1, // B
    explanation: "Sequence Diagram digunakan untuk menggambarkan interaksi atau komunikasi antaraktor dan objek berdasarkan urutan waktu. Contohnya adalah proses pengiriman data login, validasi oleh sistem, dan respons dari database."
  },
  {
    category: "Urutan Pesan pada Sequence Diagram",
    question: "Dalam Sequence Diagram, bagaimana urutan pesan (message) dibaca untuk memahami proses interaksi antarobjek?",
    options: [
      "Dari kanan ke kiri berdasarkan posisi objek.",
      "Dari bawah ke atas berdasarkan urutan objek.",
      "Berdasarkan ukuran kotak objek yang digunakan.",
      "Dari atas ke bawah berdasarkan urutan waktu terjadinya interaksi.",
      "Berdasarkan warna garis komunikasi.",
      "Secara acak sesuai banyaknya objek dalam diagram."
    ],
    correctIndex: 3, // D
    explanation: "Sequence Diagram memiliki sumbu waktu vertikal. Interaksi dibaca dari atas ke bawah sehingga pesan yang berada lebih atas terjadi lebih dahulu dibandingkan pesan yang berada di bawahnya."
  }
];

// =========================================================================
// 2. STATE APLIKASI
// =========================================================================
let userName = "";
let userNim = "";
let currentQuestionIndex = 0;
let totalWrongAnswers = 0;
let disabledOptions = new Set(); // Menyimpan indeks jawaban salah yang sudah diklik pada soal aktif

// =========================================================================
// 3. REFERENSI ELEMEN DOM
// =========================================================================
const loginScreen = document.getElementById("login-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const loginForm = document.getElementById("login-form");
const inputNama = document.getElementById("input-nama");
const inputNim = document.getElementById("input-nim");
const loginError = document.getElementById("login-error");

const identityDropdown = document.getElementById("identity-dropdown");
const displayNama = document.getElementById("display-nama");
const displayNim = document.getElementById("display-nim");
const wrongCounterBadge = document.getElementById("wrong-counter-badge");
const currentQuestionNum = document.getElementById("current-question-num");
const progressTrack = document.getElementById("progress-track");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const questionCategory = document.getElementById("question-category");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const feedbackModal = document.getElementById("feedback-modal");
const modalHeader = document.getElementById("modal-header");
const modalIcon = document.getElementById("modal-icon");
const modalTitle = document.getElementById("modal-title");
const modalSubtitle = document.getElementById("modal-subtitle");
const modalBodyText = document.getElementById("modal-body-text");
const modalActionBtn = document.getElementById("modal-action-btn");
const modalBtnText = document.getElementById("modal-btn-text");
const modalBtnIcon = document.getElementById("modal-btn-icon");

const resultTitle = document.getElementById("result-title");
const resultNama = document.getElementById("result-nama");
const resultNim = document.getElementById("result-nim");
const resultWrongCount = document.getElementById("result-wrong-count");
const resultFeedbackBox = document.getElementById("result-feedback-box");
const btnRestart = document.getElementById("btn-restart");

// Huruf label untuk 6 pilihan jawaban
const optionLetters = ["A", "B", "C", "D", "E", "F"];

// =========================================================================
// 4. EVENT LISTENERS & FUNGSI UTAMA
// =========================================================================

// Menangani form login saat tombol "Masuk" ditekan
loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const namaVal = inputNama.value.trim();
  const nimVal = inputNim.value.trim();

  if (!namaVal || !nimVal) {
    loginError.classList.remove("hidden");
    inputNama.setAttribute("aria-invalid", String(!namaVal));
    inputNim.setAttribute("aria-invalid", String(!nimVal));
    loginScreen.classList.remove("animate-shake");
    void loginScreen.offsetWidth; // Trigger reflow untuk ulang animasi
    loginScreen.classList.add("animate-shake");
    (!namaVal ? inputNama : inputNim).focus();
    return;
  }

  // Simpan data peserta kuis & reset state kuis
  loginError.classList.add("hidden");
  inputNama.removeAttribute("aria-invalid");
  inputNim.removeAttribute("aria-invalid");
  userName = namaVal;
  userNim = nimVal;
  currentQuestionIndex = 0;
  totalWrongAnswers = 0;

  // Update header informasi peserta kuis (bukan header identitas mahasiswa)
  displayNama.textContent = userName;
  displayNim.textContent = `NIM: ${userNim}`;
  wrongCounterBadge.textContent = totalWrongAnswers;

  // Pastikan dropdown identitas mulai dalam keadaan tertutup agar soal langsung terlihat
  if (identityDropdown) {
    identityDropdown.open = false;
  }

  // Pindah tampilan dari Login ke Kuis
  loginScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  renderQuestion();
  window.scrollTo(0, 0);
  questionText.focus();
});

// Menahan fokus keyboard di dalam modal & mendukung tutup dengan tombol Escape
document.addEventListener("keydown", (e) => {
  if (feedbackModal.classList.contains("hidden")) return;

  if (e.key === "Escape") {
    e.preventDefault();
    modalActionBtn.click();
  } else if (e.key === "Tab") {
    // Modal hanya memiliki satu elemen interaktif, kunci fokus agar tidak bocor ke belakang
    e.preventDefault();
    modalActionBtn.focus();
  }
});

// Menampilkan soal dan 6 pilihan jawaban ke layar
function renderQuestion() {
  disabledOptions.clear();
  const currentData = quizData[currentQuestionIndex];

  // Update indikator nomor soal & progress bar
  currentQuestionNum.textContent = currentQuestionIndex + 1;
  const progressPercent = Math.round(((currentQuestionIndex + 1) / quizData.length) * 100);
  progressBar.style.width = `${progressPercent}%`;
  progressText.textContent = `${progressPercent}%`;
  progressTrack.setAttribute("aria-valuenow", String(progressPercent));

  // Kategori / topik soal (konsisten ungu sebagai penanda topik akademis)
  questionCategory.textContent = currentData.category;

  // Tampilkan teks pertanyaan
  questionText.textContent = currentData.question;

  // Render 6 tombol pilihan jawaban
  optionsContainer.innerHTML = "";
  currentData.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.id = `option-btn-${index}`;
    button.className = "option";

    // Badge huruf (A - F)
    const badge = document.createElement("span");
    badge.className = "option-badge";
    badge.textContent = optionLetters[index];

    // Teks opsi
    const textSpan = document.createElement("span");
    textSpan.className = "option-text";
    textSpan.textContent = optionText;

    button.appendChild(badge);
    button.appendChild(textSpan);

    button.addEventListener("click", () => handleAnswerSelection(index, button));
    optionsContainer.appendChild(button);
  });
}

// Menangani klik pada salah satu dari 6 pilihan jawaban
function handleAnswerSelection(selectedIndex, buttonElement) {
  const currentData = quizData[currentQuestionIndex];

  if (selectedIndex === currentData.correctIndex) {
    // JAWABAN BENAR: tandai tombol dengan warna hijau
    buttonElement.classList.add("is-correct");

    // Tampilkan pop-up penjelasan materi & tombol lanjut
    showCorrectModal(currentData.explanation);
  } else {
    // JAWABAN SALAH
    if (!disabledOptions.has(selectedIndex)) {
      totalWrongAnswers++;
      wrongCounterBadge.textContent = totalWrongAnswers;
      disabledOptions.add(selectedIndex);
    }

    // Tandai tombol yang salah & nonaktifkan agar tidak diklik ulang
    buttonElement.disabled = true;
    buttonElement.classList.add("is-wrong");

    // Tampilkan pop-up peringatan jawaban salah
    showWrongModal(optionLetters[selectedIndex], currentData.options[selectedIndex]);
  }
}

// Menampilkan Pop-Up saat JAWABAN SALAH
function showWrongModal(letter, chosenText) {
  modalHeader.className = "modal-header modal-header--wrong";
  modalIcon.className = "fa-solid fa-triangle-exclamation";
  modalTitle.textContent = "Jawaban Salah!";
  modalSubtitle.textContent = "Silakan coba pilih jawaban yang tepat.";

  modalBodyText.innerHTML = `
    <p>Pilihan Anda <strong>(${letter}. ${escapeHTML(chosenText)})</strong> kurang tepat.</p>
    <p class="modal-muted">Jangan menyerah! Tutup pesan ini dan silakan pilih kembali jawaban yang benar untuk melanjutkan ke soal berikutnya.</p>
  `;

  modalActionBtn.className = "btn btn--red";
  modalBtnText.textContent = "Jawab Kembali";
  modalBtnIcon.className = "fa-solid fa-rotate-right";

  modalActionBtn.onclick = () => {
    feedbackModal.classList.add("hidden");
    const nextOption = optionsContainer.querySelector(".option:not(:disabled)");
    (nextOption || questionText).focus();
  };

  feedbackModal.classList.remove("hidden");
  modalActionBtn.focus();
}

// Menampilkan Pop-Up saat JAWABAN BENAR (berisi penjelasan materi + tombol Lanjut)
function showCorrectModal(explanationText) {
  modalHeader.className = "modal-header modal-header--correct";
  modalIcon.className = "fa-solid fa-circle-check";
  modalTitle.textContent = "Jawaban Benar!";
  modalSubtitle.textContent = "Pemahaman materi yang bagus.";

  modalBodyText.innerHTML = `
    <div class="explain-box">
      <span class="explain-label"><i class="fa-solid fa-book-open" aria-hidden="true"></i> Penjelasan Materi</span>
      <p>${escapeHTML(explanationText)}</p>
    </div>
  `;

  const isLastQuestion = currentQuestionIndex === quizData.length - 1;

  modalActionBtn.className = "btn btn--green";
  modalBtnText.textContent = isLastQuestion ? "Lihat Hasil Akhir" : "Lanjut ke Soal Berikutnya";
  modalBtnIcon.className = isLastQuestion ? "fa-solid fa-flag-checkered" : "fa-solid fa-arrow-right";

  modalActionBtn.onclick = () => {
    feedbackModal.classList.add("hidden");
    if (isLastQuestion) {
      showFinalResult();
    } else {
      currentQuestionIndex++;
      renderQuestion();
      questionText.focus();
    }
  };

  feedbackModal.classList.remove("hidden");
  modalActionBtn.focus();
}

// Menampilkan Layar Hasil Akhir (Nama, NIM, Total Salah, Tombol Kembali ke Awal)
function showFinalResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  window.scrollTo(0, 0);

  resultNama.textContent = userName;
  resultNim.textContent = userNim;
  resultWrongCount.textContent = `${totalWrongAnswers} Kali`;

  // Pesan evaluasi berdasarkan jumlah kesalahan
  if (totalWrongAnswers === 0) {
    resultFeedbackBox.textContent = "Sempurna! Anda menjawab seluruh 10 soal tanpa melakukan satu pun kesalahan.";
  } else if (totalWrongAnswers <= 3) {
    resultFeedbackBox.textContent = "Kerja bagus! Anda menyelesaikan semua soal dengan sangat sedikit kesalahan.";
  } else {
    resultFeedbackBox.textContent = "Terus berlatih! Anda telah menyelesaikan seluruh soal dan mempelajari penjelasannya.";
  }

  resultTitle.focus();
}

// Tombol Kembali ke Awal (Reset ke layar input Nama & NIM peserta)
btnRestart.addEventListener("click", () => {
  inputNama.value = "";
  inputNim.value = "";
  currentQuestionIndex = 0;
  totalWrongAnswers = 0;

  resultScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  window.scrollTo(0, 0);
  inputNama.focus();
});

// Fungsi helper untuk mencegah injeksi karakter HTML pada teks materi/opsi
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
