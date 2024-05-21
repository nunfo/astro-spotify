<!-- Componente de Svelte que muestra un saludo dependiendo de la hora del día. -->
<script lang="ts">
  const currentTime = new Date()
  const currentHour = currentTime.getHours()

  let greeting = ''

  if (currentHour > 6 && currentHour < 12) {
    greeting = "¡Buenos días!"
  } else if (currentHour < 20) {
    greeting = '¡Buenas tardes!'
  } else {
    greeting = '¡Buenas noches!'
  }
</script>

<h1 class="text-4xl font-bold">{greeting}</h1>