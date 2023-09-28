import Link from "next/link";
import HomeSectionsHeading from "./HomeSectionsHeading";

const news = [
  {
    title: "Faculty of Sciences acquires new materials for students",
    image: "",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis quos, dolor voluptates assumenda voluptatem maiores natus recusandae quas ullam nihil obcaecati dignissimos, nemo fugit consequuntur nulla totam iste doloremque provident esse voluptas odit repudiandae. Ipsa, incidunt. Optio, vitae! Et eos eaque asperiores, assumenda dolorem suscipit? Ullam maxime at, nam sed aut totam molestiae quod labore, ex similique quis facere exercitationem odio assumenda esse quidem voluptas, maiores eos quisquam. Dolorem similique inventore provident ab maiores repudiandae nisi, sit quas minima autem id, nesciunt nam enim laudantium ullam iste laboriosam magni esse. Distinctio officia fugiat sapiente corrupti possimus? Dolores, minima provident!",
    Date: new Date(),
  },
  {
    title: "Nineteen students  awarded scholarship",
    image: "",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis quos, dolor voluptates assumenda voluptatem maiores natus recusandae quas ullam nihil obcaecati dignissimos, nemo fugit consequuntur nulla totam iste doloremque provident esse voluptas odit repudiandae. Ipsa, incidunt. Optio, vitae! Et eos eaque asperiores, assumenda dolorem suscipit? Ullam maxime at, nam sed aut totam molestiae quod labore, ex similique quis facere exercitationem odio assumenda esse quidem voluptas, maiores eos quisquam. Dolorem similique inventore provident ab maiores repudiandae nisi, sit quas minima autem id, nesciunt nam enim laudantium ullam iste laboriosam magni esse. Distinctio officia fugiat sapiente corrupti possimus? Dolores, minima provident!",
    Date: new Date(),
  },
  {
    title: "Uniabuja Vice chancellor visits the faculty",
    image: "",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis quos, dolor voluptates assumenda voluptatem maiores natus recusandae quas ullam nihil obcaecati dignissimos, nemo fugit consequuntur nulla totam iste doloremque provident esse voluptas odit repudiandae. Ipsa, incidunt. Optio, vitae! Et eos eaque asperiores, assumenda dolorem suscipit? Ullam maxime at, nam sed aut totam molestiae quod labore, ex similique quis facere exercitationem odio assumenda esse quidem voluptas, maiores eos quisquam. Dolorem similique inventore provident ab maiores repudiandae nisi, sit quas minima autem id, nesciunt nam enim laudantium ullam iste laboriosam magni esse. Distinctio officia fugiat sapiente corrupti possimus? Dolores, minima provident!",
    Date: new Date(),
  },
];

const FacultyNews = () => {
  return (
    <div className=" bg-white py-10 px-4 min-h-[500px]">
      <div id="news" className="absolute -top-[80px] md:-top-[126px]"></div>
      <div className="mx-auto max-w-5xl">
        <HomeSectionsHeading
          text="Faculty News"
          style="text-slate-950 after:bg-slate-950"
        />

        <div className="my-6 max-w-2xl">
          {news.map((ne) => {
            return (
              <div className="my-6 border-b-2 py-2">
                <Link href="#">
                  <h1 className="inline-block py-3 font-semibold uppercase  text-[20px] hover:underline underline-offset-4 duration-300">
                    {ne.title}
                  </h1>
                </Link>
                <p className="text-justify leading-6">
                  {ne.content.slice(0, 200)}...
                </p>
                <h2 className="text-right pt-3">
                  {ne.Date.toLocaleDateString()}
                </h2>
              </div>
            );
          })}
        </div>

        <Link href="#">
          <button className="border border-slate-950 text-slate-950 py-2 px-4 hover:scale-110 duration-300 ">
            More news
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FacultyNews;
