<template>
    <section class="contact">
        <div class="content">
            <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
            <p>Chúng tôi là Buger Queen Việt Nam với hơn 100 cửa hàng trên khắp cả nước, chúng tôi mong muốn đem đến niềm
                vui ẩm thực cho mọi gia đình Việt bằng những món ăn có chất lượng tốt, hương vị tuyệt hảo, dịch vụ chu đáo
                với một mức giá hợp lý… Hãy đến và thưởng thức nhé!</p>
        </div>
        <div class="container">
            <div class="contactInfo">
                <div class="box">
                    <div class="icon"><i class="fa-solid fa-map"></i></div>
                    <div class="text">
                        <h3>Địa chỉ</h3>
                        <p>Trường CNTT&TT_ĐHCT</p>
                    </div>
                </div>

                <div class="box">
                    <div class="icon"><i class="fa-solid fa-phone"></i></div>
                    <div class="text">
                        <h3>SĐT</h3>
                        <p>(84-28) 5416 1072 ~79</p>
                    </div>
                </div>

                <div class="box">
                    <div class="icon"><i class="fa-solid fa-envelope"></i></div>
                    <div class="text">
                        <h3>Email</h3>
                        <p>thaob1909987@student.ctu.edu.vn</p>
                    </div>
                </div>
            </div>
            <div class="contactForm">
                <form>
                    <h2>Gửi tin nhắn</h2>
                    <div class="inputBox">
                        <input type="text" name="" required="required">
                        <span>Họ tên</span>
                    </div>
                    <div class="inputBox">
                        <input type="text" name="" required="required">
                        <span>Email</span>
                    </div>
                    <div class="inputBox">
                        <textarea required="required"></textarea>
                        <span>Nội dung </span>
                    </div>
                    <div class="inputBox">
                        <input type="submit" name="" value="Gửi">
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>

export default {

    setup() {

    }
}
</script>

<style scoped>
.contact{
    position: relative;
    min-height: 100vh;
    padding: 50px 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background-color: red; */
    background: url(../assets/images/bg/burger_bg.jpg);
    background-size: cover;
    background-position: center;
}
.contact .content{
    max-width: 800px;
}
.contact .content h2{
    margin-top: 25px;
    font-size: 50px;
    font-weight: 500;
    text-align: center;
    color: whitesmoke;
}
.contact .content p{
    font-size: 20px;
    font-weight: 200;
    color: whitesmoke;
}
.container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    color: #130f0f;
}
.container .contactInfo{
    width: 80%;
    display: flex;
    flex-direction: column;
}
.container .contactInfo .box{
    position: relative;
    padding: 20px 0;
    display: flex;
    
}
.container .contactInfo .box .icon{
    min-width: 60px;
    height: 60px;
    background: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 22px;
}
.container .contactInfo .box .text{
    background-color: white;
    display: flex;
    margin-left: 20px;
    font-size: 16px;
    color: #130f0f;
    flex-direction: column;
    font-weight: 300;
}
.container .contactInfo .box .text h3{
    font-weight: 500;
    color: #130f0f;
}
.contactForm{
    width: 90%;
    padding: 40px;
    background: whitesmoke;
}
.contactForm h2{
    font-size: 30px;
    color: rgb(19, 19, 18);
    font-weight: 500;
}
.contactForm .inputBox{
    position: relative;
    width: 100%;
    margin-top: 20px;
}
.contactForm .inputBox input,
.contactForm .inputBox textarea{
    width: 100%;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
}
.contactForm .inputBox span{
    position: absolute;
    left: 0;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    transition: 0.5s;
    color: #666;
}
.contactForm .inputBox input:focus ~ span,
.contactForm .inputBox input:valid ~ span ,
.contactForm .inputBox textarea:focus ~ span,
.contactForm .inputBox textarea:focus ~ span{
    color: #e91e63;
    font-size: 12px;
    transform: translateY(-20px);
}
</style>
