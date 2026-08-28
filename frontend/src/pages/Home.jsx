import fourCheeseGnocchi from "../assets/four-cheese-gnocchi.jpg";
import RecipeItems from "../components/RecipeItems";

export default function Home() {
    return (
        <>
            <section className="home">
                <div className="left">
                    <h1>Food Recipe</h1>
                    <article>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English.
                    </article>
                    <button>Share your recipe</button>
                </div>
                <div className="right">
                    <img
                        src={fourCheeseGnocchi}
                        alt="four-cheese-gnocchi"
                        width={320}
                        height={300}
                    />
                </div>
            </section>

            <div className="bg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#d4f6e8"
                        fillOpacity="1"
                        d="M0,128L48,133.3C96,139,192,149,288,138.7C384,128,480,96,576,101.3C672,107,768,149,864,149.3C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>

            <div className="recipe">
                <RecipeItems />
            </div>
        </>
    );
}
