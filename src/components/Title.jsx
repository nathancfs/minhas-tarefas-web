function Title(props) {
  return (
    <h1 className="text-3xl text-slate-100 font-bold text-center pl-12">
      {props.children}
    </h1>
  );
}

export default Title;
