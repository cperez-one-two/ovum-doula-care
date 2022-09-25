<template>
  <div>
    <header-navbar />
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
};
</script>

<style></style>
