import './Home.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slika1 from "./../assets/spiderman.jpg";
import slika2 from "./../assets/titanic.jpg";
import slika3 from "./../assets/pirates.jpeg";

function Home(){

    const movies = 
    [
      {
        picture:slika1,
        title:"Spiderman",
        production:"Marvel universe"
      },
      {
        picture:slika2,
        title:"Titanic",
        production:"Paramount pictures"
      },
      {
        picture:slika3,
        title:"Pirates of the Carribean",
        production:"Paramount pictures"
      }
    ];

    const available = 
    [
      {
        picture:"hp.jpg",
        title:"Harry Potter",
        duaration: "120min",
        genre: "Fantasy"
      },
      {
        picture:"joker.jpg",
        title:"The Joker",
        duaration: "120min",
        genre: "Fantasy"
      },
      {
        picture:"guardians.jpg",
        title:"Guardians of the Galaxy",
        duaration: "120min",
        genre: "Fantasy"
      },
      {
        picture:"jumanji.jpg",
        title:"Jumanji",
        duaration: "120min",
        genre: "Adventure"
      },
      {
        picture:"The_martian(1).jpg",
        title:"The Martian",
        duaration: "120min",
        genre: "Adventure"
      },
      {
        picture:"vd-046-star-wars-official-poster-ep7.jpg",
        title:"Star Wars",
        duaration: "120min",
        genre: "Science Fiction"
      },
      {
        picture:"bohemian-rhapsody-web.jpg",
        title:"Bohemian Rhapsody",
        duaration: "120min",
        genre: "Drama/Musical"
      },
      {
        picture:"LaLaLand.jpg",
        title:"LaLaLand",
        duaration: "120min",
        genre: "Musical"
      },
      {
        picture:"awdy.jpg",
        title:"Are we there yet",
        duaration: "120min",
        genre: "Comedy"
      },
      {
        picture:"maleficent.jpeg",
        title:"Maleficent",
        duaration: "120min",
        genre: "Fantasy"
      }
    ];

    const commingSoon=[
      {
        picture:"TheIntern.jpg",
        title:"The Intern",
        duaration: "120min",
        genre: "Comedy"
      },
      {
        picture:"Barbie.jpg",
        title:"Barbie",
        duaration: "120min",
        genre: "Comedy"
      },
      {
        picture:"theGodfather.jpg",
        title:"The Godfather",
        duaration: "120min",
        genre: "Adventure"
      },
      {
        picture:"ha1.jpg",
        title:"Home alone",
        duaration: "120min",
        genre: "Comedy"
      },
      {
        picture:"openhaimer.jpg",
        title:"Openhaimer",
        duaration: "120min",
        genre: "Science Fiction"
      },
      {
        picture:"mby.jpg",
        title:"Me before you",
        duaration: "120min",
        genre: "Romannce"
      },
      {
        picture:"ee.jpg",
        title:"Everything everything",
        duaration: "120min",
        genre: "Drama"
      },
      {
        picture:"hg.jpg",
        title:"Hunger games",
        duaration: "120min",
        genre: "Science fiction"
      }
    ]

    return(
        <div className='HomePage'>
          <Swiper  className="home mySwiper" id='home'
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          >
                {movies.map((movie,i)=>(
                  <SwiperSlide key={i} className='container'>
                      <img src={movie.picture} alt=''/>
                      <div className='home-text'>
                          <span>{movie.production}</span>
                          <h1> {movie.title} </h1>
                          <a href='#' className='btn'> Book now </a>
                          <a href='#' className='play'> <box-icon name='play' color="#FF2C1F" ></box-icon> </a>
                      </div>
                  </SwiperSlide>
                ))}
          </Swiper>

          { /*Movies */}

          
         

      <section className="movies" id = "movies">
        <h2 className = "heading"> Available movies </h2>
        <div className="movies-container">
        {available.map((movie,i)=>(
            <div key={i} className="box"> 
              <div className="box-img">
                <img src={movie.picture} alt=""/>
              </div>
              <h3> {movie.title} </h3>
              <span> {movie.duaration} | {movie.genre}</span>
            </div>
        ))}
          </div>
      </section>

      <section className="coming" id="coming">
      <h2 className="heading"> Coming soon </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="commingSoon mySwiper"
      >
          {commingSoon.map((movie,i)=>(
            <SwiperSlide key={i} className='slide'> 
              <div className='imageContainer'>
                <img src={movie.picture} alt=""/>
              </div>
              <h3> {movie.title} </h3>
              <span> {movie.duaration} | {movie.genre}</span>
          </SwiperSlide>
          ))} 
      </Swiper>
    </section>
    <section className = "newsletter" id = "newsletter"> 
        <h2> Subscribe To Get <br/> Newsletter</h2>
        
        <form action=""> 
          <input type="email" className="email" placeholder="Enter email...." required/>
          <input type="submit" value="Subscribe" className="btn"/>

        </form>
    </section>
    </div>
    )
}


export default Home;

