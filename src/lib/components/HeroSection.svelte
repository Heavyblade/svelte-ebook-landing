<script>
  import bookCover from "$assets/book_cover.png";
  import phoneCover from "$assets/phone_cover.png";
  import Button from "./Button.svelte";

  let { children } = $props();
</script>

<section class="hero">
  <div class="hero-showcase text-center bold">
    <h1 class="purple">Move to</h1>
    <h1 class="purple mb-xs">Spain</h1>
    <h4 class="italic semi-bold">
      There's no need to make the same mistakes I made.
    </h4>
    <img class="book-cover" src={bookCover} alt="Book cover" />
    <img class="phone-cover" src={phoneCover} alt="Book cover" />
  </div>
  <div class="hero-text white text-center">
    {#if children}
      {@render children()}
    {:else}
      <h1>This ebook will</h1>
      <h1>Save you money,</h1>
      <h1 class="mb-m">Time & Nerves</h1>
      <p class="light-gray mb-l">
        I moved to Spain in 2018 and I wish I had this ebook back then. It would
        have saved me a lot of money, time and nerves. I made a lot of mistakes
        that could have been easily avoided if I had the right information.
      </p>
      <Button>Purchase this Ebook for USD 10</Button>
    {/if}
  </div>
</section>

<style>
  .hero {
    display: flex;
    height: 100vh;
    overflow-y: hidden;
  }

  .hero-showcase {
    position: relative;
    width: 50%;
    padding: 100px 16px 0 16px;
    background: linear-gradient(
      135deg,
      #e2cbff,
      #e2cbff 25%,
      #deeaff 50%,
      #ece5ff 75%,
      #927bce
    );
  }

  .hero-text {
    padding: 100px 5%;
    width: 50%;
    background-color: black;
  }

  .book-cover {
    position: absolute;
    right: 2%;
    bottom: 0;
    width: 65%;
    transform: translateY(30%);
  }

  .phone-cover {
    position: absolute;
    width: 35%;
    bottom: 0;
    right: 52%;
    transform: translateY(25%);
  }
</style>
