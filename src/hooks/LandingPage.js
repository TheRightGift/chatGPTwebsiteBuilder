<template>
  <div id="app">
    <header class="header">
      <div class="brand">
        <img src="logo.png" alt="Brand Logo" class="logo" />
        Jewelry Store
      </div>
      <nav class="nav">
        <router-link to="/login">Login/Register</router-link>
        <router-link to="/orders">Orders</router-link>
        <router-link to="/cart">Cart</router-link>
        <router-link to="/wishlist">Wishlist</router-link>
        <div class="search">
          <input type="text" placeholder="Search Jewelry" v-model="searchQuery" />
        </div>
      </nav>
    </header>
    <main>
      <section class="hero">
        <div class="slider">
          <img :src="getUnsplashImageUrl()" alt="Slider Image 1" />
        </div>
        <div class="slider">
          <img :src="getUnsplashImageUrl()" alt="Slider Image 2" />
        </div>
        <div class="campaign">
          <h2 class="campaign-header">Exclusive Jewelry Sale!</h2>
          <p class="campaign-description">
            Explore our stunning collection of handcrafted jewelry pieces at incredible prices.
            Limited time offer!
          </p>
          <router-link to="/products" class="cta-button">Shop Now</router-link>
        </div>
      </section>

      <section class="top-products">
        <div class="section-title">
          <h2>Top Products by Category</h2>
        </div>
        <div class="category-products">
          <div v-for="category in categories" :key="category.id" class="category">
            <h3 class="category-title">
              <router-link :to="{ name: 'Category', params: { categoryId: category.id } }">
                {{ category.name }}
              </router-link>
            </h3>
            <div class="products">
              <div v-for="product in getTopProductsByCategory(category.id)" :key="product.id" class="product">
                <img :src="getUnsplashImageUrl()" :alt="product.name" class="product-image" />
                <p class="product-name">{{ product.name }}</p>
                <p class="product-price">${{ product.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="blog">
        <div class="section-title">
          <h2>Latest Blog Posts</h2>
        </div>
        <div class="blog-posts">
          <div v-for="post in getLatestBlogPosts" :key="post.id" class="blog-post">
            <img :src="getUnsplashImageUrl()" :alt="post.title" class="post-image" />
            <h3 class="post-title">{{ post.title }}</h3>
            <p class="post-content">{{ post.content }}</p>
            <router-link :to="{ name: 'BlogPost', params: { postId: post.id } }" class="read-more">Read More</router-link>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer">
      <div class="footer-content">
        <nav class="footer-nav">
          <router-link to="/products">Products</router-link>
          <router-link to="/categories">Categories</router-link>
          <router-link to="/aboutus">About Us</router-link>
          <router-link to="/faq">FAQ</router-link>
        </nav>
        <div class="subscribe-form">
          <h4>Subscribe to Receive Updates</h4>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div class="contact-form">
          <h4>Contact Us</h4>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <textarea placeholder="Your message"></textarea>
          <button>Send</button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      categories: [
        { id: 1, name: "Necklaces" },
        { id: 2, name: "Earrings" },
        { id: 3, name: "Rings" },
      ],
      products: [
        { id: 1, name: "Product 1", category: 1, price: 99 },
        { id: 2, name: "Product 2", category: 1, price: 149 },
        { id: 3, name: "Product 3", category: 2, price: 79 },
        { id: 4, name: "Product 4", category: 2, price: 119 },
        { id: 5, name: "Product 5", category: 3, price: 199 },
        { id: 6, name: "Product 6", category: 3, price: 249 },
      ],
      blogPosts: [
        { id: 1, title: "Blog Post 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id: 2, title: "Blog Post 2", content: "Vestibulum id tellus non purus lobortis viverra." },
        // ... other blog posts ...
      ],
    };
  },
  methods: {
    getTopProductsByCategory(categoryId) {
      return this.products.filter(product => product.category === categoryId);
    },
    getLatestBlogPosts() {
      return this.blogPosts.slice(0, 10);
    },
    getUnsplashImageUrl() {
      const randomKeyword = ["jewelry", "diamond", "gemstone", "gold", "silver"];
      const randomIndex = Math.floor(Math.random() * randomKeyword.length);
      const keyword = randomKeyword[randomIndex];
      return `https://source.unsplash.com/1600x900/?${keyword}`;
    },
  },
};
</script>
<style>
/* Header styles */
.header {
  background-color: #333333;
  color: #ffffff;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  display: flex;
  align-items: center;
  font-size: 24px;
}

.logo {
  max-width: 40px;
  margin-right: 10px;
}

.nav {
  display: flex;
  gap: 20px;
}

.search input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Hero section styles */
/* ... */

/* Top products section styles */
/* ... */

/* Blog section styles */
/* ... */

/* Footer styles */
.footer {
  background-color: #333333;
  color: #ffffff;
  padding: 40px 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-nav {
  flex: 1;
  margin-right: 20px;
}

.footer-nav a {
  display: block;
  margin-bottom: 10px;
  color: #ffffff;
  text-decoration: none;
}

.subscribe-form,
.contact-form {
  flex: 1;
  max-width: 300px;
}

.subscribe-form h4,
.contact-form h4 {
  font-size: 18px;
  margin-bottom: 10px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #cc5256;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #cc363a;
}
</style>
