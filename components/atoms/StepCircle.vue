<template>
  <span class="step-circle"></span>
</template>



<style lang="scss" scoped>
.step-circle {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #cecece;
  box-sizing: border-box;
  margin-right: 0.5rem;
  &.with-line{
      &::before {
      content: "";
      position: absolute;
      border: 1px dashed #cecece;
      height: 50px;
      z-index: 1;
      transform: translate(700%, -90%);
    }
  }
  &.primary {
    background-color: color('primaryLight', 'base');
    &.with-line {
      &::before {
        border: 1px dashed color('primaryLight', 'base');
      }
    }
  }
  &.secondary {
    background-color: color('secondary', 'lightest');
    &.with-line {
      &::before {
        border: 1px dashed color('secondary', 'lightest');
      }
    }
  }
  &.tertiary {
    background-color: color('tertiary', 'base');
    &.with-line {
      &::before {
        border: 1px dashed color('tertiary', 'base');
      }
    }
  }
  &.finish {
    background-color: #2ED47A;
    &.with-line {
      &::before {
        border: 1px dashed #2ED47A;
      }
    }
  }
}
</style>