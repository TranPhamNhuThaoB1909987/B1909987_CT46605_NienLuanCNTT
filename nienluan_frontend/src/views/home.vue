<template>
  <div id="banner">
    <div class="box-left">
      <h2>
        <span>THỨC ĂN</span>
        <br />
        <span>THƯỢNG HẠNG</span>
      </h2>
      <p>
        ĂN GÌ HÔM NAY ? Thực đơn Buger Queen đa dạng và phong phú, có rất nhiều
        sự lựa chọn cho bạn, gia đình và bạn bè.
      </p>
      <button>Mua ngay</button>
    </div>
    <div class="box-right">
      <img src="../assets/images/bg/img1.jpg" alt="" />
      <img src="../assets/images/bg/img2.jpg" alt="" />
    </div>
  </div>
  <div class="container">
    <div id="wp-products">
      <h2>SẢN PHẨM CỦA CHÚNG TÔI</h2>
      <div class="row">
        <div
          id="cardFood"
          v-for="(food, index) in foods"
          :key="index"
          class="card col-sm-4"
          style="width: 18rem"
        >
          <img
            class="card-img-top"
            :src="getImage(food.image)"
            alt="Card image cap"
          />
          <div class="card-body text-center">
            <p class="card-text">
              {{ food.name }}
            </p>
            <p class="card-text">
              Giá:
              {{ VND.format(food.price) }}
            </p>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Số lượng</span>
              <input
                type="number"
                min="1"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
                :id="`input-${index}`"
              />
            </div>
            <button @click="addFood(food._id, index)" class="btn btn-danger">
              THÊM VÀO GIỎ HÀNG
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import foodService from "../services/food";
import fooditemService from "../services/fooditem";
import { ref, onBeforeMount, reactive } from "vue";
export default {
  setup() {
    const foods = ref([]);

    async function getFoods() {
      foods.value = await foodService.getAllFoods();
      console.log(foods.value);
    }

    function getImage(name) {
      return new URL(`../assets/images/${name}`, import.meta.url).href;
    }

    const VND = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    async function addFood(foodID, index) {
      if (localStorage.getItem("user") == null) {
        alert("VUI LÒNG ĐĂNG NHẬP TRƯỚC KHI MUA HÀNG");
      } else {
        const number = document.getElementById(`input-${index}`).value;
        if (number >= 1) {
          const foodItem = reactive({
            userID: localStorage.getItem("user"),
            foodID: foodID,
            number: number,
          });
          console.log(number);
          await fooditemService.addFood(foodItem);
          alert("MUA HÀNG THÀNH CÔNG");
        }else{
          alert("VUI LÒNG CHỌN SỐ LƯỢNG SẢN PHẨM")
        }
      }
    }

    onBeforeMount(() => {
      getFoods();
    });

    return {
      foods,
      getImage,
      VND,
      addFood,
    };
  },
};
</script>

<style scoped>
#wp-products {
  margin: 30px 0;
  width: 1200px;
  margin: 0 auto;
}

#wp-products h2 {
  margin: 50px 0;
  text-align: center;
  color: #c01616;
  font-weight: 400;
  font-size: 42px;
}

#cardFood {
  margin: 2px;
}

#banner {
  width: 100%;
  background-image: url(../assets/images/bg/burger_bg.jpg);
  height: 463px;
  margin-top: 40px;
  display: flex;
  padding: 0px 133px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
#banner .box-left,
#banner .box-right {
  width: 50%;
}
#banner .box-left h2 {
  font-size: 48px;
  margin-top: 75px;
  color: #fff;
}
#banner .box-left p {
  color: #fff;
}
#banner .box-left button {
  width: 191px;
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
#banner .box-left button:hover {
  background: orange;
}
#banner .box-right {
  padding-left: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#banner .box-right img {
  margin: 0px 10px;
  animation: animation 3s infinite linear;
}
#banner .box-right img:nth-child(1) {
  animation-delay: 0.5s;
}
#banner .box-right img:nth-child(2) {
  animation-delay: 1s;
}
@keyframes animation {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
