<template>
  <div class="technical-knowledge">
    <h2 class="mb-4">Conhecimento Técnico</h2>
    <div class="technical-knowledge__block light-block grid grid-cols-12">
      <div class="technical-knowledge__block-bg col-span-2">
        <img
          src="https://images.unsplash.com/photo-1549554693-8cc8215745fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
        />
      </div>
      <div
        class="technical-knowledge__block-content col-span-10 grid grid-cols-12"
      >
        <div class="col-span-6 p-6">
          <TechnicalKnowledgeItem
            title="HTML5"
            description="Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Ad, placeat. A, excepturi.
        Distinctio voluptas consequuntur hic a. Tempora molestiae, architecto
        tenetur quia, officia nam minus neque fugiat amet odio eveniet."
          />
          <TechnicalKnowledgeItem
            title="HTML5"
            description="Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Ad, placeat. A, excepturi.
        Distinctio voluptas consequuntur hic a. Tempora molestiae, architecto
        tenetur quia, officia nam minus neque fugiat amet odio eveniet."
          />
          <TechnicalKnowledgeItem
            title="HTML5"
            description="Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Ad, placeat. A, excepturi.
        Distinctio voluptas consequuntur hic a. Tempora molestiae, architecto
        tenetur quia, officia nam minus neque fugiat amet odio eveniet."
          />
        </div>
        <div class="col-span-6 p-6">
          <TechnicalKnowledgeItem
            title="HTML5"
            description="Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Ad, placeat. A, excepturi.
        Distinctio voluptas consequuntur hic a. Tempora molestiae, architecto
        tenetur quia, officia nam minus neque fugiat amet odio eveniet."
          />
          <TechnicalKnowledgeItem
            title="HTML5"
            description="Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Ad, placeat. A, excepturi.
        Distinctio voluptas consequuntur hic a. Tempora molestiae, architecto
        tenetur quia, officia nam minus neque fugiat amet odio eveniet."
          />
          <TechnicalKnowledgeItem
            title="HTML5"
            description="Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Ad, placeat. A, excepturi.
        Distinctio voluptas consequuntur hic a. Tempora molestiae, architecto
        tenetur quia, officia nam minus neque fugiat amet odio eveniet."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.technical-knowledge {
  .technical-knowledge__block {
    padding: 0;
    margin: 0;
    .technical-knowledge__block-bg {
      img {
        border-radius: 0.5rem 0 0 0.5rem;
      }
    }
  }
}
</style>
