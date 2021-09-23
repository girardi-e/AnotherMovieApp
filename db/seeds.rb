require 'json'
require 'open-uri'

Movie.destroy_all

url = 'https://tmdb.lewagon.com/movie/now_playing'

movies = JSON.parse(URI.open(url).read)['results']

movies.each do |movie|
  title = movie['original_title']
  overview = movie['overview']
  poster_url = "https://image.tmdb.org/t/p/w500#{movie['poster_path']}"
  rating = movie['vote_average']
  Movie.create(title: title, overview: overview, poster_url: poster_url, rating: rating)
end
