import { LoaderWrapper } from "./Loader.style";

const Loader = () => {
  return (
    <LoaderWrapper>
      Loading
      <span className="circle"></span>
      <span className="circle"></span>
      <span className="circle"></span>
    </LoaderWrapper>
  );
};

export default Loader;
