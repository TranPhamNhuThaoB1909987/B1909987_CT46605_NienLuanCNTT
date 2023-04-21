<template>
    <div id="banner">
        <div class="box-left">
            <h2>
                <span>KHUYẾN MÃI SIÊU HẤP DẪN</span>
                <br>
                <span>HÔM NAY</span>
            </h2>
            <p>Nhiều phần ăn ưu đãi hấp dẫn đang chờ đón bạn.<br> Mua ngay thôi !
            </p>
            <button>Mua ngay</button>
        </div>
    </div>
    <div id="wp-products">
        <h2>SẢN PHẨM KHUYẾN MÃI HÔM NAY</h2>
        <ul id="list-products">
            <div class="item">
                <img class="image" src="../assets/images/combo/combo1.png" alt="">
                <div class="name">
                    Combo LChicken Burger 1
                </div>
                <div class="starts">
                    <p>01 Buger Chicken<br>
                        01 Khoai tây lắc<br>
                        01 Pepsi(M)</p>
                </div>
                <div class="price-new">79.000 VND</div>
                <div class="price-old">102.000VND</div>
                <div class="add">
                    <button>Thêm vào giỏ hàng</button>
                </div>
            </div>
            <div class="item">
                <img class="image" src="../assets/images/combo/combo2.png" alt="">
                <div class="name">Combo LChicken Burger 2</div>
                <div class="starts">
                    <p>02 Gà rán<br>
                        01 Buger Chicken<br>
                        01 Mỳ ý (M)<br>
                        01 Khoai tây chiên<br>
                        02 Pepsi(M)</p>
                </div>
                <div class="price-new">169.000 VND</div>
                <div class="price-old">207.000 VND</div>
                <div class="add">
                    <button>Thêm vào giỏ hàng</button>
                </div>
            </div>
            <div class="item">
                <img class="image" src="../assets/images/combo/combo3.png" alt="">
                <div class="name">Best Burger</div>
                <div class="starts">
                    <p>02 Gà rán<br>
                        01 Buger LChicken<br>
                        01 Mỳ ý (M)<br>
                        01 Khoai tây chiên<br>
                        02 Pepsi(M)</p>
                </div>
                <div class="price-new">139.000 VND</div>
                <div class="price-old">185.000 VND</div>
                <div class="add">
                    <button>Thêm vào giỏ hàng</button>
                </div>
            </div>
            <div class="item">
                <img class="image" src="../assets/images/combo/combo4.png" alt="">
                <div class="name">Combo 40.000đ</div>
                <div class="starts">
                    <p>01 Gà tuyết vàng<br>
                        02 Pepsi(M)</p>
                </div>
                <div class="price-new">40.000 VND</div>
                <div class="price-old">54.000 VND</div>
                <div class="add">
                    <button>Thêm vào giỏ hàng</button>
                </div>
            </div>

            <div class="item">
                <img class="image" src="../assets/images/combo/combo5.jpg" alt="">
                <div class="name">Combo 68.000đ</div>
                <div class="starts">
                    <p>01 Gà tuyết vàng<br>
                        01 Khoai tây lắc <br>
                        01 Pepsi(M)</p>
                </div>
                <div class="price-new">68.000 VND</div>
                <div class="price-old">93.000 VND</div>
                <div class="add">
                    <button>Thêm vào giỏ hàng</button>
                </div>
            </div>

            <div class="item">
                <img class="image" src="../assets/images/combo/combo6.png" alt="">
                <div class="name">Combo Gà Sốt MaLa 1</div>
                <div class="starts">
                    <p>03 Gà sốt Mala<br>
                        01 Pepsi(M)</p>
                </div>
                <div class="price-new">122.000 VND</div>
                <div class="price-old">134.000 VND</div>
                <div class="add">
                    <button>Thêm vào giỏ hàng</button>
                </div>
            </div>

            <div class="item">
                <img class="image" src="../assets/images/combo/combo7png.png" alt="">
                <div class="name">Combo Gà Sốt Mala 2</div>
                <div class="starts">
                    <p>01 Gà sốt Mala<br>
                        01 Khoai tây chiên(M)<br>
                        01 Pepsi(M)</p>
                </div>
                <div class="price-new">65.000 VND</div>
                <div class="price-old">83.000 VND</div>
                <div class="add">
                    <button>Thêm vào giỏ hàng</button>
                </div>
            </div>

            <div class="item">
                <img class="image" src="../assets/images/combo/combo7png.png" alt="">
                <div class="name">Combo Gà Sốt Mala 2</div>
                <div class="starts">
                    <p>01 Gà sốt Mala<br>
                        01 Khoai tây chiên(M)<br>
                        01 Pepsi(M)</p>
                </div>
                <div class="price-new">65.000 VND</div>
                <div class="price-old">83.000 VND</div>
                <div class="add">
                    <button>Thêm vào giỏ hàng</button>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>

export default {

    setup() {

    }
}
</script>

<style scoped>
#actions{
    display: flex;
}
#actions .item{
    margin-left: 20px;
}
#banner{
    width: 100%;
    background-image: url(../assets/images/combo/discount.jpg);
    height: 700px;
    display: flex;
    padding: 0px 133px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
#banner .box-left h2{
    font-size: 48px;
    margin-top: 75px;
    color: #141313;
}
#banner .box-left p{
    color: #0c0c0c;
    font-size: 30px;
}
#banner .box-left button{
    width: 500px;
    height: 40px;
    margin-top: 41px;
    background: #c01616;
    border: none;
    outline: none;
    color: #fff;
    font-weight: bold;
    border-radius: 20px;
    transition: 0.4s;
}
#banner .box-left button:hover,
#list-products .item .add button:hover{
    background: orange;
}
#wp-products{
    padding-top: 50px;
    padding-bottom: 78px;
    padding-left: 134px;
    padding-right: 134px;
}
#wp-products h2{
    text-align: center;
    margin-bottom: px;
    font-size: 32px;
    color: #c01616;
}
#list-products{
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
.image{
    width: 100%;
    height: 50%;
}
#list-products .item .starts,
#list-products .item .add,
#list-products .item .price-old,
#list-products .item .price-new,
#list-products .item .name{
    display: flex;
    margin: 0px auto;
    width: 50%;
    font-size: large;
    font-weight: bold;
}
#list-products .item .name{
    font-size: 20px;
    margin-bottom: 20px;
    color: #c01616;
}
#list-products .item .price-new{
    color: #ff5b6a;
    margin-top: 20px;
    font-size: 20px;
}
#list-products .item .price-old{
    color: #6b6c6c;
    font-size: 20px;
    text-decoration: line-through;
}
#list-products .item .add button{
    width: 500px;
    height: 40px;
    /* margin-top: 40px; */
    background: #c01616;
    border: none;
    outline: none;
    color: #fff;
    font-weight: bold;
    border-radius: 20px;
    transition: 0.4s;
}
</style>