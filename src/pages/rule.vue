<template>
    <div id="rule">
        <div class="rule">
            <h2 v-if="rule_id==0">Cara Ikutan</h2>
            <h2 v-if="rule_id==1">Syarat & Ketentuan</h2>
            <div class="game_rule" v-if="rule_id==0">
                <p>1. Periode event 26 Desember 2018 - 4 Januari 2019. </p>
                <p>2. Run for your prize! Mainkan permainan ular tangga untuk kesempatan mendapatkan hadiah utama di akhir permainan.</p>
                <p>3. Cara lengkapnya, silahkan baca syarat & ketentuan ya!</p>
            </div>
            <div class="treaty" v-if="rule_id==1">
                <ul>
                    <li>1.	Periode event Caping Run 26 Desember 2018 - 4 Januari 2019.</li>
                    <li>2.	Kamu harus register & login di Caping untuk mengikuti event ini.</li>
                    <li>3.	Untuk mengikuti event ini, kamu harus memiliki Tabungan Caping yang cukup. Apabila kamu belum memiliki Tabungan Caping, silahkan menuju FAQ untuk mengetahui cara mengumpulkan Tabungan Caping.</li>
                    <li>4.	Event kali ini dibentuk dalam sebuah permainan ular tangga, dan pada akhir permainan akan ada grand prize yang bisa kamu dapatkan.</li>
                    <li>5.	Untuk memainkan ular tangga ini, setiap harinya kamu akan mendapatkan 1x kesempatan FREE melempar dadu. Namun setiap pelemparan dadu berikutnya akan dikenakan Rp 200 Tabungan Caping.</li>
                    <li>6.	Apabila kamu sudah mencapai atau melewati kolom “Hadiah Sesi 1”, kamu akan bisa membuka kotak hadiah untuk mendapatkan kesempatan berbagai hadiah. Setiap harinya kamu akan mendapatkan 1x kesempatan FREE membuka kotak hadiah. Namun setiap pembukaan kotak hadiah berikutnya akan dikenakan Rp 400 Tabungan Caping setiap sekali buka.
Berikut adalah hadiah yang bisa kamu dapatkan pada “Hadiah Sesi 1”:</li>
                    <li>
                        <ul>
                            <li>•	Koin Rp 200</li>
                            <li>•	Koin Rp 350</li>
                            <li>•	Koin Rp 500</li>
                            <li>•	Koin Rp 700</li>
                            <li>•	Koin Rp 1.000</li>
                        </ul>
                    </li>
                    <li>7.	Apabila kamu sudah mencapai atau melewati kolom “Hadiah Sesi 2”, kamu akan bisa membuka kotak hadiah sesi 2 untuk mendapatkan kesempatan berbagai hadiah yang lebih menarik. Setiap harinya kamu akan mendapatkan 1x kesempatan FREE membuka kotak hadiah. Namun setiap pembukaan kotak hadiah berikutnya akan dikenakan Rp 400 Tabungan Caping setiap sekali buka.
                        <br> Berikut adalah hadiah yang bisa kamu dapatkan pada “Hadiah Sesi 2”:</li>
                    <li>
                        <ul>
                            <li>•	Koin 1000</li>
                            <li>•	Koin 2000</li>
                            <li>•	Koin 3000</li>
                            <li>•	Koin 5000</li>
                            <li>•	Koin 7000</li>
                            <li>•	Pulsa Rp 10.000</li>
                            <li>•	Pulsa Rp 25.000</li>
                        </ul>
                    </li>
                    <li>8.	Apabila kamu sudah mencapai akhir permainan, kamu akan bisa membuka kotak hadiah untuk mendapatkan kesempatan berbagai Hadiah Utama. Setiap harinya kamu akan mendapatkan 1x kesempatan FREE membuka kotak hadiah utama. Namun setiap pembukaan kotak hadiah berikutnya akan dikenakan Rp 3.500 Tabungan Caping setiap sekali buka.
                        <br> Berikut adalah hadiah yang bisa kamu dapatkan pada “Hadiah Utama”:</li>
                    <li>
                        <ul>
                            <li>•	Smartphone Oppo A3S</li>
                            <li>•	Pulsa Rp 10.000</li>
                            <li>•	Pulsa Rp 25.000</li>
                            <li>•	Pulsa Rp 50.000</li>
                            <li>•	Pulsa Rp 100.000</li>
                            <li>•	Koin Rp 1.000</li>
                            <li>•	Koin Rp 5.000 </li>
                            <li>•	Koin Rp 10.000</li>
                            <li>•	Koin Rp 20.000</li>
                        </ul>
                    </li>
                    <li>9.	Untuk Capingers yang mendapatkan hadiah koin, koin akan dikirimkan langsung ke akun kamu dalam waktu maksimal 3x24 jam.</li>
                    <li>10.	Untuk Capingers yang mendapatkan hadiah pulsa, diharapkan untuk mengisi nomor hp kamu pada kolom yang tersedia, lalu pulsa akan dikirimkan ke nomor kamu dalam waktu maksimal 3x24 jam.</li>
                    <li>11.	Untuk Capingers yang mendapatkan hadiah Smartphone, diharapkan untuk mengisi identitas lengkap dan benar (username Caping, nomor hp, email) pada kolom yang tersedia. Setelah itu Tim Caping akan menghubungi pemenang melalui alamat email pemenang untuk proses klaim lebih lanjut.</li>
                    <li>12.	Capingers yang mengikuti event ini dianggap setuju dengan syarat & ketentuan yang berlaku.</li>
                    <li>13.	Adapun Capingers yang melakukan kecurangan saat mengikuti event ini akan segera ditindaklanjuti oleh Tim Caping.</li>
                    <li>14.	Syarat & ketentuan dapat berubah sewaktu-waktu tanpa pemberitahuan lebih lanjut. Silahkan cek halaman ini secara berkala.</li>
                </ul>
            </div>
            <div class="button">
                <router-link to="/game">
                    <button>
                        Mulai Bermain
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            rule_id:0//ture 规则，false 条约
        }
    },
    mounted(){
        this.rule_id = this.$route.query.rule_id
    }
}
</script>


<style scoped>
#rule{
    width: 85%;
    height: 750px;
    padding-bottom: 300px;
    margin: 50px auto 0;
    background-color: #010030af;
}
h2{
    color: #fff;
    font-size:50px;
    font-weight: bold;
    text-align: center;
    line-height: 120px;
    padding-top: 30px;
}
p{
   color: #838290;
   font-size:28px;
    line-height: 50px;
    padding-top: 30px;
    padding-left: 30px;
    padding: 0 30px 30px 30px;
    text-indent:-1em;
    margin-left:1em;
   
}
.button{
   width: 350px;
   margin: 50px auto 0; 
}
button{
    border:0;
    width: 100%;
    border-radius: 60px;
    background: linear-gradient(#66C69D, #3B885E);
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    line-height: 100px;
    margin: 0 auto;
}
li{
    color: #838290;
   font-size:28px;
    line-height: 50px;
    padding-top: 30px;
    padding-left: 30px;
    padding: 0 30px 30px 30px;
    text-indent:-1em;
    margin-left:1em;
}
.treaty{
    height: 830px;
    overflow-y: scroll;
}
</style>
