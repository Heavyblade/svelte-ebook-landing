<script>
  import { FaqItem, Button } from "$components";
  import TwitterIcon from "$assets/icons/twitter.webp";

  const faqs = [
    {
      question: "What I will learn from this book?",
      answer:
        "Our refund policy allows you to request a full refund within 30 days of purchase, no questions asked. Simply contact our support team and we’ll process your request promptly.",
    },
    {
      question: "Can I get a refund if I don't like the book?",
      answer:
        "Our refund policy allows you to request a full refund within 30 days of purchase, no questions asked. Simply contact our support team and we’ll process your request promptly.",
    },
    {
      question: "Is this book suitable for beginners?",
      answer:
        "Our refund policy allows you to request a full refund within 30 days of purchase, no questions asked. Simply contact our support team and we’ll process your request promptly.",
    },
    {
      question: "How long will it take to finish the book?",
      answer:
        "Most readers complete the book in about two weeks, but you can go at your own pace.",
    },
    {
      question: "Do I need any prior experience to understand the material?",
      answer:
        "No prior experience is required. The book is designed for readers of all levels.",
    },
    {
      question: "Will I get updates if the book is revised?",
      answer:
        "Yes, all customers receive free updates whenever the book is revised.",
    },
  ];

  let questionCurrentlyExpanded = $state(-1);

  function onclick(index) {
    if (questionCurrentlyExpanded == index) {
      questionCurrentlyExpanded = -1;
      return;
    }
    questionCurrentlyExpanded = index;
  }
</script>

<section class="landing-page-section">
  <h2 class="mb-l">Frequently asqued question</h2>
  <div class="faq-container">
    {#each faqs as faq, index}
      <FaqItem
        {faq}
        isExpanded={index == questionCurrentlyExpanded}
        onclick={() => onclick(index)}
      />
    {/each}
  </div>
  <div class="additional-info mt-m">
    <Button class="mt-s">Buy Now</Button>
    <p class="mt-m">Any other questions?</p>
    <a href="http://google.com">
      <p>
        Hit me on twitter <img
          src={TwitterIcon}
          class="twitter-icon"
          alt="twitter link"
        />
      </p>
    </a>
  </div>
</section>

<style>
  .additional-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: grey;
  }

  .twitter-icon {
    width: 16px;
    height: 16px;
  }

  .additional-info a {
    text-decoration: underline;
  }
</style>
