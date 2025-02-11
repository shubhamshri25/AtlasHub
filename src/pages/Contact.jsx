const Contact = () => {
  const handleFormSubmit = (formData) => {
    //  formData contains key-value pairs of form inputs

    // formData.entries() is a method that returns an iterator containing all the key-value pairs in the FormData object.

    // The Object.fromEntries() method converts an iterator (like the one returned by formData.entries()) into a plain JavaScript object.

    // console.log(formData.entries());

    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="enter your name"
            name="username"
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter you email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
