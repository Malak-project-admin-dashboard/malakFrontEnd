import React from 'react';

function Statistics() {
  return (
    <div className="form__add__drug d-flex align-items-center justify-content-center">
  <form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        {/* Drug Name: */}
      </label>
      <input
       style={{width:"522px",height:"71px"}}
        ref={inputRef1}
        type="text"
        placeholder="   Drug Name:"
        className="form-control bg-light border-0"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        {/* Drug Description: */}
      </label>
      <input
       style={{width:"522px",height:"71px"}}
        placeholder="  Drug Description:"
        ref={inputRef2}
        type="text"
        className="form-control bg-light border-0"
        id="exampleInputPassword1"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        {/* Drug Image: */}
      </label>
      <input
       style={{width:"522px",height:"71px"}}
        ref={inputRef3}
        type="text"
        className="form-control bg-light border-0"
        placeholder="  Drug Image : "
        id="exampleInputPassword1"
      />
    </div>

    <button
      type="submit"
      style={{ color: "white", background: "#b58867", fontSize: "23px" }}
      className="btn  w-100 py-3 formOneSubmit"
      onClick={getDrugDataHandler}
    >
      Submit
    </button>
  </form>
</div>
  );
}

export default Statistics;