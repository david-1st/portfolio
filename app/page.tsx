import Button from "@/components/Button";

const Home = () => {
  return (
    <div className="w-full text-black font-mono flex-1 pt-10 pl-10">
      <h1 className="text-5xl transition hover:-translate-y-3 delay-200 hover:bg-gradient-to-r from-violet-200 via-neutral-200 to-blue-200 max-w-fit p-5 rounded-2xl">
        Я Давид - <br /> - Фронтенд Разработчик
      </h1>
      <Button text="Посты" />
    </div>
  );
};

export default Home;
