<template>
  <div
    class="footer-parent-container mx-4 flex min-h-[200px] flex-col items-center justify-start gap-2 py-6"
  >
    <p class="text-center text-sm italic text-white/70">
      Like what you see or have feedback?
    </p>
    <h3 class="mt-2 mb-8 text-center text-3xl font-black text-white">
      Connect with me!
    </h3>
    <div class="flex items-center justify-evenly gap-8 text-white">
      <a href="mailto:salamehh@msu.edu" target="blank" class="underline"
        >salamehh@msu.edu</a
      >
      <div class="flex items-center gap-2">
        <img
          src="@/assets/phone-icon.svg"
          alt="footer phone icon"
          class="h-10 w-10"
        />
        <p>(989) 992-3416</p>
      </div>
    </div>
    <hr class="my-6 w-full text-center opacity-20" />
    <div class="socials flex items-center gap-6 text-3xl text-white/90">
      <i
        class="fa fa-linkedin flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#1b1f22]"
      ></i>
      <i class="fa fa-github text-5xl"></i>
    </div>
    <p class="mt-4 text-sm text-white/40">&copy; 2022 - Hisham Salameh</p>
  </div>
</template>
