<template>
  <div id="cartView">
    <section id="cart-container" class="container my-5">
      <table width="100%">
        <thead>
          <tr>
            <td>Xóa</td>
            <td>Hình</td>
            <td>Sản phẩm</td>
            <td>Giá</td>
            <td>Số lượng</td>
            <td>Thành tiền</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(food, index) in foodItems">
            <td>
              <a @click="removeItem(food._id)" href="#"><i class="fa-solid fa-trash"></i></a>
            </td>
            <td><img :src="getImage(food.foodID.image)" alt="" /></td>
            <td>
              <h5>{{ food.foodID.name }}</h5>
            </td>
            <td>
              <h5>{{ VND.format(food.foodID.price) }}</h5>
            </td>
            <td>
              <input class="w-25 pl-1" type="number" :value="food.number" />
            </td>
            <td>
              <h5>{{ VND.format(food.total) }}</h5>
            </td>
          </tr>
          <tr>
            <td colspan="6">
              <h3>THÀNH TIỀN: {{ VND.format(sumPrice) }}</h3>
            </td>
          </tr>
        </tbody>
      </table>
      <div :style="{ float: 'right' }">
        <!-- <button class="btn btn-warning m-3">XÓA TẤT CẢ</button> -->
        <button v-if="foodItems.length > 0" @click="createBill" class="btn btn-danger m-3">ĐẶT HÀNG</button>
        <h2 v-else>Chưa có sản phẩm nào</h2>
      </div>
    </section>
  </div>

  <div v-if="cartItems.length > 0" class="listItems">
    <h2>SẢN PHẨM ĐÃ ĐẶT</h2>
    <div v-for="Items in cartItems" :key="Items._id" id="cartView">
      <section id="cart-container" class="container my-5">
        <table width="100%">
          <thead>
            <tr>
              <td>Xóa</td>
              <td>Hình</td>
              <td>Sản phẩm</td>
              <td>Giá</td>
              <td>Số lượng</td>
              <td>Thành tiền</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(food, index) in Items.fooditems" :key="index">
              <td>
                <a @click="removeItem(food._id)" href="#"><i class="fa-solid fa-trash"></i></a>
              </td>
              <td><img :src="getImage(food.foodID.image)" alt="" /></td>
              <td>
                <h5>{{ food.foodID.name }}</h5>
              </td>
              <td>
                <h5>{{ VND.format(food.foodID.price) }}</h5>
              </td>
              <td>
                <input class="w-25 pl-1" type="number" :value="food.number" disabled/>
              </td>
              <td>
                <h5>{{ VND.format(food.total) }}</h5>
              </td>
            </tr>
            <tr>
              <td colspan="6">
                <h3>THÀNH TIỀN: {{ VND.format(Items.totalPrice) }}</h3>
              </td>
            </tr>
          </tbody>
        </table>
        <div>{{ formatDate(Items.createAtTime)}}</div>
        <div v-if="Items.isaccepted == false">Chưa xác nhận</div>
        <div v-else>Đã xác nhận</div>
        <div :style="{ float: 'right' }">
          <button @click="canCelBill(Items._id)" class="btn btn-danger m-3">HỦY ĐƠN</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import userService from '../services/user';
import { ref, onBeforeMount, reactive } from 'vue';
import fooditemService from '../services/fooditem';
import billService from '../services/bill';
import moment from 'moment';
export default {
  setup() {
    const foodItems = ref([]);
    const sumPrice = ref(0);
    const cartItems = ref([]);

    async function getAllFooditems() {
      foodItems.value = (
        await userService.getUserByID(localStorage.getItem('user'))
      ).fooditems;

      foodItems.value.forEach((food) => {
        console.log(food)
        sumPrice.value = sumPrice.value + food.total;
      });
    }

    function getImage(name) {
      return new URL(`../assets/images/${name}`, import.meta.url).href;
    }

    const VND = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });

    async function removeItem(foodID) {
      try {
        await fooditemService.deleteFood(foodID);
        sumPrice.value = 0;
        getAllFooditems();
      } catch (error) {
        console.log(error);
      }
    }

    async function createBill() {
      try {
        await billService.createBill(localStorage.getItem('user'));
        alert('ĐẶT HÀNG THÀNH CÔNG')
        getAllFooditems();
        getCartItems();
        sumPrice.value = 0;
      } catch (error) {
        console.log(error.message);
      }
    }

    async function getCartItems(){
      cartItems.value = await billService.getAllByUserID(localStorage.getItem('user'));
      console.log(cartItems.value);
    }

    async function canCelBill(id) {
      await billService.deleteBill(id)
      getAllFooditems();
      getCartItems();
      alert('HỦY ĐƠN THÀNH CÔNG')
    }

    const formatDate = function (string){
      return moment().format(string)
    }

    onBeforeMount(() => {
      getAllFooditems();
      getCartItems();
    });

    return { foodItems, getImage, VND, removeItem, sumPrice, createBill, cartItems, canCelBill, formatDate };
  },
};
</script>

<style scoped>
#cart-container {
  overflow-x: auto;
}

#cart-container table {
  border-collapse: collapse;
  /* width: 100%; */
  table-layout: fixed;
  margin-left: auto;
  margin-right: auto;
  white-space: nowrap;
}

#cart-container table thead {
  font-weight: 700;
}

#cart-container table thead td {
  background: orangered;
  color: #fff;
  border: none;
  padding: 6px 0;
}

#cart-container table td {
  border: 1px solid #b6b3b3;
  text-align: center;
}

#cart-container table td:nth-child(1) {
  width: 100px;
}

#cart-container table td:nth-child(2),
#cart-container table td:nth-child(3) {
  width: 200px;
}

#cart-container table td:nth-child(4),
#cart-container table td:nth-child(5),
#cart-container table td:nth-child(6) {
  width: 170px;
}

#cart-container table tbody img {
  width: 100px;
  height: 80px;
  object-fit: cover;
}

#cart-container table tbody {
  color: #8d8c89;
}

#cart-bottom .coupon>div,
#cart-bottom .total>div {
  border: 1px solid #b6b3b3;
}

#cart-bottom .coupon h5,
#cart-bottom .total h5 {
  background: orangered;
  color: #fff;
  border: none;
  padding: 6px 12px;
  font-weight: 700;
}

#cart-bottom .coupon p,
#cart-bottom .coupon input {
  padding: 0 12px;
}

#cart-bottom .coupon input {
  height: 44px;
  margin: 0 0 20px 12px;
}

#cart-bottom .total div>div {
  padding: 0 12px;
}

#cart-bottom .total h6 {
  color: #2a2a2a;
}

.second-hr {
  background: #b8b7b3;
  width: 100%;
  height: 1px;
}

#cart-bottom .total div>button {
  margin: 0 12px 20px 0;
  display: flex;
  justify-content: flex-end;
}

table h3 {
  margin-top: 5px;
}

h2 {
  text-align: center;
  color: red;
}</style>
