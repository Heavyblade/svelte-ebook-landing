<script>
  const chapters = [
    {
      number: 1,
      title: "Whatever",
      strapline: "Understanding visas, residency, and Legal Essentials",
      excerpt:
        "When applying for a Spain visa (typically a Schengen visa), keep these key considerations in mind: Start the process early, ideally 3-6 months before travel, as appointment slots at consulates fill up quickly. You'll need a valid passport with at least two blank pages and validity extending 3+ months beyond your planned departure from the Schengen area. Prepare thorough documentation including proof of accommodation, a detailed travel itinerary, travel insurance with minimum EUR 30,000 coverage, proof of sufficient financial means (bank statements from the last 3-6 months), and employment/income verification. If you're applying for a work or residence visa (non-tourist), requirements are significantly more complex and may include a job offer from a Spanish employer, background checks, and apostilled documents translated into Spanish by a sworn translator. Processing times vary (typically 15-45 calendar days for short-stay visas, longer for residence permits), and decisions can be unpredictable, so avoid booking non-refundable flights or accommodation until your visa is approved. Finally, be aware that Spain processes many applications through BLS International or VFS Global centers rather than directly at the consulate, so check which entity handles applications in your country.",
    },
    {
      number: 2,
      title: "Findinding your dream Home in Spain",
      strapline: "Finding your dream Home in Spain",
      excerpt:
        "When applying for a Spain visa (typically a Schengen visa), keep these key consideratians",
    },
    {
      number: 3,
      title: "Working and Finances",
      strapline: "Managing your career and money in Spain",
      excerpt:
        "Whether you're a remote worker, freelancer, or seeking local employment, understanding Spain's financial landscape is essential. From opening a bank account and understanding the tax system (including the Beckham Law for new residents) to navigating social security contributions and pension planning, this chapter covers everything you need to manage your finances effectively while living in Spain.",
    },
    {
      number: 4,
      title: "Healthcare and Daily Life",
      strapline: "Navigating the Spanish healthcare system and settling in",
      excerpt:
        "Spain boasts one of Europe's best public healthcare systems, but accessing it as an expat requires knowing the right steps. This chapter walks you through registering for public healthcare, choosing private insurance options, finding English-speaking doctors, and understanding prescription processes. We also cover everyday essentials like setting up utilities, getting a mobile phone plan, and integrating into your local community.",
    },
  ];

  let selectedChapterNumber = $state(3);
  let selectedChapter = $derived(chapters[selectedChapterNumber - 1]);

  function selectChapter(chapter) {
    selectedChapterNumber = chapter.number;
  }
</script>

<section class="landing-page-section default-margin">
  <h2 class="mb-l">What are you getting</h2>
  <div class="chapter-container">
    <ul>
      {#each chapters as chapter}
        <li>
          <button
            class="chapter-title"
            class:selected-chapter-title={selectedChapterNumber ===
              chapter.number}
            aria-controls={`chapter-info-${chapter.number}`}
            aria-expanded={selectedChapterNumber === chapter.number}
            onclick={() => selectChapter(chapter)}
          >
            <h3>
              Chapter {chapter.number}: {chapter.title}
            </h3>
          </button>
        </li>
      {/each}
    </ul>
    <div class="chapter-info">
      <h3 class="chapter-strapline italic mb-s">
        {selectedChapter.strapline}
      </h3>
      <p>{selectedChapter.excerpt}</p>
    </div>
  </div>
</section>

<style>
  .chapter-container {
    display: flex;
    justify-content: space-between;
  }

  .chapter-container ul {
    width: 40%;
  }

  .chapter-info {
    width: 55%;
  }

  .chapter-title {
    border-bottom: 1px solid grey;
    width: 100%;
    display: block;
    padding: 12px;
    text-align: left;
  }

  .selected-chapter-title {
    background-color: black;
    border: none;
    color: white;
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.08);
  }
</style>
