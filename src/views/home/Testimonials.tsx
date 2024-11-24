import styles from './Home.module.scss'

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className={`fullViewSection ${styles.viewContent} ${styles.Testimonials}`}>
      <h1>Testimonials</h1>
      <div className={styles.testimonialContainer}>
        <article className="card">
          <p>
            "Sensei Anthony Camal was far more than a Sensei to me; he was a
            guiding light, a mentor, and an unwavering source of inspiration.
            From the moment I stepped into his dojo, I found in him a figure of
            wisdom and strength—a person I not only respected but deeply
            admired. His mastery of martial arts was evident, but what truly set
            him apart was his ability to see potential in others and nurture it
            with patience and care. Sensei Camal's influence on my life extended
            far beyond the physical aspects of training. He taught me
            discipline, resilience, and the importance of humility. In countless
            moments, he was there—guiding me through challenges, both on and off
            the mat, with a calm presence and steadfast support. Whether I
            struggled with self-doubt or faced personal trials, his words and
            actions always reminded me of my strength and capacity to overcome.
            What made Sensei Camal truly remarkable was his selflessness. He
            invested in me not only as a student but as a person, instilling
            values that I carry with me to this day. His mentorship shaped my
            character, my perspective on life, and my commitment to being the
            best version of myself. I will forever cherish Sensei Camal in my
            heart. His legacy lives on in the lessons he taught me, and I am
            committed to honoring him by striving to be the same kind of sensei
            to my own students, one who leads with compassion, integrity, and
            the desire to uplift others. Sensei Camal's impact is immeasurable,
            and his spirit will continue to guide me as I walk this path. He was
            more than a sensei, he was a true mentor and an extraordinary human
            being, and I am forever grateful to have had him in my life."
          </p>
          <p className="citation">Davit Arakelyan</p>
        </article>
        <section>
          {/* <div> */}
          <article className="card">
            <p>
              “Sensei Camal, he was a dad I never had. He taught me to always
              stay strong and never give up because we are judoka. He's the
              strongest person I know and without him I'll never be who I am
              today without him.”
            </p>
            <p className="citation">EJ Montero</p>
          </article>
          {/* </div> */}
          <article className="card">
            <p>
              "Sensei Camal transformed my life in ways nobody else could. From
              the moment I stepped onto the mat, he saw potential in me that I
              overlooked. The tenacity in his work ethic pushed me to challenge
              myself and step out of my comfort zone to limits I never thought I
              could. Through Tony's guidance, I developed a strong sense of
              confidence and resilience, learning that failure is not the end,
              but a stepping stone to success and to correct my mistakes. Sensei
              Camal fostered a supportive environment where I felt empowered to
              grow as I learned discipline, respect, and perseverance. His
              gentle heart felt like the bond of a father and son to me.
              Cherishing all the feelings, sweat, tears, and pain together on
              the mat- I was taught that everything in life is first created and
              won in the mind, then reality. Sensei Camal's impact on my life
              goes beyond the dojo... I will always remember his voice in the
              back of my head during difficult times. He is the epitome of a
              role model, father, husband, professor, and most importantly a
              giver."
            </p>
            <p className="citation">Ryan Khumthanom Perez</p>
          </article>
          <article className="card">
            <p>
              “Sensei Camal was more than just an instructor. He would encourage
              me to stay away from negative influences so I can stay out of
              trouble. When I moved away from NJ he always stayed in touch,
              providing me with workout and nutrition plans to help me become a
              better judoka.”
            </p>
            <p className="citation">Fernando Aguilar</p>
          </article>
        </section>
        <article className="card">
          <p>
            "You would call me, “Qui chang” and tell everyone you purchased an
            action figure judoka in a small box from Japan and I came out as a
            mini judo warrior who didn't speak English but only knew how to
            fight. You trained me from the age of 3 years old and saw potential
            in me I didnt see in myself. After I told you what I was going to
            study in college, you were the only person that asked me if that's
            what I truly wanted to pursue or if I was following the dream my
            parents had for me. At the time, I was convinced it was what I
            wanted to pursue but that's just what my parents made me think. When
            I actually started learning about the field I realized that this
            career doesn't fit my personality and I wouldn't be happy doing this
            for the rest of my life. After a semester I stopped pursuing that
            career and decided to pursue my own dreams. You instilled confidence
            and courage into me to believe I could accomplish anything I ever
            set my mind to which is big reason why I let my parents dreams die,
            for mine to live. You knew me better than I knew myself and that is
            a statement I have never said about anyone. You brought me to
            heights I would've never reached on my own, and for this I'll never
            forget you. You were the definition of tough love but as the years
            grew on I realized you were only tough on the students you cherished
            the most because of how bad you wanted us to be great. I'll never
            forget the time I decided to go back to judo after taking 4 years
            off and you welcomed me with no hesitation and even let me train for
            free because of my current Financial situation. I was wearing an old
            beat up Gi that was a size too small and you instantly brought me
            into your office and gave me a brand new Gi for free. Your heart was
            so big and you were truly a kind hearted soft man behind all those
            muscles. I truly believe everyone on this planet has a deeper
            purpose in life, and I'm so grateful to have met a man who had found
            his purpose who was able to apply it onto me. You showed me to make
            your passion your purpose, and I live by this day after day. You
            left your mark in so many people's hearts. You may be gone, but your
            spirit will live on forever through all the stories people will tell
            of how you had impacted their lives."
          </p>
          <p className="citation">Steven Perez</p>
        </article>
      </div>
    </section>
  )
}

export default Testimonials
