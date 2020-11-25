<template functional>
  <div id="app" class="Renderer">
    <component
      v-for="comp in props.__injected"
      :key="comp.id"
      :is="comp.name"
      v-bind="{ ...comp.data }"
    >default slot contents</component>
  </div>
</template>
