function toggleFAQ(id) {
    const faq = document.getElementById(id);
    if (faq.classList.contains('hidden')) {
        // Toggle off any other visible answers
        const visibleAnswer = document.querySelector('.answer:not(.hidden)');
        if (visibleAnswer) {
            visibleAnswer.classList.add('fadeOut');
            visibleAnswer.classList.remove('fadeIn');
            setTimeout(() => {
                visibleAnswer.classList.add('hidden');
                visibleAnswer.classList.remove('fadeOut');
            }, 300); // Animation duration
        }

        // Toggle the clicked FAQ answer
        faq.classList.remove('hidden');
        faq.classList.add('fadeIn');
    } else {
        // Toggle off the clicked FAQ answer
        faq.classList.add('fadeOut');
        faq.classList.remove('fadeIn');
        setTimeout(() => {
            faq.classList.add('hidden');
            faq.classList.remove('fadeOut');
        }, 300); // Animation duration
    }
}