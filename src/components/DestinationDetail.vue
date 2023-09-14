<template>
  <div class="destination-detail">
    <h2>{{ destination.name }}</h2>
    <img :src="destination.images.png" alt="Destination Image">
    <p>{{ destination.description }}</p>
    <p>Distance: {{ destination.distance }}</p>
    <p>Travel Time: {{ destination.travel }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import data from '../data.json '

const destination = ref({});

onMounted(() => {
  const destinationName = $route.params.name;
  // Faça uma solicitação para o arquivo data.json aqui e carregue os dados do destino
  // Substitua este trecho pelo código real de solicitação de dados
  const data = {
    destinations: [
      // ... (seu array de destinos)
    ]
  };

  const selectedDestination = data.destinations.find(dest => dest.name === destinationName);

  if (selectedDestination) {
    destination.value = selectedDestination;
  }
});

</script>

<style>

</style>
