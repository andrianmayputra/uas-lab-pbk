<template>
  <div class="weather-container">
    <h1>Cuaca</h1>
    <div class="search-box">
      <input type="text" v-model="location" placeholder="Masukkan Lokasi" />
      <button @click="fetchWeather">Cari</button>
    </div>
    <div v-if="loading">Loading data...</div>
    <div v-else-if="weather">
      <p>{{ weather.name }}</p>
      <p>{{ weather.main.temp }}°C</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: '',
      weather: null,
      loading: false
    };
  },
  methods: {
    async fetchWeather() {
      if (this.location) {
        this.loading = true;
        try {
          const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${import.meta.env.VITE_APP_OPENWEATHER_API_KEY}&units=metric');
          if (!response.ok) {
            throw new Error('Lokasi tidak ditemukan');
          }
          this.weather = await response.json();
        } catch (error) {
          console.error(error);
        } finally {
          this.loading = false;
        }
      }
    }
  }
}
</script>

<style scoped>
.weather-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 20px;
}

.search-box {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-box input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  flex: 1;
}

.search-box button {
  padding: 10px;
  border: 1px solid #007BFF;
  border-radius: 0 5px 5px 0;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
}

.search-box button:hover {
  background-color: #0056b3;
}

div {
  text-align: left;
  margin-top: 20px;
}
</style>