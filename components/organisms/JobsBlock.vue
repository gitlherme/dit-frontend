<template>
  <div class="flex flex-column gap-2 md:col-span-12 mt-16 md:mt-32 md:grid md:grid-cols-12 md:gap-x-4">
    <h2 class="col-span-12">Em andamento</h2>
    <div class="jobs col-span-6 md:grid md:grid-cols-12 items-center">
      <div class="col-span-6">
        <div class="job-item flex gap-4 mt-8">
          <div class="icon">
            <font-awesome-icon :icon="['fab', 'atlassian']" />
          </div>
          <div class="text">
            <JobTag status="Pendente" localization="Suz - SP" type="pending" />
            <p>Front-end Jr.</p>
          </div>
        </div>
        <div class="job-item flex gap-4 mt-8">
          <div class="icon">
            <font-awesome-icon :icon="['fab', 'discord']" />
          </div>
          <div class="text">
            <JobTag
              status="Selecionado"
              localization="Suz - SP"
              type="selected"
            />
            <p>Front-end Jr.</p>
          </div>
        </div>
        <div class="job-item flex gap-4 mt-8">
          <div class="icon">
            <font-awesome-icon :icon="['fab', 'apple']" />
          </div>
          <div class="text">
            <JobTag status="Aprovado" localization="Suz - SP" type="approved" />
            <p>Front-end Jr.</p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <div class="job-item flex gap-4 mt-8">
          <div class="icon">
            <font-awesome-icon :icon="['fab', 'atlassian']" />
          </div>
          <div class="text">
            <JobTag status="Pendente" localization="Suz - SP" type="pending" />
            <p>Front-end Jr.</p>
          </div>
        </div>
        <div class="job-item flex gap-4 mt-8">
          <div class="icon">
            <font-awesome-icon :icon="['fab', 'discord']" />
          </div>
          <div class="text">
            <JobTag
              status="Selecionado"
              localization="Suz - SP"
              type="selected"
            />
            <p>Front-end Jr.</p>
          </div>
        </div>
        <div class="job-item flex gap-4 mt-8">
          <div class="icon">
            <font-awesome-icon :icon="['fab', 'apple']" />
          </div>
          <div class="text">
            <JobTag status="Aprovado" localization="Suz - SP" type="approved" />
            <p>Front-end Jr.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="suggest-card col-span-3">
      <ImageCard
        src="https://media.discordapp.net/attachments/708879497365159956/865708841320185867/pexels-william-fortunato-6140930.jpg?width=686&height=671"
        tag="desafios"
        title="Faça esses desafios e aumente suas chances"
      />
    </div>
    <div class="finish-profile col-span-3">
      <SquareCardText
        firstLine="SEU PERFIL ESTÁ"
        secondLine="70%"
        thirdLine="COMPLETO"
        color="#30ADF3"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.jobs {
  background-color: color('light', 'darkest');
  padding: 1rem;
  border-radius: 0.5rem;
  .job-item {
    .icon {
      svg {
        width: 64px;
        height: 64px;
      }
    }
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: initial;
    }
    p {
      font-size: 1.25rem;
      margin-top: 0.5rem;
    }
  }
}
</style>
