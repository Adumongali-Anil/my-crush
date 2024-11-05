function showMovie() {
    const movies = [
      "Romantic Comedy: You've Got Mail",
      "Action Adventure: Indiana Jones",
      "Fantasy: Harry Potter",
      "Sci-Fi: Interstellar",
      "Classic: The Sound of Music"
    ];
    
    const randomIndex = Math.floor(Math.random() * movies.length);
    const movieSuggestion = movies[randomIndex];
    
    document.getElementById("movie-result").innerHTML = "How about watching: <h3><span style='color: #FF69B4'>" + movieSuggestion + "?</span></h3>";
  }

  function myGift(){
    window.location.href = "gift.html";
    
  }
  onload = () => {
    document.body.classList.remove("container");
  };