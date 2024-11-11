function App() {
  return (
    <section className="homepage">
      <h1 className="cursive">Vizion Productions</h1>
      <ul className="nav-list">
        <li>
          <a
            className="nav-button "
            href="https://open.spotify.com/artist/5Ys7awDmOoHvySeMkX9nMI?si=iw4ujCDXSTCY-9ZdKU7RkQ"
          >
            Spotify
          </a>
        </li>
        <li>
          <a
            className="nav-button"
            href="https://music.apple.com/us/artist/prince-monarch/1770440165"
          >
            Apple Music
          </a>
        </li>
      </ul>
      <section className="section-flex">
        <section className="collumn-flex">
          <section className="equipment-section">
            <h2>Equipment</h2>
            <ul>
              <li>Drumkit and drum mics</li>
              <li>Sm58 dynamic and Rhode condenser vocal mics</li>
              <li>Electric guitar</li>
              <li>Acoustic guitar</li>
              <li>Bass guitar</li>
              <li>Korg Modwave synth</li>
              <li>Midi keyboard</li>
              <li>Ableton Live DAW</li>
            </ul>
          </section>
          <section className="contact-section">
            <h2>Contact</h2>
            <ul>
              <li>Email: Tmcarron7@gmail.com</li>
              <li>
                Instagram:{" "}
                <a href="https://www.instagram.com/monarch_1483/">
                  @monarch_1483
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section className="about-section">
          <h2>About</h2>
          <p>Hello, I'm Prince Monarch</p>
          <p>
            I'm a strong believer and follower of artistic vision. My goal is to
            most accurately create YOUR artistic vision. With my expertise and
            equipment, we can make something really cool.
          </p>
        </section>
      </section>
    </section>
  );
}

export default App;
