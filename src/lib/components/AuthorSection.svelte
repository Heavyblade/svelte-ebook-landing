<script>
  import authorPic from "$assets/profile_pic.jpg";
</script>

<section class="landing-page-section">
  <h2 class="mb-l">About the author</h2>

  <div class="author-container">
    <div class="author-text">
      <p>
        John Doe is a seasoned software engineer with over 15 years of
        experience in the tech industry. He has worked at several leading
        companies, contributing to the development of innovative software
        solutions. John is passionate about sharing his knowledge and has been a
        mentor to many aspiring developers.
      </p>
      <p>
        In addition to his professional work, John is an avid writer and has
        published numerous articles on software development, best practices, and
        emerging technologies. He is also a frequent speaker at industry
        conferences and enjoys engaging with the developer community.
      </p>
    </div>
    <img src={authorPic} alt="" />
  </div>
</section>

<style>
  .author-container {
    display: flex;
    justify-content: space-between;
  }

  .author-container img {
    width: 40%;
    border: 6px solid black;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
  }

  .author-text {
    width: 55%;
  }

  /* .author-text p:not(:last-of-type) {
    margin-bottom: 8px;
  } */
</style>
