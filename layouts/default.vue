<template>
  <div>
    <header>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <NuxtLink
              to="/"
              class="text-gray-700 hover:text-blue-500 aria-[current='page']:text-blue-700"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="text-gray-700 hover:text-blue-500 aria-[current='page']:text-blue-700"
            >
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/products"
              class="text-gray-700 hover:text-blue-500 aria-[current='page']:text-blue-700"
            >
              Products
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <slot />
  </div>
</template>
