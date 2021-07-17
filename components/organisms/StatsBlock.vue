<template>
  <div class="stats col-span-12 grid grid-cols-12 gap-x-4">
    <div class="avatar col-span-3">
      <ImageRounded
        src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      />
      <Button
        type="text"
        buttonClass="secondary"
        value="Seus Currículos"
      ></Button>
    </div>
    <div class="number-stats light-block col-span-5">
      <h3>Seus stats</h3>
      <div class="number-stats">
        <StatsItem color="#30ADF3" label="Viram seu perfil" number="8" />
        <StatsItem color="#2ED47A" label="Candidaturas enviadas" number="5" />
        <StatsItem color="#E5A11E" label="Entrevistas agendadas" number="3" />
      </div>
      <div class="icons-stats">
        <IconTextButton color="#C32236" icon="bell" title="5 notif." />
        <IconTextButton color="#202946" icon="heart" title="3 gostaram" />
        <IconTextButton color="#202946" icon="bookmark" title="1 salvou" />
      </div>
    </div>
    <div class="suggest-card col-span-4">
      <ImageCard
        src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80"
        tag="Entrevistas"
        title="Veja como agendamos as suas entrevistas"
        class="text-opacity-80"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
button {
  width: 100%;
  margin-top: 1rem;
  font-weight: 700;
  height: 45px;
  font-size: 1.25rem;
}

.icons-stats {
  display: flex;
  gap: 3rem;
}
</style>
