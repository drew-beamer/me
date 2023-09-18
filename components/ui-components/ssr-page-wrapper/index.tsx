function SSRPageWrapper({ children }) {
  return (
    <div className="w-full max-w-[720px] px-8 md:px-0 flex flex-wrap mb-24 justify-center">
      {children}
    </div>
  );
}

export default SSRPageWrapper;
