document.getElementById('contactForm').addEventListener('submit',function (event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const pesanWa = `${name} dengan email ${email}, \ningin mengirim pesan berisi sebagai berikut : ${message}`;
    try {
        // Encode pesan agar sesuai dengan URL
        const encodedMessage = encodeURIComponent(pesanWa);

        // Ganti dengan nomor WhatsApp tujuan (gunakan kode negara, misalnya: 62 untuk Indonesia)
        const whatsappNumber = '6281359808826'; // Contoh nomor

        // Membuat URL WhatsApp dengan pesan
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Membuka WhatsApp Web di tab baru
        window.open(whatsappURL, '_blank');
    } catch (error) {
        console.error('Error encoding the message:', error);
        alert('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
    }
});

document.getElementById('darkmode-toggle').addEventListener('change', function(){
    const selectMode = document.querySelector('body');
    let kontak = document.getElementById('contact');

    if(this.checked){
        selectMode.style.backgroundImage = "url('img/malem.png')";
        kontak.style.backgroundColor = 'rgba(234, 234, 234, 0.1)'
    }else{
        selectMode.style.backgroundImage = "url('img/mornig.png')";
        kontak.style.backgroundColor = 'rgba(1, 42, 97, 0.2)'
        
    }
});


    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav ul');


