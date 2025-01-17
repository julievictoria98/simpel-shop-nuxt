<template>
  <div>
    <NuxtLink :to="`/products/${product.id}`">
      <div class="bg-white shadow-md rounded px-4 flex flex-col w-72 h-96">
        <img
          class="object-fill w-fit h-2/3 rounded self-center"
          :src="product.image"
          alt="product"
        />
        <div class="flex flex-col mt-4">
          <h2 class="text-lg truncate">{{ product.title }}</h2>
          <p class="text-md text-gray-700">{{ product.price }} DK</p>
          <button
            @click.stop.prevent="addItemToBasket(product)"
            class="text-left border-black border hover:border-white rounded-2xl hover:text-white w-fit hover:bg-indigo-600 transform transition duration-100 ease-in-out mt-4 px-3 py-0.5"
          >
            Add to basket
          </button>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);

const basket = useState("basket", () => []);

const addItemToBasket = (item) => {
  basket.value.push({
    title: item.title,
    price: item.price,
    img: item.image,
  });
  console.log(basket.value);
};
</script>
