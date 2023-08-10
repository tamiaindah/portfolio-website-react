const EmailSection = () => {
  const email = "tamiaindah66000@gmail.com";
  return (
    <div className="marquee-email">
      <div className="container">
        <marquee className="email">
          <ul>
            <li>{email}</li>
            <li>{email}</li>
            <li>{email}</li>
          </ul>
        </marquee>
      </div>
    </div>
  );
};

export default EmailSection;
