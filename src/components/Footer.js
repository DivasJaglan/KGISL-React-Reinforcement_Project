const Footer = () => {
  return (
    <section
      id="footer"
      style={{ backgroundColor: "#f8f9fa", padding: "3rem 1rem" }}
    >
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Get in Touch</h2>
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto 2rem auto",
            fontSize: "1rem",
            color: "#6c757d",
          }}
        >
          I’d love to hear from you! Whether it’s a project, job opportunity, or
          just a chat. Feel free to reach out.
        </p>
        <form
          action="#"
          method="post"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1rem",
              border: "1px solid #ced4da",
              borderRadius: "5px",
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1rem",
              border: "1px solid #ced4da",
              borderRadius: "5px",
            }}
          />
          <textarea
            placeholder="Your Message"
            required
            rows="5"
            style={{
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1rem",
              border: "1px solid #ced4da",
              borderRadius: "5px",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>
      </div>

      <footer
        style={{
          backgroundColor: "#343a40",
          color: "#fff",
          padding: "2rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              margin: "0 0.5rem",
              color: "#adb5bd",
              textDecoration: "none",
            }}
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              margin: "0 0.5rem",
              color: "#adb5bd",
              textDecoration: "none",
            }}
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              margin: "0 0.5rem",
              color: "#adb5bd",
              textDecoration: "none",
            }}
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p style={{ fontSize: "0.875rem", color: "#adb5bd" }}>
          © 2024 Divas Jaglan. All Rights Reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "none",
            border: "none",
            color: "#adb5bd",
            cursor: "pointer",
          }}
        >
          Back to Top
        </button>
      </footer>
    </section>
  );
};

export default Footer;
