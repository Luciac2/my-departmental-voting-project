function Pageerror() {
  return (
    <div className="h-screen -mt-16 -mb-12 flex flex-col justify-center items-center text-primary opacity-40 text-blue-900">
      <h1 className="font-bold text-[13em] leading-tighter">404</h1>
      <h3 className="font-semibold text-6xl pb-10">Page Not Found</h3>
      <p className="text-4xl leading-snug text-center">
        Check if there is typo in your spelling
      </p>
    </div>
  );
}

export default Pageerror;
