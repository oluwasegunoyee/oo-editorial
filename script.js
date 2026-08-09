document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // MOBILE MENU TOGGLE
    // ==============================
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        // Close menu upon clicking any nav link
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    // ==============================
    // NAVBAR SHADOW ON SCROLL
    // ==============================
    const header = document.querySelector("header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";
            } else {
                header.style.boxShadow = "0 2px 20px rgba(0,0,0,.08)";
            }
        });
    }

    // ==============================
    // BACK TO TOP BUTTON LOGIC
    // ==============================
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // ==============================
    // DYNAMIC EDITING LEVEL SUB-MENU
    // ==============================
    const serviceSelect = document.getElementById("serviceSelect");
    const editingTypeGroup = document.getElementById("editingTypeGroup");
    const editingTypeSelect = document.getElementById("editingTypeSelect");

    if (serviceSelect && editingTypeGroup && editingTypeSelect) {
        serviceSelect.addEventListener("change", () => {
            if (serviceSelect.value === "Book Editing") {
                editingTypeGroup.style.display = "block";
                editingTypeSelect.setAttribute("required", "required");
            } else {
                editingTypeGroup.style.display = "none";
                editingTypeSelect.removeAttribute("required");
                editingTypeSelect.selectedIndex = 0;
            }
        });
    }

    // ==============================
    // DRAG AND DROP FILE UPLOAD HANDLER
    // ==============================
    const dropArea = document.getElementById("dropArea");
    const fileInput = document.getElementById("fileInput");
    const fileDetails = document.getElementById("fileDetails");

    if (dropArea && fileInput && fileDetails) {
        
        // Prevent default drag behaviors
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
            }, false);
        });

        // Highlight drop area when item is dragged over
        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => {
                dropArea.classList.add('active');
            }, false);
        });

        // Remove highlight when item leaves or is dropped
        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => {
                dropArea.classList.remove('active');
            }, false);
        });

        // Handle dropped files
        dropArea.addEventListener('drop', (e) => {
            const dt = e.dataTransfer;
            const files = dt.files;

            if (files.length > 0) {
                fileInput.files = files; // Assign dropped file to hidden file input
                displayFileName(files[0]);
            }
        });

        // Handle file browse input selection
        fileInput.addEventListener('change', () => {
            if (fileInput.files.length > 0) {
                displayFileName(fileInput.files[0]);
            }
        });

        // Function to render the selected filename and file size UI
        function displayFileName(file) {
            const fileSizeKB = (file.size / 1024).toFixed(1);
            fileDetails.innerHTML = `
                <div style="margin-top: 12px; padding: 10px 14px; background: #f1f5f9; border-radius: 8px; font-weight: 500; font-size: 0.9rem; color: #0f172a; display: inline-flex; align-items: center; gap: 10px; border: 1px solid #cbd5e1;">
                    <i class="fas fa-file-alt" style="color: #2563eb; font-size: 1.1rem;"></i> 
                    <span>${file.name} (${fileSizeKB} KB)</span>
                </div>
            `;
        }
    }

});
