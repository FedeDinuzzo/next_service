const Loading = () => {
  return (
    <div
      className="min-h-[72vh] w-full"
      aria-busy="true"
      aria-live="polite"
    >
      <span className="sr-only">Cargando</span>
    </div>
  );
};

export default Loading;
