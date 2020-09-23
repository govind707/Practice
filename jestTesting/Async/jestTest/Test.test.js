
const fetchData = (callback) => {
    const txt = "Govind Singh";
    return (
        setTimeout(() => {
            return callback(txt);
        },2000)
    );
};

test('the data is Govind Singh', done => {
    function callback(data) {
      try {
        expect(data).toBe('Govind Singh');
        done();
      } catch (error) {
        done(error);
      }
    }
  
    fetchData(callback);
  });