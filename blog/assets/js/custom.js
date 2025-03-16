document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => { // 確保 DOM 真的已載入
        const backToTopButton = document.getElementById("backToTop");

        if (!backToTopButton) {
            console.error("❌ backToTop button not found! 請確認 HTML 是否正確添加");
            return;
        }

        // 隱藏按鈕初始狀態
        backToTopButton.style.display = "none";

        // 滾動時顯示/隱藏按鈕
        window.addEventListener("scroll", function() {
            if (window.scrollY > 300) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        });

        // 點擊按鈕返回頂部
        backToTopButton.addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

    }, 500); // 延遲執行，確保 DOM 載入
});

document.querySelector("#search input").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let posts = document.querySelectorAll(".post");
    
    posts.forEach(post => {
        let title = post.querySelector("h2").innerText.toLowerCase();
        if (title.includes(searchQuery)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const lightModeToggle = document.getElementById("lightModeToggle");
    const body = document.body;

    function updateMode() {
        if (body.classList.contains("dark-mode")) {
            darkModeToggle.style.display = "none";
            lightModeToggle.style.display = "flex"; // 讓它置中
        } else {
            darkModeToggle.style.display = "flex"; // 讓它置中
            lightModeToggle.style.display = "none";
        }
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
        updateMode();
    });

    lightModeToggle.addEventListener("click", function () {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
        updateMode();
    });

    // 初始化時根據本地存儲設置模式
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }
    updateMode();
});
