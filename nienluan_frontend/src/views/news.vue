<template>
    <div id="news">
        <table id="table_news">
            <tr>
                <td>
                    <img id="img_news" src="../assets/images/news/news05.jpg">
                    <h2 id="food_news">CAFE SỮA ĐÁ</h2><br>
                    <p>Là sản phẩm được sử dụng từ cà phê nguyên hạt,
                        pha phin và dùng với sữa đặc đảm bảo sẽ mang lại 1 cảm giác sảng khoái khi tận hưởng một ly cà phê
                        ngon
                    </p>
                </td>
                <td>
                    <img id="img_news" src="../assets/images/news/news02.jpg">
                    <h2 id="food_news">TRÀ SỮA THÁI</h2><br>
                    <p>Với hương vị trà Thái thơm lừng kết hợp với vị béo ngất ngây của sữa,
                        Trà Sữa Thái hứa hẹn sẽ sớm nhanh chóng trở thành 1 trong những thức uống không thể bỏ qua mỗi khi
                        đến với Buger Queen</p>
                </td>
                <td>
                    <img id="img_news" src="../assets/images/news/news03.jpg">
                    <h2 id="food_news">KEM CỐM DỪA SỮA</h2><br>
                    <p>Sô cô la trắng nhập khẩu chất lượng cao hòa quyện với vị cốm sữa dừa quen thuộc kèm với vụn dừa sấy
                        phủ trên đỉnh kem tạo nên một sản phẩm kem tuyệt vời,
                        thỏa mãn mong đợi từ khách hàng yêu quý.</p>
                </td>
            </tr>
            <tr>
                <td>
                    <img id="img_news" src="../assets/images/news/news06.jpg">
                    <h2 id="food_news">THÁNG 4 - RỘN RÀNG ƯU ĐÃI</h2><br>
                    <p>- Combo Đặc biệt: Gà rán + Khoai tây chiên (M) + Mì ý + Pepsi (M) giá chỉ 79.000đ (Tiết kiệm
                        30.000đ)<br>
                        - Combo Gà Tứ vị siêu hot hit đã quay trở lại: Gà sốt H&S + Gà sốt đậu + Gà sốt phô mai + Gà sốt
                        Mala giá chỉ 129.000đ.
                    </p>
                </td>
                <td>
                    <img id="img_news" src="../assets/images/news/news07.jpg">
                    <h2 id="food_news">NHÀ MÁY ĐẠT CHUẨN ISO</h2><br>
                    <p>Nhà máy BUGER QUEEN Việt Nam tọa lạc tại Khu công nghiệp Tân Kim mở rộng (Cần Giuộc, Long An) có tổng
                        diện tích 10.000 m2,
                        được đầu tư dây chuyền hiện đại, hoạt động theo quy trình khép kín, đảm bảo tiêu chuẩn chất lượng
                        quốc tế.
                    </p>
                </td>
                <td>
                    <img id="img_news" src="../assets/images/news/news07.png">
                    <h2 id="food_news">MÀN KẾT HỢP ĐẶC BIỆT</h2><br>
                    <p>Bạn nào muốn "độ da" sang màu đỏ nâu khỏe khoắn thì thử liền món Gà rán H&S best seller tại cửa hàng
                        BUGER QUEEN trên Play Together nhé!<br>
                        Cùng chờ đón những sự kiện thú vị và vật phẩm hấp dẫn tại cửa hàng ảo BUGER QUEEN nha!<br>
                        Hẹn gặp lại các bạn ở khu trung tâm đảo Kaia!!!
                    </p>
                </td>
            </tr>

        </table>

    </div>
</template>

<script>

export default {

    setup() {

    }
}
</script>

<style scoped>
#menu{
    list-style: none;
    display: flex;
}
#menu .item{
    margin: 0px 25px;
}
#menu .item a{
    color: rgb(19, 18, 18);
    text-decoration: none;
    text-transform: uppercase;
   font-weight: bold;
}
#actions{
    display: flex;
}
#actions .item{
    margin-left: 20px;
}
#table_news, td, tr{
    margin-top: 50px;
    width: 100%;
    border: 3px solid black !important;
    table-layout: fixed;
}
#img_news{
    width: 100%;
    height: 100%;
    object-fit: contain;
    
}
#food_news{
    color: #c01616;
    text-align: center;
    margin-top: 30px;
}
</style>