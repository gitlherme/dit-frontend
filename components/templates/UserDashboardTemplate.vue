<template>
  <div class="container col-span-12">
    <TitleWithMark text="Olá, Ana!" class="col-span-12" />
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
    <div class="col-span-12 mt-32 grid grid-cols-12 gap-x-4">
      <h2 class="col-span-12">Em andamento</h2>
      <div class="jobs col-span-6 grid grid-cols-12 items-center">
        <div class="col-span-6">
          <div class="job-item flex gap-4 mt-8">
            <div class="icon">
              <font-awesome-icon :icon="['fab', 'atlassian']" />
            </div>
            <div class="text">
              <JobTag
                status="Pendente"
                localization="Suz - SP"
                type="pending"
              />
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
              <JobTag
                status="Aprovado"
                localization="Suz - SP"
                type="approved"
              />
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
              <JobTag
                status="Pendente"
                localization="Suz - SP"
                type="pending"
              />
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
              <JobTag
                status="Aprovado"
                localization="Suz - SP"
                type="approved"
              />
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
    <div class="posts col-span-12 mt-32">
      <h2>Postagens Recomendadas</h2>
      <div class="posts-cards grid grid-cols-4 gap-4">
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
  </div>
</template>

<script></script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

h2,
h3 {
  margin-bottom: 1.5rem;
}

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

.posts-cards {
  height: 100%;
}

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
