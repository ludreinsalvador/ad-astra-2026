// JS SCRIPT FOR TERMS' "NEXT" BUTTON
document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('agree');
    const nextBtn = document.getElementById('nextBtn');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            nextBtn.classList.remove('disabled');
        } else {
            nextBtn.classList.add('disabled');
        }
    });

    // Terms SweetAlert Modal
    nextBtn.addEventListener('click', function (event) {
        if (checkbox.checked) {
            swal({
                title: "Proceed to Step 2?",
                text: "By clicking 'Proceed,' you are agreeing to our Terms and Conditions.",
                icon: "warning",
                buttons: ["Cancel", "Proceed"],
                dangerMode: true,
            }).then((willProceed) => {
                if (willProceed) {
                    window.location.href = "agreement.html";
                }
            });
        } else {
            swal("Notice", "Please agree to the Terms and Conditions first.", "error");
        }
    });
});


// "NEXT" to "Next" on mobile devices
window.addEventListener('resize', function () {
    const nextBtn = document.getElementById('nextBtn');
    if (window.innerWidth <= 576) {
        nextBtn.textContent = 'Next';
    } else {
        nextBtn.textContent = 'NEXT';
    }
});

// initial mobile check
if (window.innerWidth <= 576) {
    document.getElementById('nextBtn').textContent = 'Next';
}


// SUBSCRIBE NOW MODAL (WAIT)
document.addEventListener('DOMContentLoaded', function () {
    const subscribeBtn = document.querySelector('.final-subscribe-button');
    const modal = document.getElementById('subscribeModal');
    const modalContent = modal.querySelector('.modal-content');
    const cancelBtn = document.querySelector('.cancel-btn');
    const confirmBtn = document.querySelector('.confirm-btn');

    // show modal with animation
    subscribeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = 'flex';
        modalContent.classList.remove('hide');
        modalContent.classList.add('show');
    });

    // hide modal with animation
    function closeModal() {
        modalContent.classList.remove('show');
        modalContent.classList.add('hide');

        // wait for animation to complete before hiding
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // match duration of fadeOutScale
    }

    cancelBtn.addEventListener('click', closeModal);
    confirmBtn.addEventListener('click', function () {
        closeModal();
        window.location.href = "#";
    });

    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });
});



