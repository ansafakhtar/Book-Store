export default (SomeFunc) => (req, res, next) => {
    Promise.resolve(SomeFunc(req, res, next)).catch(next);
  };
