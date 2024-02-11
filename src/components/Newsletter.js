const Newsletter = () => {
  return (
    <div class="bg-[#FFF8E3] p-10 ">
      <div class="w-fit mx-auto bg-white p-10 rounded-lg shadow-md">
        <h1 class="text-2xl font-bold mb-4">The Monthly Digest Newsletter</h1>
        <form action="#" method="post" class="flex">
          <input
            type="email"
            name="email"
            id="email"
            class="w-96 border rounded py-2 px-3 mr-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email address"
          />
          <button
            type="submit"
            class="bg-[#45FFCA] text-black py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
        <p class="mt-4 text-gray-600 text-sm">Stay connected our best offers</p>
      </div>
    </div>
  );
};

export default Newsletter;
