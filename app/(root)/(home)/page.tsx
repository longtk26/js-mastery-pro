import Filter from "@/components/Filter/Filter";
import Search from "@/components/Search/Search";

const Page = () => {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <section className="flex-col justify-center mt-16 md:px-16 px-6">
        <div className="bg-banner bg-cover bg-center min-h-[274px] rounded-xl flex-center">
          <h1 className="text-white font-bold heading2 md:heading1 text-center">
            JavaScript Mastery Resources
          </h1>
        </div>
        <Search />
      </section>
      {/* Filters */}
      <Filter />
      {/* Popular */}
    </main>
  );
};

export default Page;
