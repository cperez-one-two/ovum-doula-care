<template>
  <!-- hero -->
  <section
    class="w-full grid grid-cols-1 grid-rows-2 h-11/12 bg-off-white"
    id="hero"
  >
    <div class="relative col-start-1 row-start-1 row-span-2">
      <g-image
        src="../assets/birth-v2-1.jpeg"
        class="absolute object-cover w-full h-full opacity-50 lg:object-left"
      />
      <!-- <div class="absolute w-full h-full bg-gradient-to-t from-off-white"></div> -->
    </div>
    <div
      class="z-20 self-end px-4 pt-4 pb-20 text-gray-50 text-opacity-90 col-start-1 row-start-1 md:ml-10 xl:ml-36 md:justify-self-start"
    >
      <h1
        class="py-5 font-mono text-5xl text-center md:text-left md:text-6xl lg:text-7xl"
      >
        Ovum Doula Care
      </h1>
      <p class="pb-4 text-xl text-center md:text-left md:text-2xl">
        Pregnancy, Birth, Postpartum, and Menstrual Cycle Support
      </p>
    </div>
    <div
      class="z-20 self-end px-4 pb-5 text-gray-50 col-start-1 row-start-2 md:ml-10 xl:ml-36 md:justify-self-start"
    >
      <p class="mt-2 text-xl font-bold text-center md:text-left">
        Now booking for October
      </p>
      <div class="text-lg text-center cta md:text-left">
        <a
          href="#about"
          class="inline-block px-3 py-1 mt-2 bg-white border-2 border-transparent rounded border-opacity-40 bg-opacity-20 hover:bg-yellow hover:border-opacity-40 transition ease-in duration-130 text-gray-50"
          >Learn More</a
        >
        <a
          class="inline-block px-3 py-1 mt-2 ml-2 border-2 border-yellow-900 rounded border-opacity-40 hover:border-transparent hover:border-opacity-40 hover:bg-yellow hover:text-gray-50 transition ease-in duration-130 text-opacity-50"
          href="#contact"
          >Contact</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
