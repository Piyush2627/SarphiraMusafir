function MinimalInfoCard() {
  return (
    <div className="MinimalCard">
      <img
        src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="A log cabin"
      />
      <h2>
        <a href="/article/">Article</a>
      </h2>
      <p>Content</p>
    </div>
  );
}

export default MinimalInfoCard;
