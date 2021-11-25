<template>
  <div class="posts col-span-12 mt-16 md:mt-32">
    <h2>Postagens Recomendadas</h2>
    <div class="posts-cards flex flex-column gap-2 md:grid md:grid-cols-4 md:gap-4">
      <ImageCard
        src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
        tag="currículo"
        title="O que pode estar faltando no seu currículo"
      />
      <ImageCard
        src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        tag="linkedIn"
        title="Aprenda a organizar seu LinkedIn para melhores resultados"
      />
      <ImageCard
        src="https://images.unsplash.com/photo-1545665277-5937489579f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        tag="portfólio"
        title="Saiba o que é necessário mostrar no seu portfólio."
      />
      <ImageCard
        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        tag="cursos"
        title="Tecnogueto disponibiliza curso de programação gratuitamente."
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.posts-cards {
  height: 100%;
}
</style>
